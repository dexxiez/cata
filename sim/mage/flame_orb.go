package mage

import (
	"time"

	"github.com/wowsims/cata/sim/core"
)

func (mage *Mage) registerFlameOrbSpell() {
	//Fire Power gives 33/66/100 percent chance to explode at end like Living Bomb
	orbExplosionChance := float64(mage.Talents.FirePower) / 3

	flameOrbExplosionSpell := mage.RegisterSpell(core.SpellConfig{
		ActionID:    core.ActionID{SpellID: 123}, //TODO find id, can't check log since no lvl 81 toon
		SpellSchool: core.SpellSchoolFire,
		ProcMask:    core.ProcMaskSpellDamage,
		Flags:       SpellFlagMage,

		DamageMultiplierAdditive: 1 +
			.01*float64(mage.Talents.FirePower) +
			.05*float64(mage.Talents.CriticalMass),
		CritMultiplier:   mage.DefaultSpellCritMultiplier(),
		ThreatMultiplier: 1,

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			baseDamage := 0.5*mage.ScalingBaseDamage + 0.515*spell.SpellPower()
			baseDamage *= sim.Encounter.AOECapMultiplier()
			for _, aoeTarget := range sim.Encounter.TargetUnits {
				spell.CalcAndDealDamage(sim, aoeTarget, baseDamage, spell.OutcomeMagicHitAndCrit)
			}
		},
	})

	mage.FlameOrb = mage.RegisterSpell(core.SpellConfig{
		ActionID:    core.ActionID{SpellID: 82731}, //82731 summons orb, 82739 is LIKELY the damaging ID
		SpellSchool: core.SpellSchoolFire,
		ProcMask:    core.ProcMaskSpellDamage,
		Flags:       SpellFlagMage | core.SpellFlagAPL,

		ManaCost: core.ManaCostOptions{
			BaseCost: 0.06,
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: core.GCDDefault,
			},
			CD: core.Cooldown{
				Timer:    mage.NewTimer(),
				Duration: time.Minute,
			},
		},

		DamageMultiplierAdditive: 1 +
			.01*float64(mage.Talents.FirePower) +
			.05*float64(mage.Talents.CriticalMass),
		CritMultiplier:   mage.DefaultSpellCritMultiplier(),
		ThreatMultiplier: 1,

		Dot: core.DotConfig{ // Orb picks the closest target, for now treating like a dot ala arcane missiles
			Aura: core.Aura{
				Label: "FlameOrb",
				OnExpire: func(aura *core.Aura, sim *core.Simulation) {
					if sim.RandomFloat(aura.Label) < orbExplosionChance {
						flameOrbExplosionSpell.Cast(sim, aura.Unit)
					}
				},
			},

			NumberOfTicks:       15, // Need to test this, just going off tooltip
			TickLength:          time.Second * 1,
			AffectedByCastSpeed: true, // Requires testing
			OnSnapshot: func(sim *core.Simulation, target *core.Unit, dot *core.Dot, _ bool) {
				// Ignoring mastery since it's not really a dot
				dot.SnapshotBaseDamage = 0.278*mage.ScalingBaseDamage + 0.134*dot.Spell.SpellPower()
				dot.SnapshotAttackerMultiplier = dot.Spell.AttackerDamageMultiplier(dot.Spell.Unit.AttackTables[target.UnitIndex])
			},
			OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
				dot.CalcAndDealPeriodicSnapshotDamage(sim, target, dot.OutcomeTick)
			},
		},

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			result := spell.CalcOutcome(sim, target, spell.OutcomeMagicHit)
			if result.Landed() {
				spell.SpellMetrics[target.UnitIndex].Hits--
				spell.Dot(target).Apply(sim)
			}
			spell.DealOutcome(sim, result)
		},
	})
}
