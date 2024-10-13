import{m as e,l as s,n as l,o as t,K as a,q as n,R as r,Q as o,U as i,V as c,W as p,X as d,T as h,v as g,Y as u,F as I,G as m}from"./preset_utils-Dz2KMMFX.chunk.js";import{R as S}from"./suggest_reforges_action-DVUR84On.chunk.js";import{a4 as f,a5 as v,a7 as O,G as P,at as y,au as T,av as E,aw as A,U as k,ac as L,ad as R,ae as w,af as F,aj as G,al as C,ak as N,am as b,b as V,a as q,ah as M,a6 as B,ao as H,S as W,F as D,R as j}from"./detailed_results-BcgtFdXH.chunk.js";import{S as U}from"./inputs-DC_F9vtK.chunk.js";const x=e({fieldName:"okfUptime",label:"Owlkin Frenzy Uptime (%)",labelTooltip:"Percentage of fight uptime for Owlkin Frenzy",percent:!0}),z={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:88747}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:88747}}},doAtValue:{const:{val:"-4s"}}},{action:{castSpell:{spellId:{spellId:88747}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{spellId:2912}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.5s"}},hide:!0},{action:{castSpell:{spellId:{spellId:5176}}},doAtValue:{const:{val:"-1.5s"}},hide:!0}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"2s"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{and:{vals:[{druidCurrentEclipsePhase:{eclipsePhase:"NeutralPhase"}},{not:{val:{auraIsActive:{auraId:{spellId:61345}}}}},{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"2s"}}}}]}},castSpell:{spellId:{spellId:8921}}}},{action:{castSpell:{spellId:{spellId:33831}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"100"}}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"100"}}}},{cmp:{op:"OpGe",lhs:{currentLunarEnergy:{}},rhs:{const:{val:"100"}}}}]}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentLunarEnergy:{}},rhs:{const:{val:"100"}}}}]}},castSpell:{spellId:{spellId:48505}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:48517}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"15"}}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:5570}}},rhs:{dotTickFrequency:{spellId:{spellId:5570}}}}}]}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:5570}}},rhs:{math:{op:"OpMul",lhs:{dotTickFrequency:{spellId:{spellId:5570}}},rhs:{const:{val:"6"}}}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:5570}}},{castSpell:{spellId:{spellId:93402}}}]}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:48518}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentLunarEnergy:{}},rhs:{const:{val:"20"}}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:5570}}},rhs:{dotTickFrequency:{spellId:{spellId:5570}}}}}]}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:5570}}},rhs:{math:{op:"OpMul",lhs:{dotTickFrequency:{spellId:{spellId:5570}}},rhs:{const:{val:"6"}}}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:5570}}},{castSpell:{spellId:{spellId:8921}}}]}}},{action:{condition:{and:{vals:[{not:{val:{druidCurrentEclipsePhase:{eclipsePhase:"SolarPhase"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"100"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"80"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"60"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"40"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"20"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"0"}}}}]}},castSpell:{spellId:{spellId:78674}}}},{action:{condition:{and:{vals:[{druidCurrentEclipsePhase:{eclipsePhase:"SolarPhase"}},{cmp:{op:"OpLe",lhs:{currentLunarEnergy:{}},rhs:{const:{val:"60"}}}}]}},castSpell:{spellId:{spellId:78674}}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:48518}}},{auraIsActive:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:78674}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:48517}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:88747}}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:88751}}}},{hide:!0,action:{condition:{not:{val:{druidCurrentEclipsePhase:{eclipsePhase:"LunarPhase"}}}},castSpell:{spellId:{spellId:5176}}}},{action:{condition:{druidCurrentEclipsePhase:{eclipsePhase:"SolarPhase"}},castSpell:{spellId:{spellId:5176}}}},{action:{castSpell:{spellId:{spellId:2912}}}}]},_={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:88747}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:88747}}},doAtValue:{const:{val:"-4s"}}},{action:{castSpell:{spellId:{spellId:88747}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{spellId:2912}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.5s"}},hide:!0},{action:{castSpell:{spellId:{spellId:5176}}},doAtValue:{const:{val:"-1.5s"}},hide:!0}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"2s"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{and:{vals:[{druidCurrentEclipsePhase:{eclipsePhase:"NeutralPhase"}},{not:{val:{auraIsActive:{auraId:{spellId:61345}}}}},{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"2s"}}}}]}},castSpell:{spellId:{spellId:8921}}}},{action:{castSpell:{spellId:{spellId:33831}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"100"}}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"100"}}}},{cmp:{op:"OpGe",lhs:{currentLunarEnergy:{}},rhs:{const:{val:"100"}}}}]}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentLunarEnergy:{}},rhs:{const:{val:"100"}}}}]}},castSpell:{spellId:{spellId:48505}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:48517}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"15"}}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:5570}}},rhs:{dotTickFrequency:{spellId:{spellId:5570}}}}}]}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:5570}}},rhs:{math:{op:"OpMul",lhs:{dotTickFrequency:{spellId:{spellId:5570}}},rhs:{const:{val:"4"}}}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:5570}}},{castSpell:{spellId:{spellId:93402}}}]}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:48518}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentLunarEnergy:{}},rhs:{const:{val:"20"}}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:5570}}},rhs:{dotTickFrequency:{spellId:{spellId:5570}}}}}]}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:5570}}},rhs:{math:{op:"OpMul",lhs:{dotTickFrequency:{spellId:{spellId:5570}}},rhs:{const:{val:"8"}}}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:5570}}},{castSpell:{spellId:{spellId:8921}}}]}}},{action:{condition:{and:{vals:[{not:{val:{druidCurrentEclipsePhase:{eclipsePhase:"SolarPhase"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"100"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"80"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"60"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"40"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"20"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"0"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"25"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"50"}}}},{cmp:{op:"OpNe",lhs:{currentSolarEnergy:{}},rhs:{const:{val:"75"}}}}]}},castSpell:{spellId:{spellId:78674}}}},{action:{condition:{and:{vals:[{druidCurrentEclipsePhase:{eclipsePhase:"SolarPhase"}},{cmp:{op:"OpLe",lhs:{currentLunarEnergy:{}},rhs:{const:{val:"60"}}}}]}},castSpell:{spellId:{spellId:78674}}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:48518}}},{auraIsActive:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:78674}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:48517}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:88747}}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:88751}}}},{hide:!0,action:{condition:{not:{val:{druidCurrentEclipsePhase:{eclipsePhase:"LunarPhase"}}}},castSpell:{spellId:{spellId:5176}}}},{action:{condition:{druidCurrentEclipsePhase:{eclipsePhase:"SolarPhase"}},castSpell:{spellId:{spellId:5176}}}},{action:{castSpell:{spellId:{spellId:2912}}}}]},K={items:[{id:65200,enchant:4207,gems:[68780,52236],reforging:141},{id:65112,reforging:162},{id:65203,enchant:4200,gems:[52207],reforging:162},{id:60232,enchant:4115,gems:[52207],reforging:162},{id:65045,enchant:4102,gems:[52207,52207],reforging:167},{id:65021,enchant:4257,gems:[0],reforging:167},{id:65199,enchant:4068,gems:[52207,0],reforging:141},{id:65374,randomSuffix:-231,enchant:3601,gems:[52208,52207]},{id:65201,enchant:4110,gems:[52207,52236]},{id:60236,enchant:4104,gems:[52236,52207],reforging:167},{id:65123},{id:65373,randomSuffix:-131},{id:65105},{id:62047,reforging:167},{id:65041,enchant:4097},{id:65133,enchant:4091},{id:64672,gems:[52207],reforging:141}]},Q={items:[{id:71497,enchant:4207,gems:[68780,52208],reforging:162},{id:71472,gems:[52207],reforging:162},{id:71450,randomSuffix:-285,enchant:4200,gems:[52207],reforging:162},{id:71434,enchant:4115,reforging:167},{id:71499,enchant:4102,gems:[52207,52207],reforging:162},{id:71463,enchant:4257,gems:[0]},{id:71496,enchant:3246,gems:[52207,0]},{id:71249,gems:[52207,52207],reforging:141},{id:71498,enchant:4110,gems:[52207,52207],reforging:145},{id:71436,enchant:4104,gems:[52207],reforging:117},{id:71217,gems:[52207],reforging:137},{id:71449,reforging:167},{id:69110},{id:62047},{id:71086,enchant:4097,gems:[52207,52207,52207]},{},{id:71580,gems:[52207]}]},X={items:[{id:78696,enchant:4207,gems:[68780,71881],reforging:119},{id:78364,reforging:119},{id:78744,enchant:4200,gems:[71881,71881],reforging:145},{id:78508,enchant:4115,reforging:119},{id:78662,enchant:4102,gems:[71881,71881,71850],reforging:117},{id:78372,enchant:4257,gems:[71881,0],reforging:117},{id:78676,enchant:4068,gems:[71881,0]},{id:78420,gems:[71881,71881,71881],reforging:117},{id:78714,enchant:4110,gems:[71881,71881,71881]},{id:78434,enchant:4104,gems:[71881,71881],reforging:145},{id:78491,gems:[71881],reforging:119},{id:78419,gems:[71881]},{id:77995},{id:77991},{id:78363,enchant:4097,gems:[71881],reforging:141},{id:78433,enchant:4091,gems:[71881],reforging:119},{id:78553,gems:[52207],reforging:147}]},Y=s("Pre-raid",{items:[{id:59453,enchant:4207,gems:[68780,59479,59493]},{id:67130,reforging:162},{id:57866,enchant:4200,gems:[52207,52207],reforging:145},{id:67131,enchant:4115,gems:[52207],reforging:162},{id:56561,enchant:4102,gems:[52207],reforging:145},{id:56297,enchant:4257,gems:[0],reforging:141},{id:56334,enchant:4107,gems:[52207,0],reforging:151},{id:56536,enchant:3601,gems:[52207,52207],reforging:151},{id:56401,enchant:4110,gems:[52207,52207],reforging:165},{id:56277,enchant:4104,gems:[52207],reforging:144},{id:67129,reforging:141},{id:64904,reforging:162},{id:56320},{id:62047,reforging:167},{id:64489,enchant:4097,reforging:141},{},{id:56372,gems:[52207],reforging:119}]}),J=s("T11",K),Z=s("T12",Q),$=s("T13 (WIP)",X),ee=l("T11 4P",z),se=l("T12",_),le=t("Standard",f.fromMap({[v.StatIntellect]:1.3,[v.StatSpirit]:1.27,[v.StatSpellPower]:1,[v.StatHitRating]:1.27,[v.StatCritRating]:.41,[v.StatHasteRating]:.8,[v.StatMasteryRating]:.56})),te={name:"Standard",data:O.create({talentsString:"33230221123212111001-01-020331",glyphs:P.create({prime1:y.GlyphOfInsectSwarm,prime2:y.GlyphOfMoonfire,prime3:y.GlyphOfWrath,major1:T.GlyphOfStarfall,major2:T.GlyphOfRebirth,major3:T.GlyphOfFocus,minor1:E.GlyphOfTyphoon,minor2:E.GlyphOfUnburdenedRebirth,minor3:E.GlyphOfMarkOfTheWild})})},ae=A.create({classOptions:{innervateTarget:k.create()}}),ne=L.create({flask:R.FlaskOfTheDraconicMind,food:w.FoodSeafoodFeast,defaultPotion:F.VolcanicPotion,prepopPotion:F.VolcanicPotion}),re=G.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),oe=C.create({vampiricTouch:!0,darkIntent:!0}),ie=N.create({}),ce=b.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!0,demoralizingShout:!0,frostFever:!0}),pe={distanceFromTarget:20,profession1:V.Engineering,profession2:V.Tailoring,darkIntentUptime:100},de=a("Balance T11",{gear:J,talents:te,rotation:ee,epWeights:le}),he=a("Balance T12",{gear:Z,talents:te,rotation:se,epWeights:le}),ge=n(W.SpecBalanceDruid,{cssClass:"balance-druid-sim-ui",cssScheme:q.getCssClass(q.Druid),knownIssues:[],epStats:[v.StatIntellect,v.StatSpirit,v.StatSpellPower,v.StatHitRating,v.StatCritRating,v.StatHasteRating,v.StatMasteryRating],epReferenceStat:v.StatSpellPower,displayStats:M.createDisplayStatArray([v.StatHealth,v.StatMana,v.StatStamina,v.StatIntellect,v.StatSpirit,v.StatSpellPower,v.StatMasteryRating],[B.PseudoStatSpellHitPercent,B.PseudoStatSpellCritPercent,B.PseudoStatSpellHastePercent]),modifyDisplayStats:e=>{const s=e.getCurrentStats(),l=f.fromProto(s.gearStats),t=f.fromProto(s.talentsStats).subtract(l);let a=(new f).withPseudoStat(B.PseudoStatSpellCritPercent,2*e.getTalents().naturesMajesty);return a=a.addStat(v.StatHitRating,t.getPseudoStat(B.PseudoStatSpellHitPercent)*H),{talents:a}},defaults:{gear:J.gear,epWeights:le.epWeights,statCaps:(new f).withPseudoStat(B.PseudoStatSpellHitPercent,17),consumes:ne,talents:te.data,specOptions:ae,raidBuffs:re,partyBuffs:ie,individualBuffs:oe,debuffs:ce,other:pe},playerIconInputs:[U()],includeBuffDebuffInputs:[r,o,i,c,p,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[x,h,g,u,I]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[le],talents:[te],rotations:[ee,se],gear:[Y,J,Z,$],builds:[de,he]},autoRotation:e=>ee.rotation.rotation,raidSimPresets:[{spec:W.SpecBalanceDruid,talents:te.data,specOptions:ae,consumes:ne,otherDefaults:pe,defaultFactionRaces:{[D.Unknown]:j.RaceUnknown,[D.Alliance]:j.RaceWorgen,[D.Horde]:j.RaceTroll},defaultGear:{[D.Unknown]:{},[D.Alliance]:{1:Y.gear},[D.Horde]:{1:Y.gear}}}]});class ue extends m{constructor(e,s){super(e,s,ge),s.sim.waitForInit().then((()=>{new S(this)}))}}export{ue as B};