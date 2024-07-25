package cata

import (
	"math"
	"time"

	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/core/stats"
)

func init() {
	core.NewItemEffect(55816, func(agent core.Agent) {
		character := agent.GetCharacter()
		actionID := core.ActionID{SpellID: 92179}

		procAura := character.NewTemporaryStatsAura("Leaden Despair Proc", actionID, stats.Stats{stats.Armor: 2580}, time.Second*10)

		icd := core.Cooldown{
			Timer:    character.NewTimer(),
			Duration: time.Second * 30,
		}
		procAura.Icd = &icd

		core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:     "Leaden Despair Trigger",
			Callback: core.CallbackOnSpellHitTaken,
			ProcMask: core.ProcMaskDirect,
			ActionID: core.ActionID{ItemID: 55816},
			Harmful:  true,
			Handler: func(sim *core.Simulation, _ *core.Spell, _ *core.SpellResult) {
				if icd.IsReady(sim) && character.CurrentHealthPercent() < 0.35 {
					icd.Use(sim)
					procAura.Activate(sim)
				}
			},
		})
	})

	core.NewItemEffect(56347, func(agent core.Agent) {
		character := agent.GetCharacter()
		actionID := core.ActionID{SpellID: 92184}

		procAura := character.NewTemporaryStatsAura("Leaden Despair (Heroic) Proc", actionID, stats.Stats{stats.Armor: 3420}, time.Second*10)

		icd := core.Cooldown{
			Timer:    character.NewTimer(),
			Duration: time.Second * 30,
		}
		procAura.Icd = &icd

		core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:     "Leaden Despair (Heroic) Trigger",
			Callback: core.CallbackOnSpellHitTaken,
			ProcMask: core.ProcMaskDirect,
			ActionID: core.ActionID{ItemID: 56347},
			Harmful:  true,
			Handler: func(sim *core.Simulation, _ *core.Spell, _ *core.SpellResult) {
				if icd.IsReady(sim) && character.CurrentHealthPercent() < 0.35 {
					icd.Use(sim)
					procAura.Activate(sim)
				}
			},
		})
	})

	core.NewItemEffect(63839, func(agent core.Agent) {
		character := agent.GetCharacter()
		spreadDot := character.RegisterSpell(core.SpellConfig{
			ActionID:                 core.ActionID{SpellID: 91076},
			SpellSchool:              core.SpellSchoolNature,
			DamageMultiplier:         1,
			DamageMultiplierAdditive: 1,
			ThreatMultiplier:         1,
			CritMultiplier:           character.DefaultSpellCritMultiplier(),
			ProcMask:                 core.ProcMaskEmpty,
			Flags:                    core.SpellFlagNoOnCastComplete,
			Dot: core.DotConfig{
				Aura: core.Aura{
					Label: "Vengful Wisp - 2",
				},
				NumberOfTicks:       5,
				TickLength:          3 * time.Second,
				AffectedByCastSpeed: false,
				OnSnapshot: func(sim *core.Simulation, target *core.Unit, dot *core.Dot, isRollover bool) {
					dot.Snapshot(target, 1176)
				},
				OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
					dot.CalcAndDealPeriodicSnapshotDamage(sim, target, dot.OutcomeSnapshotCrit)
					if sim.Proc(0.1, "Vengeful Wisp") {
						// select random proc target
						spreadTarget := sim.Encounter.TargetUnits[int(sim.Roll(0, float64(len(sim.Encounter.TargetUnits))))]

						// refresh dot on next step - refreshing potentially on aura expire
						// which will cause nasty things to happen
						core.StartDelayedAction(sim, core.DelayedActionOptions{
							DoAt:     sim.CurrentTime + 1,
							Priority: core.ActionPriorityDOT,
							OnAction: func(s *core.Simulation) {
								dot.Spell.Dot(spreadTarget).Apply(s)
							},
						})

					}
				},
			},
		})

		trinketDot := character.RegisterSpell(core.SpellConfig{
			ActionID:                 core.ActionID{SpellID: 91075},
			SpellSchool:              core.SpellSchoolNature,
			DamageMultiplier:         1,
			DamageMultiplierAdditive: 1,
			ThreatMultiplier:         1,
			ProcMask:                 core.ProcMaskEmpty,
			Flags:                    core.SpellFlagNoOnCastComplete,
			CritMultiplier:           character.DefaultSpellCritMultiplier(),
			Dot: core.DotConfig{
				Aura: core.Aura{
					Label: "Vengful Wisp - 1",
				},
				NumberOfTicks:       5,
				TickLength:          3 * time.Second,
				AffectedByCastSpeed: false,
				OnSnapshot: func(sim *core.Simulation, target *core.Unit, dot *core.Dot, isRollover bool) {
					dot.Snapshot(target, 1176)
				},
				OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
					dot.CalcAndDealPeriodicSnapshotDamage(sim, target, dot.OutcomeSnapshotCrit)

					if sim.Proc(0.1, "Vengeful Wisp") {
						// select random proc target
						spreadTarget := sim.Encounter.TargetUnits[int(sim.Roll(0, float64(len(sim.Encounter.TargetUnits))))]
						spreadDot.Dot(spreadTarget).Apply(sim) // refresh self on
					}
				},
			},
		})

		core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Vengful Wisp",
			ActionID:   core.ActionID{ItemID: 63839},
			Callback:   core.CallbackOnSpellHitDealt,
			ProcMask:   core.ProcMaskSpellDamage,
			ProcChance: 0.1,
			ICD:        time.Second * 100,
			Handler: func(sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				trinketDot.Dot(result.Target).Apply(sim)
			},
		})
	})

	core.NewItemEffect(64645, func(agent core.Agent) {
		character := agent.GetCharacter()
		storedMana := 0.0

		core.MakePermanent(character.RegisterAura(core.Aura{
			ActionID: core.ActionID{ItemID: 64645},
			Label:    "Tyrande's Favorite Doll (Mana)",
			OnReset: func(aura *core.Aura, sim *core.Simulation) {
				storedMana = 0.0
			},
			OnCastComplete: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell) {
				// Only Mana is converted
				if !character.HasManaBar() {
					return
				}

				storedMana = math.Min(4200, storedMana+spell.DefaultCast.Cost*0.2)
			},
		}))

		sharedTimer := character.GetOffensiveTrinketCD()
		manaMetric := character.NewManaMetrics(core.ActionID{SpellID: 92601})
		spell := character.RegisterSpell(core.SpellConfig{
			ActionID:                 core.ActionID{ItemID: 64645},
			SpellSchool:              core.SpellSchoolArcane,
			Flags:                    core.SpellFlagNoOnCastComplete,
			ProcMask:                 core.ProcMaskEmpty,
			DamageMultiplier:         1,
			DamageMultiplierAdditive: 1,
			ThreatMultiplier:         1,
			CritMultiplier:           character.DefaultSpellCritMultiplier(),
			Cast: core.CastConfig{
				CD: core.Cooldown{
					Duration: time.Minute * 1,
					Timer:    sharedTimer,
				},
			},
			ApplyEffects: func(sim *core.Simulation, _ *core.Unit, spell *core.Spell) {
				for _, aoeTarget := range sim.Encounter.TargetUnits {
					spell.CalcAndDealDamage(sim, aoeTarget, storedMana, spell.OutcomeMagicHitAndCrit)
				}

				character.AddMana(sim, storedMana, manaMetric)
			},
		})

		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    spell,
			Priority: core.CooldownPriorityDefault,
			Type:     core.CooldownTypeDPS | core.CooldownTypeMana,
		})
	})

	core.NewItemEffect(59461, func(agent core.Agent) {
		character := agent.GetCharacter()

		dummyAura := character.RegisterAura(core.Aura{
			Label:     "Raw Fury",
			ActionID:  core.ActionID{SpellID: 91832},
			Duration:  time.Second * 15,
			MaxStacks: 5,
		})

		core.MakePermanent(core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Raw Fury Aura",
			ActionID:   core.ActionID{ItemID: 59461},
			Callback:   core.CallbackOnSpellHitDealt,
			ProcMask:   core.ProcMaskMelee,
			ProcChance: 0.5,
			Outcome:    core.OutcomeLanded,
			ICD:        time.Second * 5,
			Handler: func(sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				dummyAura.Activate(sim)
				dummyAura.AddStack(sim)
			},
		}))

		buffAura := character.NewTemporaryStatsAura("Forged Fury", core.ActionID{SpellID: 91836}, stats.Stats{stats.Strength: 1926}, time.Second*20)
		sharedCD := character.GetOffensiveTrinketCD()
		trinketSpell := character.RegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{ItemID: 59461},
			SpellSchool: core.SpellSchoolPhysical,
			ProcMask:    core.ProcMaskEmpty,
			Flags:       core.SpellFlagNoOnCastComplete,
			Cast: core.CastConfig{
				SharedCD: core.Cooldown{
					Timer:    sharedCD,
					Duration: time.Second * 20,
				},
				CD: core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Minute * 2,
				},
			},
			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				dummyAura.Deactivate(sim)
				buffAura.Activate(sim)
			},
			ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
				return dummyAura.GetStacks() == 5
			},
		})

		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    trinketSpell,
			Priority: core.CooldownPriorityDefault,
			Type:     core.CooldownTypeDPS,
			ShouldActivate: func(s *core.Simulation, c *core.Character) bool {
				return dummyAura.GetStacks() == 5
			},
		})
	})

	core.NewItemEffect(59514, func(agent core.Agent) {
		character := agent.GetCharacter()

		procAura := core.MakeStackingAura(character, core.StackingStatAura{
			Aura: core.Aura{
				Label:     "Heart's Revelation",
				ActionID:  core.ActionID{SpellID: 91027},
				Duration:  time.Second * 15,
				MaxStacks: 5,
			},
			BonusPerStack: stats.Stats{stats.SpellPower: 77},
		})

		core.MakePermanent(core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Heart of Ignacious Aura",
			ActionID:   core.ActionID{ItemID: 59514},
			Callback:   core.CallbackOnSpellHitDealt,
			ProcMask:   core.ProcMaskSpellDamage,
			ProcChance: 1,
			Outcome:    core.OutcomeLanded,
			ICD:        time.Second * 2,
			Handler: func(sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				procAura.Activate(sim)
				procAura.AddStack(sim)
			},
		}))

		buffAura := character.RegisterAura(core.Aura{
			Label:     "Heart's Judgement",
			ActionID:  core.ActionID{SpellID: 91041},
			Duration:  time.Second * 20,
			MaxStacks: 5,
			OnStacksChange: func(aura *core.Aura, sim *core.Simulation, oldStacks, newStacks int32) {
				deltaHaste := float64(321) * float64(newStacks-oldStacks)
				character.AddStatsDynamic(sim, stats.Stats{stats.MeleeHaste: deltaHaste, stats.SpellHaste: deltaHaste})
			},
		})

		sharedCD := character.GetOffensiveTrinketCD()
		trinketSpell := character.RegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{ItemID: 59514},
			SpellSchool: core.SpellSchoolPhysical,
			ProcMask:    core.ProcMaskEmpty,
			Flags:       core.SpellFlagNoOnCastComplete,
			Cast: core.CastConfig{
				SharedCD: core.Cooldown{
					Timer:    sharedCD,
					Duration: time.Second * 20,
				},
				CD: core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Minute * 2,
				},
			},
			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				buffAura.Activate(sim)
				buffAura.SetStacks(sim, procAura.GetStacks())
				procAura.Deactivate(sim)
			},
		})

		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    trinketSpell,
			Priority: core.CooldownPriorityDefault,
			Type:     core.CooldownTypeDPS,
			ShouldActivate: func(s *core.Simulation, c *core.Character) bool {
				return procAura.GetStacks() == 5
			},
		})
	})

	core.NewItemEffect(65110, func(agent core.Agent) {
		character := agent.GetCharacter()

		procAura := core.MakeStackingAura(character, core.StackingStatAura{
			Aura: core.Aura{
				Label:     "Heart's Revelation (Heroic)",
				ActionID:  core.ActionID{SpellID: 92325},
				Duration:  time.Second * 15,
				MaxStacks: 5,
			},
			BonusPerStack: stats.Stats{stats.SpellPower: 87},
		})

		core.MakePermanent(core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Heart of Ignacious (Heroic) Aura",
			ActionID:   core.ActionID{ItemID: 65110},
			Callback:   core.CallbackOnSpellHitDealt,
			ProcMask:   core.ProcMaskSpellDamage,
			ProcChance: 1,
			Outcome:    core.OutcomeLanded,
			ICD:        time.Second * 2,
			Handler: func(sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				procAura.Activate(sim)
				procAura.AddStack(sim)
			},
		}))

		buffAura := character.RegisterAura(core.Aura{
			Label:     "Heart's Judgement (Heroic)",
			ActionID:  core.ActionID{SpellID: 92328},
			Duration:  time.Second * 20,
			MaxStacks: 5,
			OnStacksChange: func(aura *core.Aura, sim *core.Simulation, oldStacks, newStacks int32) {
				deltaHaste := float64(363) * float64(newStacks-oldStacks)
				character.AddStatsDynamic(sim, stats.Stats{stats.MeleeHaste: deltaHaste, stats.SpellHaste: deltaHaste})
			},
		})

		sharedCD := character.GetOffensiveTrinketCD()
		trinketSpell := character.RegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{ItemID: 65110},
			SpellSchool: core.SpellSchoolPhysical,
			ProcMask:    core.ProcMaskEmpty,
			Flags:       core.SpellFlagNoOnCastComplete,
			Cast: core.CastConfig{
				SharedCD: core.Cooldown{
					Timer:    sharedCD,
					Duration: time.Second * 20,
				},
				CD: core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Minute * 2,
				},
			},
			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				buffAura.Activate(sim)
				buffAura.SetStacks(sim, procAura.GetStacks())
				procAura.Deactivate(sim)
			},
		})

		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    trinketSpell,
			Priority: core.CooldownPriorityDefault,
			Type:     core.CooldownTypeDPS,
			ShouldActivate: func(s *core.Simulation, c *core.Character) bool {
				return procAura.GetStacks() == 5
			},
		})
	})

	core.NewItemEffect(59354, func(agent core.Agent) {
		character := agent.GetCharacter()

		procAura := core.MakeStackingAura(character, core.StackingStatAura{
			Aura: core.Aura{
				Label:     "Inner Eye",
				ActionID:  core.ActionID{SpellID: 91320},
				Duration:  time.Second * 15,
				MaxStacks: 5,
				Icd: &core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Second * 30,
				},
			},
			BonusPerStack: stats.Stats{stats.Spirit: 103},
		})

		core.MakePermanent(core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Jar of Ancient Remedies Aura",
			ActionID:   core.ActionID{ItemID: 59354},
			Callback:   core.CallbackOnHealDealt,
			ProcMask:   core.ProcMaskSpellHealing,
			ProcChance: 1,
			Outcome:    core.OutcomeLanded,
			ICD:        time.Second * 2,
			Handler: func(sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				if procAura.Icd.IsReady(sim) {
					procAura.Activate(sim)
					procAura.AddStack(sim)
				}
			},
		}))

		manaMetric := character.NewManaMetrics(core.ActionID{SpellID: 91322})
		trinketSpell := character.RegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{ItemID: 59461},
			SpellSchool: core.SpellSchoolPhysical,
			ProcMask:    core.ProcMaskEmpty,
			Flags:       core.SpellFlagNoOnCastComplete,
			Cast: core.CastConfig{
				CD: core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Minute * 2,
				},
			},
			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				procAura.Deactivate(sim)

				// can not regain stacks for 30 seconds
				procAura.Icd.Use(sim)
				character.AddMana(sim, 6420, manaMetric)
			},
		})

		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    trinketSpell,
			Priority: core.CooldownPriorityDefault,
			Type:     core.CooldownTypeMana,
		})
	})

	core.NewItemEffect(65029, func(agent core.Agent) {
		character := agent.GetCharacter()

		procAura := core.MakeStackingAura(character, core.StackingStatAura{
			Aura: core.Aura{
				Label:     "Inner Eye (Heroic)",
				ActionID:  core.ActionID{SpellID: 92329},
				Duration:  time.Second * 15,
				MaxStacks: 5,
				Icd: &core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Second * 30,
				},
			},
			BonusPerStack: stats.Stats{stats.Spirit: 116},
		})

		core.MakePermanent(core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Jar of Ancient Remedies (Heroic) Aura",
			ActionID:   core.ActionID{ItemID: 65029},
			Callback:   core.CallbackOnHealDealt,
			ProcMask:   core.ProcMaskSpellHealing,
			ProcChance: 1,
			Outcome:    core.OutcomeLanded,
			ICD:        time.Second * 2,
			Handler: func(sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				if procAura.Icd.IsReady(sim) {
					procAura.Activate(sim)
					procAura.AddStack(sim)
				}
			},
		}))

		manaMetric := character.NewManaMetrics(core.ActionID{SpellID: 92331})
		trinketSpell := character.RegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{ItemID: 65029},
			SpellSchool: core.SpellSchoolPhysical,
			ProcMask:    core.ProcMaskEmpty,
			Flags:       core.SpellFlagNoOnCastComplete,
			Cast: core.CastConfig{
				CD: core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Minute * 2,
				},
			},
			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				procAura.Deactivate(sim)
				// can not regain stacks for 30 seconds
				procAura.Icd.Use(sim)
				character.AddMana(sim, 7260, manaMetric)
			},
		})

		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    trinketSpell,
			Priority: core.CooldownPriorityDefault,
			Type:     core.CooldownTypeMana,
		})
	})

	core.NewItemEffect(68972, func(agent core.Agent) {
		character := agent.GetCharacter()

		dummyAura := character.RegisterAura(core.Aura{
			Label:     "Titanic Power",
			ActionID:  core.ActionID{SpellID: 96923},
			Duration:  time.Second * 30,
			MaxStacks: 5,
		})

		core.MakePermanent(core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Titanic Power Aura",
			ActionID:   core.ActionID{ItemID: 68972},
			Callback:   core.CallbackOnSpellHitDealt,
			ProcMask:   core.ProcMaskMelee,
			ProcChance: 1,
			Outcome:    core.OutcomeCrit,
			Handler: func(sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				dummyAura.Activate(sim)
				dummyAura.AddStack(sim)
			},
		}))

		statBonus := float64(508 * dummyAura.MaxStacks)
		buffAuraCrit := character.NewTemporaryStatsAura("Blessing of the Shaper Crit", core.ActionID{SpellID: 96928}, stats.Stats{stats.MeleeCrit: statBonus, stats.SpellCrit: statBonus}, time.Second*15)
		buffAuraHaste := character.NewTemporaryStatsAura("Blessing of the Shaper Haste", core.ActionID{SpellID: 96927}, stats.Stats{stats.MeleeHaste: statBonus, stats.SpellHaste: statBonus}, time.Second*15)
		buffAuraMastery := character.NewTemporaryStatsAura("Blessing of the Shaper Mastery", core.ActionID{SpellID: 96929}, stats.Stats{stats.Mastery: statBonus}, time.Second*15)

		sharedCD := character.GetOffensiveTrinketCD()
		trinketSpell := character.RegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{ItemID: 68972},
			SpellSchool: core.SpellSchoolPhysical,
			ProcMask:    core.ProcMaskEmpty,
			Flags:       core.SpellFlagNoOnCastComplete,
			Cast: core.CastConfig{
				SharedCD: core.Cooldown{
					Timer:    sharedCD,
					Duration: time.Second * 15,
				},
				CD: core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Minute * 2,
				},
			},

			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				statType := character.GetHighestStat([]stats.Stat{stats.MeleeCrit, stats.SpellCrit, stats.MeleeHaste, stats.SpellHaste, stats.Mastery})
				switch statType {
				case stats.MeleeCrit, stats.SpellCrit:
					buffAuraCrit.Activate(sim)
				case stats.MeleeHaste, stats.SpellHaste:
					buffAuraHaste.Activate(sim)
				case stats.Mastery:
					buffAuraMastery.Activate(sim)
				default:
					panic("unexpected statType")
				}
				dummyAura.Deactivate(sim)
			},
			ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
				return dummyAura.GetStacks() == 5
			},
		})

		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    trinketSpell,
			Priority: core.CooldownPriorityDefault,
			Type:     core.CooldownTypeDPS,
			ShouldActivate: func(s *core.Simulation, c *core.Character) bool {
				return dummyAura.GetStacks() == 5
			},
		})
	})

	core.NewItemEffect(69113, func(agent core.Agent) {
		character := agent.GetCharacter()

		dummyAura := character.RegisterAura(core.Aura{
			Label:     "Titanic Power (Heroic)",
			ActionID:  core.ActionID{SpellID: 96923},
			Duration:  time.Second * 30,
			MaxStacks: 5,
		})

		core.MakePermanent(core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Titanic Power Aura (Heroic)",
			ActionID:   core.ActionID{ItemID: 69113},
			Callback:   core.CallbackOnSpellHitDealt,
			ProcMask:   core.ProcMaskMelee,
			ProcChance: 1,
			Outcome:    core.OutcomeCrit,
			Handler: func(sim *core.Simulation, spell *core.Spell, result *core.SpellResult) {
				dummyAura.Activate(sim)
				dummyAura.AddStack(sim)
			},
		}))

		// TODO: discuss the following scenario:
		// the trinket should allow to activate at any number of stacks, should we allow this behaviour at all to the users?
		// would also mean that we need the temporary aura to be created on the fly after an environment is finalized
		statBonus := float64(575 * dummyAura.MaxStacks)
		buffAuraCrit := character.NewTemporaryStatsAura("Blessing of the Shaper Crit (Heroic)", core.ActionID{SpellID: 96928}, stats.Stats{stats.MeleeCrit: statBonus, stats.SpellCrit: statBonus}, time.Second*15)
		buffAuraHaste := character.NewTemporaryStatsAura("Blessing of the Shaper Haste (Heroic)", core.ActionID{SpellID: 96927}, stats.Stats{stats.MeleeHaste: statBonus, stats.SpellHaste: statBonus}, time.Second*15)
		buffAuraMastery := character.NewTemporaryStatsAura("Blessing of the Shaper Mastery (Heroic)", core.ActionID{SpellID: 96929}, stats.Stats{stats.Mastery: statBonus}, time.Second*15)

		sharedCD := character.GetOffensiveTrinketCD()
		trinketSpell := character.RegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{ItemID: 69113},
			SpellSchool: core.SpellSchoolPhysical,
			ProcMask:    core.ProcMaskEmpty,
			Flags:       core.SpellFlagNoOnCastComplete,
			Cast: core.CastConfig{
				SharedCD: core.Cooldown{
					Timer:    sharedCD,
					Duration: time.Second * 15,
				},
				CD: core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Minute * 2,
				},
			},
			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				statType := character.GetHighestStat([]stats.Stat{stats.MeleeCrit, stats.SpellCrit, stats.MeleeHaste, stats.SpellHaste, stats.Mastery})
				switch statType {
				case stats.MeleeCrit, stats.SpellCrit:
					buffAuraCrit.Activate(sim)
				case stats.MeleeHaste, stats.SpellHaste:
					buffAuraHaste.Activate(sim)
				case stats.Mastery:
					buffAuraMastery.Activate(sim)
				default:
					panic("unexpected statType")
				}
				dummyAura.Deactivate(sim)
			},
			ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
				return dummyAura.GetStacks() == 5
			},
		})

		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    trinketSpell,
			Priority: core.CooldownPriorityDefault,
			Type:     core.CooldownTypeDPS,
			ShouldActivate: func(s *core.Simulation, c *core.Character) bool {
				return dummyAura.GetStacks() == 5
			},
		})
	})

	core.NewItemEffect(68994, func(agent core.Agent) {
		character := agent.GetCharacter()

		bonusStats := 1624.0
		procAuraCrit := character.NewTemporaryStatsAura("Matrix Restabilizer Crit Proc", core.ActionID{SpellID: 96978}, stats.Stats{stats.MeleeCrit: bonusStats, stats.SpellCrit: bonusStats}, time.Second*30)
		procAuraHaste := character.NewTemporaryStatsAura("Matrix Restabilizer Haste Proc", core.ActionID{SpellID: 96977}, stats.Stats{stats.MeleeHaste: bonusStats, stats.SpellHaste: bonusStats}, time.Second*30)
		procAuraMastery := character.NewTemporaryStatsAura("Matrix Restabilizer Mastery Proc", core.ActionID{SpellID: 96979}, stats.Stats{stats.Mastery: bonusStats}, time.Second*30)

		icd := core.Cooldown{
			Timer:    character.NewTimer(),
			Duration: time.Second * 105,
		}

		procAuraCrit.Icd = &icd
		procAuraHaste.Icd = &icd
		procAuraMastery.Icd = &icd

		core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Matrix Restabilizer Trigger",
			Callback:   core.CallbackOnSpellHitDealt,
			ProcMask:   core.ProcMaskMeleeOrRanged,
			ProcChance: 0.2,
			ActionID:   core.ActionID{ItemID: 68994},
			Harmful:    true,
			Handler: func(sim *core.Simulation, _ *core.Spell, _ *core.SpellResult) {
				if icd.IsReady(sim) {
					statType := character.GetHighestStat([]stats.Stat{stats.MeleeCrit, stats.SpellCrit, stats.MeleeHaste, stats.SpellHaste, stats.Mastery})
					switch statType {
					case stats.MeleeCrit, stats.SpellCrit:
						procAuraCrit.Activate(sim)
					case stats.MeleeHaste, stats.SpellHaste:
						procAuraHaste.Activate(sim)
					case stats.Mastery:
						procAuraMastery.Activate(sim)
					default:
						panic("unexpected statType")
					}
					icd.Use(sim)
				}
			},
		})
	})

	core.NewItemEffect(69150, func(agent core.Agent) {
		character := agent.GetCharacter()

		bonusStats := 1834.0
		procAuraCrit := character.NewTemporaryStatsAura("Matrix Restabilizer Crit Proc (Heroic)", core.ActionID{SpellID: 97140}, stats.Stats{stats.MeleeCrit: bonusStats, stats.SpellCrit: bonusStats}, time.Second*30)
		procAuraHaste := character.NewTemporaryStatsAura("Matrix Restabilizer Haste Proc (Heroic)", core.ActionID{SpellID: 97139}, stats.Stats{stats.MeleeHaste: bonusStats, stats.SpellHaste: bonusStats}, time.Second*30)
		procAuraMastery := character.NewTemporaryStatsAura("Matrix Restabilizer Mastery Proc (Heroic)", core.ActionID{SpellID: 97141}, stats.Stats{stats.Mastery: bonusStats}, time.Second*30)

		icd := core.Cooldown{
			Timer:    character.NewTimer(),
			Duration: time.Second * 105,
		}

		procAuraCrit.Icd = &icd
		procAuraHaste.Icd = &icd
		procAuraMastery.Icd = &icd

		core.MakeProcTriggerAura(&character.Unit, core.ProcTrigger{
			Name:       "Matrix Restabilizer Trigger (Heroic)",
			Callback:   core.CallbackOnSpellHitDealt,
			ProcMask:   core.ProcMaskMeleeOrRanged,
			ProcChance: 0.2,
			ActionID:   core.ActionID{ItemID: 69150},
			Harmful:    true,
			Handler: func(sim *core.Simulation, _ *core.Spell, _ *core.SpellResult) {
				if icd.IsReady(sim) {
					statType := character.GetHighestStat([]stats.Stat{stats.MeleeCrit, stats.SpellCrit, stats.MeleeHaste, stats.SpellHaste, stats.Mastery})
					switch statType {
					case stats.MeleeCrit, stats.SpellCrit:
						procAuraCrit.Activate(sim)
					case stats.MeleeHaste, stats.SpellHaste:
						procAuraHaste.Activate(sim)
					case stats.Mastery:
						procAuraMastery.Activate(sim)
					default:
						panic("unexpected statType")
					}
					icd.Use(sim)
				}
			},
		})
	})
}
