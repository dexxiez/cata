import{l as a,n as l,o as e,K as s,q as t,R as p,a7 as d,ak as n,ae as o,Q as i,U as c,V as r,al as I,W as u,v as m,Y as h,F as S,T as v,af as g,G as A}from"./preset_utils-Dz2KMMFX.chunk.js";import{R as f}from"./suggest_reforges_action-DVUR84On.chunk.js";import{a4 as O,a5 as T,a7 as y,G as k,bI as R,bJ as P,bK as L,bN as q,bM as G,ac as C,af as b,ad as V,ae as w,ag as F,aj as M,al as N,am as H,b as B,ah as D,a6 as j,a as K,b3 as W,S as x,aI as E,aJ as U,a$ as _,ak as z,aq as J,F as Q,R as Y,b4 as $}from"./detailed_results-BcgtFdXH.chunk.js";import{W as X,P as Z,D as aa,a as la,b as ea}from"./presets-CJRmQUZA.chunk.js";const sa={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:30146}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:77801}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{spellId:74434}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{spellId:691}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:59672}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:29722}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:348}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:58183}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:56290}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:52353}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:68998}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:69e3}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{spellId:82174}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{spellId:33697}}},doAtValue:{const:{val:"-0.7s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:89937}}},{auraIsActive:{auraId:{spellId:89937}}}]}},castSpell:{spellId:{spellId:77799}}}},{action:{condition:{and:{vals:[{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:92318}}},{auraIsActive:{auraId:{spellId:89091}}},{auraIsActive:{auraId:{spellId:91047}}},{auraIsActive:{auraId:{spellId:90898}}},{auraIsActive:{auraId:{spellId:90992}}},{auraIsActive:{auraId:{spellId:91002}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:92325}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:90953}}},rhs:{const:{val:"20"}}}},{auraIsActive:{auraId:{spellId:92320}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:92318}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:92318}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:91047}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:91047}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:89091}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:89091}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:90898}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:90898}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:91002}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:91002}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:90992}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:90992}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:91024}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:91024}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:58091}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:75170}}},{auraIsActive:{auraId:{spellId:74241}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:58091}}},rhs:{const:{val:"1s"}}}}]}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"120s"}}}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:90898}}},{auraIsActive:{auraId:{spellId:92318}}},{auraIsActive:{auraId:{spellId:91047}}},{auraIsActive:{auraId:{spellId:90992}}},{auraIsActive:{auraId:{spellId:91002}}},{auraIsActive:{auraId:{spellId:89091}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:92325}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:90985}}},rhs:{const:{val:"20"}}}},{auraIsActive:{auraId:{spellId:91024}}}]}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:58091}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:58091}}},rhs:{const:{val:"3s"}}}}]}}]}},{spellCanCast:{spellId:{spellId:18540}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:18540}}}]}}},{action:{condition:{auraIsActive:{auraId:{spellId:59672}}},castSpell:{spellId:{itemId:58091}}}},{action:{condition:{and:{}},sequence:{name:"burst",actions:[{castSpell:{spellId:{spellId:77801}}},{castSpell:{spellId:{spellId:74434}}},{castSpell:{spellId:{spellId:691}}},{castSpell:{spellId:{spellId:59672}}},{castSpell:{spellId:{spellId:603}}},{castSpell:{spellId:{spellId:348}}},{castSpell:{spellId:{spellId:172}}}]}}},{action:{condition:{and:{vals:[{sequenceIsComplete:{sequenceName:"burst"}},{spellCanCast:{spellId:{spellId:77801}}},{spellCanCast:{spellId:{spellId:59672}}}]}},resetSequence:{sequenceName:"burst"}}},{action:{condition:{and:{vals:[{spellIsReady:{spellId:{spellId:59672}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:77801}}},rhs:{const:{val:"20"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"60"}}}}]}},castSpell:{spellId:{spellId:59672}}}},{action:{condition:{and:{vals:[{spellIsReady:{spellId:{spellId:77801}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:59672}}},rhs:{remainingTime:{}}}}]}},castSpell:{spellId:{spellId:77801}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentMana:{}},rhs:{const:{val:"67000"}}}},{cmp:{op:"OpLe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:1454}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{const:{val:"121s"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"60s"}}}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{spellCastTime:{spellId:{spellId:30146}}}}},{cmp:{op:"OpLe",lhs:{spellCpm:{spellId:{spellId:30146}}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:77801}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:59672}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"30"}}}}]}},castSpell:{spellId:{spellId:30146}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:348}}},rhs:{dotTickFrequency:{spellId:{spellId:348,tag:1}}}}}}},castSpell:{spellId:{spellId:348}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:172}}},rhs:{dotTickFrequency:{spellId:{spellId:172}}}}},castSpell:{spellId:{spellId:172}}}},{action:{condition:{spellIsReady:{spellId:{spellId:71521}}},castSpell:{spellId:{spellId:71521}}}},{action:{condition:{spellIsReady:{spellId:{spellId:47897}}},castSpell:{spellId:{spellId:47897}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:603}}},rhs:{dotTickFrequency:{spellId:{spellId:603}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{math:{op:"OpMul",lhs:{dotTickFrequency:{spellId:{spellId:603}}},rhs:{const:{val:"2"}}}}}}]}},castSpell:{spellId:{spellId:603}}}},{action:{castSpell:{spellId:{spellId:50589}}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:71165}}},{auraIsActive:{auraId:{spellId:71165}}}]}},castSpell:{spellId:{spellId:29722}}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:63167}}},{auraIsActive:{auraId:{spellId:63167}}}]}},castSpell:{spellId:{spellId:6353}}}},{action:{castSpell:{spellId:{spellId:29722}}}},{action:{castSpell:{spellId:{spellId:1454}}}}]},ta={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:30146}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:77801}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{spellId:74434}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{spellId:691}}},doAtValue:{const:{val:"-4.0s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:59672}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:686}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:348}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:58183}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:56290}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:52353}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:68998}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{itemId:69e3}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{spellId:82174}}},doAtValue:{const:{val:"-0.7s"}}},{action:{castSpell:{spellId:{spellId:33697}}},doAtValue:{const:{val:"-0.7s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:92318}}},{auraIsActive:{auraId:{spellId:89091}}},{auraIsActive:{auraId:{spellId:91047}}},{auraIsActive:{auraId:{spellId:90898}}},{auraIsActive:{auraId:{spellId:90992}}},{auraIsActive:{auraId:{spellId:91002}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:92325}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:90953}}},rhs:{const:{val:"20"}}}},{auraIsActive:{auraId:{spellId:92320}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:92318}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:92318}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:91047}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:91047}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:89091}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:89091}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:90898}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:90898}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:91002}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:91002}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:90992}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:90992}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:92320}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:92320}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:58091}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:75170}}},{auraIsActive:{auraId:{spellId:74241}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:58091}}},rhs:{const:{val:"1s"}}}}]}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"120s"}}}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:90898}}},{auraIsActive:{auraId:{spellId:92318}}},{auraIsActive:{auraId:{spellId:91047}}},{auraIsActive:{auraId:{spellId:90992}}},{auraIsActive:{auraId:{spellId:91002}}},{auraIsActive:{auraId:{spellId:89091}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:92325}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:90985}}},rhs:{const:{val:"20"}}}},{auraIsActive:{auraId:{spellId:92320}}}]}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:58091}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:58091}}},rhs:{const:{val:"3s"}}}}]}}]}},{spellCanCast:{spellId:{spellId:18540}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:18540}}}]}}},{action:{condition:{and:{}},sequence:{name:"burst",actions:[{castSpell:{spellId:{spellId:77801}}},{castSpell:{spellId:{spellId:74434}}},{castSpell:{spellId:{spellId:691}}},{castSpell:{spellId:{spellId:59672}}},{castSpell:{spellId:{spellId:603}}},{castSpell:{spellId:{spellId:348}}},{castSpell:{spellId:{spellId:172}}}]}}},{action:{condition:{and:{vals:[{sequenceIsComplete:{sequenceName:"burst"}},{spellCanCast:{spellId:{spellId:77801}}},{spellCanCast:{spellId:{spellId:59672}}}]}},resetSequence:{sequenceName:"burst"}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:59672}}},{auraIsKnown:{auraId:{spellId:59672}}}]}},castSpell:{spellId:{itemId:58091}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentMana:{}},rhs:{const:{val:"67000"}}}},{cmp:{op:"OpLe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:1454}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{const:{val:"121s"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"60s"}}}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{sequenceTimeToReady:{sequenceName:"burst"}},rhs:{spellCastTime:{spellId:{spellId:30146}}}}},{cmp:{op:"OpLe",lhs:{spellCpm:{spellId:{spellId:30146}}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:30146}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:348}}},rhs:{dotTickFrequency:{spellId:{spellId:348,tag:1}}}}}}},castSpell:{spellId:{spellId:348}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:172}}},rhs:{dotTickFrequency:{spellId:{spellId:172}}}}},castSpell:{spellId:{spellId:172}}}},{action:{condition:{spellIsReady:{spellId:{spellId:71521}}},castSpell:{spellId:{spellId:71521}}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:89937}}},{auraIsActive:{auraId:{spellId:89937}}}]}},castSpell:{spellId:{spellId:77799}}}},{action:{condition:{spellIsReady:{spellId:{spellId:47897}}},castSpell:{spellId:{spellId:47897}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:603}}},rhs:{dotTickFrequency:{spellId:{spellId:603}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{math:{op:"OpMul",lhs:{dotTickFrequency:{spellId:{spellId:603}}},rhs:{const:{val:"2"}}}}}}]}},castSpell:{spellId:{spellId:603}}}},{action:{castSpell:{spellId:{spellId:50589}}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:17941}}},{auraIsActive:{auraId:{spellId:17941}}}]}},castSpell:{spellId:{spellId:686}}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:71165}}},{auraIsActive:{auraId:{spellId:71165}}}]}},castSpell:{spellId:{spellId:29722}}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:63167}}},{auraIsActive:{auraId:{spellId:63167}}}]}},castSpell:{spellId:{spellId:6353}}}},{action:{castSpell:{spellId:{spellId:686}}}},{action:{castSpell:{spellId:{spellId:1454}}}}]},pa={items:[{id:60237,enchant:4207,gems:[68780,52217],reforging:144},{id:69882,randomSuffix:-114},{id:65263,enchant:4200,gems:[52207],reforging:154},{id:60232,enchant:4115,gems:[52208],reforging:151},{id:65262,enchant:4102,gems:[52207,52217],reforging:144},{id:65138,enchant:4257,gems:[0],reforging:151},{id:65259,enchant:4107,gems:[52207,0],reforging:144},{id:65034,gems:[52207,52207],reforging:144},{id:65261,enchant:4112,gems:[52208,52207],reforging:140},{id:65069,enchant:4104,gems:[52207],reforging:165},{id:65123,reforging:151},{id:65373,randomSuffix:-114,reforging:138},{id:65053,reforging:144},{id:62047,reforging:165},{id:68132,randomSuffix:-114,enchant:4097},{id:65133,enchant:4091,reforging:154},{id:59460,reforging:167}]},da={items:[{id:71595,enchant:4207,gems:[68780,52207],reforging:151},{id:71472,gems:[52207],reforging:165},{id:71598,enchant:4200,gems:[52207],reforging:154},{id:71434,enchant:4115,reforging:144},{id:71597,enchant:4102,gems:[52207,52207],reforging:154},{id:71471,enchant:4257,gems:[0],reforging:144},{id:71614,enchant:4107,gems:[52207,0],reforging:147},{id:71613,gems:[52207,52207],reforging:151},{id:71596,enchant:4112,gems:[52207,52207],reforging:144},{id:71447,enchant:4104,gems:[52207],reforging:144},{id:71217,gems:[52207]},{id:71449,reforging:144},{id:69110},{id:62047,reforging:165},{id:71086,enchant:4097,gems:[52207,52207,52207],reforging:154},{},{id:71473,reforging:144}]},na=a("Pre-raid",{items:[]}),oa=a("P1 - BIS",pa),ia=a("P3 - BIS",da),ca=l("Shadow Bolt",ta),ra=l("Incinerate",sa),Ia=e("Default",O.fromMap({[T.StatIntellect]:1.27,[T.StatSpellPower]:1,[T.StatHitRating]:.92,[T.StatCritRating]:.51,[T.StatHasteRating]:2.75,[T.StatMasteryRating]:.76})),ua={name:"Shadow bolt",data:y.create({talentsString:"-3312222300310212211-33202",glyphs:k.create({prime1:R.GlyphOfImmolate,prime2:R.GlyphOfCorruption,prime3:R.GlyphOfMetamorphosis,major1:P.GlyphOfShadowBolt,major2:P.GlyphOfLifeTap,major3:P.GlyphOfFelhunter,minor1:L.GlyphOfDrainSoul,minor2:L.GlyphOfRitualOfSouls,minor3:L.GlyphOfUnendingBreath})})},ma={name:"Incinerate",data:y.create({talentsString:"003-3312222300310212211-03202",glyphs:k.create({prime1:R.GlyphOfImmolate,prime2:R.GlyphOfIncinerate,prime3:R.GlyphOfMetamorphosis,major1:P.GlyphOfSoulstone,major2:P.GlyphOfLifeTap,major3:P.GlyphOfSoulLink,minor1:L.GlyphOfDrainSoul,minor2:L.GlyphOfRitualOfSouls,minor3:L.GlyphOfUnendingBreath})})},ha=q.create({classOptions:{summon:G.Felguard,detonateSeed:!1,prepullMastery:0,prepullPostSnapshotMana:0}}),Sa=C.create({defaultPotion:b.VolcanicPotion,prepopPotion:b.VolcanicPotion,flask:V.FlaskOfTheDraconicMind,food:w.FoodSeafoodFeast,tinkerHands:F.TinkerHandsSynapseSprings,explosiveBigDaddy:!1}),va=M.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),ga=N.create({vampiricTouch:!0,darkIntent:!0}),Aa=H.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!1,demoralizingShout:!0,frostFever:!0}),fa={distanceFromTarget:25,profession1:B.Engineering,profession2:B.Tailoring,channelClipDelay:150,duration:180,durationVariation:30,darkIntentUptime:90},Oa=s("Shadow Bolt",{talents:ua,rotation:ca}),Ta=s("Incinerate",{talents:ma,rotation:ra}),ya=[{unitStat:D.fromPseudoStat(j.PseudoStatSpellHastePercent),presets:new Map([...X.find((a=>a.unitStat.equalsPseudoStat(j.PseudoStatSpellHastePercent))).presets,["16-tick - Immo Aura",3.35918],["8-tick - Immolate:Inferno",7.12373],["17-tick - Immo Aura",9.95053],["18-tick - Immo Aura",16.61809],["9-tick - Immolate:Inferno",21.43291],["19-tick - Immo Aura",23.38064],["20-tick - Immo Aura",29.95453],["10-tick - Immolate:Inferno",35.71591],["21-tick - Immo Aura",36.70542],["22-tick - Immo Aura",43.3692],["11-tick - Immolate:Inferno",50.03752],["23-tick - Immo Aura",50.03753],["24-tick - Immo Aura",56.6171],["25-tick - Immo Aura",63.26533],["12-tick - Immolate:Inferno",64.24857],["26-tick - Immo Aura",69.92356],["27-tick - Immo Aura",76.52254],["13-tick - Immolate:Inferno",78.6246],["28-tick - Immo Aura",83.31809],["29-tick - Immo Aura",89.93356],["14-tick - Immolate:Inferno",92.86404],["30-tick - Immo Aura",96.65687],["31-tick - Immo Aura",103.45884],["15-tick - Immolate:Inferno",107.11082],["32-tick - Immo Aura",109.86363]])}],ka=t(x.SpecDemonologyWarlock,{cssClass:"demonology-warlock-sim-ui",cssScheme:K.getCssClass(K.Warlock),knownIssues:[],epStats:[T.StatIntellect,T.StatSpellPower,T.StatHitRating,T.StatCritRating,T.StatHasteRating,T.StatMasteryRating],epReferenceStat:T.StatSpellPower,displayStats:D.createDisplayStatArray([T.StatHealth,T.StatMana,T.StatStamina,T.StatIntellect,T.StatSpellPower,T.StatMasteryRating,T.StatMP5],[j.PseudoStatSpellHitPercent,j.PseudoStatSpellCritPercent,j.PseudoStatSpellHastePercent]),defaults:{gear:oa.gear,epWeights:Ia.epWeights,statCaps:(new O).withPseudoStat(j.PseudoStatSpellHitPercent,17),softCapBreakpoints:(()=>{const a=[],l=W.get(x.SpecDemonologyWarlock);for(let s=19;s<=200;s++)a.push(s/l*$);const e=E.fromStat(T.StatMasteryRating,{breakpoints:a,capType:U.TypeThreshold,postCapEPs:[0]});return[E.fromPseudoStat(j.PseudoStatSpellHastePercent,{breakpoints:[16.65,25],capType:U.TypeSoftCap,postCapEPs:[.64*_,.61*_]}),e]})(),consumes:Sa,talents:ua.data,specOptions:ha,raidBuffs:va,partyBuffs:z.create({}),individualBuffs:ga,debuffs:Aa,other:fa},playerIconInputs:[Z()],includeBuffDebuffInputs:[p,d,n,o,i,c,r,I,u],excludeBuffDebuffInputs:[],petConsumeInputs:[],otherInputs:{inputs:[aa(),la,ea,m,h,S,v,g]},itemSwapSlots:[J.ItemSlotMainHand,J.ItemSlotOffHand,J.ItemSlotRanged],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[Ia],talents:[ua,ma],rotations:[ca,ra],gear:[na,oa,ia],builds:[Oa,Ta]},autoRotation:a=>ca.rotation.rotation,raidSimPresets:[{spec:x.SpecDemonologyWarlock,talents:ua.data,specOptions:ha,consumes:Sa,defaultFactionRaces:{[Q.Unknown]:Y.RaceUnknown,[Q.Alliance]:Y.RaceHuman,[Q.Horde]:Y.RaceOrc},defaultGear:{[Q.Unknown]:{},[Q.Alliance]:{1:na.gear,2:oa.gear,3:ia.gear},[Q.Horde]:{1:na.gear,2:oa.gear,3:ia.gear}},otherDefaults:fa}]});class Ra extends A{constructor(a,l){super(a,l,ka),l.sim.waitForInit().then((()=>{new f(this,{statSelectionPresets:ya})}))}}export{Ra as D};