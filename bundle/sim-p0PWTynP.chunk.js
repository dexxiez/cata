import{l as e,n as a,o as t,q as s,R as l,a7 as n,ak as i,ae as o,Q as r,U as d,V as p,al as c,W as g,v as I,Y as u,F as m,T as f,af as h,G as S}from"./preset_utils-Dz2KMMFX.chunk.js";import{R as O}from"./suggest_reforges_action-DVUR84On.chunk.js";import{a4 as P,a5 as v,a7 as y,G as k,bI as R,bJ as T,bK as A,bO as C,bM as w,ac as D,af as H,ad as b,ae as F,ag as G,aj as B,al as M,am as W,b as L,a as x,ah as j,a6 as V,ak as q,aq as U,S as E,F as _,R as K}from"./detailed_results-BcgtFdXH.chunk.js";import{W as z,P as J,D as Q}from"./presets-CJRmQUZA.chunk.js";const Y={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:74434}}},doAtValue:{const:{val:"-8.0s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:29722}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:6353}}},doAtValue:{const:{val:"-0.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:2825,tag:-1}}},{spellCanCast:{spellId:{spellId:77801}}}]}},castSpell:{spellId:{spellId:77801}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:74241}}},{auraIsActive:{auraId:{spellId:89091}}},{auraIsActive:{auraId:{spellId:75170}}}]}},sequence:{name:"Doomguard",actions:[{castSpell:{spellId:{spellId:18540}}}]}}},{action:{condition:{spellIsReady:{spellId:{spellId:74434}}},castSpell:{spellId:{spellId:74434}}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:74434}}},{auraIsActive:{auraId:{spellId:47221}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:18120}}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:6353}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:348}}},rhs:{dotTickFrequency:{spellId:{spellId:348,tag:1}}}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}}]}},{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:2825,tag:-1}}},rhs:{const:{val:"2s"}}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{const:{val:"12s"}}}},{auraIsActive:{auraId:{spellId:2825,tag:-1}}}]}}]}},castSpell:{spellId:{spellId:348}}}},{action:{condition:{spellCanCast:{spellId:{spellId:17962}}},castSpell:{spellId:{spellId:17962}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:603}}},rhs:{dotTickFrequency:{spellId:{spellId:603}}}}},castSpell:{spellId:{spellId:603}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:172}}},rhs:{dotTickFrequency:{spellId:{spellId:172}}}}},castSpell:{spellId:{spellId:172}}}},{action:{condition:{spellCanCast:{spellId:{spellId:47897}}},castSpell:{spellId:{spellId:47897}}}},{action:{condition:{and:{vals:[{isExecutePhase:{threshold:"E20"}},{spellCanCast:{spellId:{spellId:17877}}}]}},castSpell:{spellId:{spellId:17877}}}},{action:{condition:{and:{vals:[{spellCanCast:{spellId:{spellId:50796}}},{auraIsInactiveWithReactionTime:{auraId:{spellId:54277}}}]}},castSpell:{spellId:{spellId:50796}}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:89937}}},{auraIsActive:{auraId:{spellId:89937}}}]}},castSpell:{spellId:{spellId:77799}}}},{action:{castSpell:{spellId:{spellId:29722}}}},{action:{castSpell:{spellId:{spellId:1454}}}}]},N={items:[{id:60237,enchant:4207,gems:[68780,52217],reforging:144},{id:69882,randomSuffix:-129,reforging:145},{id:65263,enchant:4200,gems:[52207]},{id:60232,enchant:4115,gems:[52207],reforging:165},{id:65262,enchant:4102,gems:[52207,52217],reforging:144},{id:65138,enchant:4257,gems:[0],reforging:165},{id:65259,enchant:4107,gems:[52207,0],reforging:144},{id:65034,gems:[52207,52207],reforging:144},{id:65261,enchant:4112,gems:[52208,52207]},{id:65069,enchant:4104,gems:[52207],reforging:165},{id:65123,reforging:165},{id:65373,randomSuffix:-114,reforging:167},{id:65053,reforging:145},{id:62047,reforging:165},{id:68132,randomSuffix:-114,enchant:4097,reforging:167},{id:65133,enchant:4091},{id:59460,reforging:167}]},X={items:[{id:71595,enchant:4207,gems:[68780,52207],reforging:165},{id:71472,gems:[52207],reforging:165},{id:71598,enchant:4200,gems:[52208]},{id:71434,enchant:4115,reforging:144},{id:71597,enchant:4102,gems:[52208,52217]},{id:71471,enchant:4257,gems:[0],reforging:144},{id:71614,enchant:4068,gems:[52207,0],reforging:144},{id:71613,gems:[52207,52207],reforging:165},{id:71596,enchant:4112,gems:[52207,52207],reforging:165},{id:71447,enchant:4104,gems:[52208],reforging:144},{id:71217,gems:[52207]},{id:71449,reforging:165},{id:69110},{id:62047,reforging:167},{id:71086,enchant:4097,gems:[52207,52207,52207]},{},{id:71575,reforging:137}]},Z=e("Pre-raid",{items:[]}),$=e("P1 - BIS",N),ee=e("P3 - BIS",X),ae=a("Default",Y),te=t("Default",P.fromMap({[v.StatIntellect]:1.25,[v.StatSpellPower]:1,[v.StatHitRating]:.87,[v.StatCritRating]:.48,[v.StatHasteRating]:.55,[v.StatMasteryRating]:.47})),se={name:"Destruction",data:y.create({talentsString:"003-03202-3320202312201312211",glyphs:k.create({prime1:R.GlyphOfConflagrate,prime2:R.GlyphOfImmolate,prime3:R.GlyphOfImp,major1:T.GlyphOfLifeTap,major2:T.GlyphOfSoulLink,major3:T.GlyphOfHealthstone,minor1:A.GlyphOfDrainSoul,minor2:A.GlyphOfRitualOfSouls,minor3:A.GlyphOfUnendingBreath})})},le=C.create({classOptions:{summon:w.Imp,detonateSeed:!1}}),ne=D.create({defaultPotion:H.VolcanicPotion,prepopPotion:H.VolcanicPotion,flask:b.FlaskOfTheDraconicMind,food:F.FoodSeafoodFeast,tinkerHands:G.TinkerHandsSynapseSprings,explosiveBigDaddy:!1}),ie=B.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),oe=M.create({vampiricTouch:!0,darkIntent:!0}),re=W.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!1,demoralizingShout:!0,frostFever:!0}),de={distanceFromTarget:25,profession1:L.Engineering,profession2:L.Tailoring,channelClipDelay:150,duration:180,durationVariation:30,darkIntentUptime:90},pe=z,ce=s(E.SpecDestructionWarlock,{cssClass:"destruction-warlock-sim-ui",cssScheme:x.getCssClass(x.Warlock),knownIssues:[],epStats:[v.StatIntellect,v.StatSpellPower,v.StatHitRating,v.StatCritRating,v.StatHasteRating,v.StatMasteryRating],epReferenceStat:v.StatSpellPower,displayStats:j.createDisplayStatArray([v.StatHealth,v.StatMana,v.StatStamina,v.StatIntellect,v.StatSpellPower,v.StatMasteryRating,v.StatMP5],[V.PseudoStatSpellHitPercent,V.PseudoStatSpellCritPercent,V.PseudoStatSpellHastePercent]),defaults:{gear:$.gear,epWeights:te.epWeights,statCaps:(new P).withPseudoStat(V.PseudoStatSpellHitPercent,17),consumes:ne,talents:se.data,specOptions:le,raidBuffs:ie,partyBuffs:q.create({}),individualBuffs:oe,debuffs:re,other:de},playerIconInputs:[J()],includeBuffDebuffInputs:[l,n,i,o,r,d,p,c,g],excludeBuffDebuffInputs:[],petConsumeInputs:[],otherInputs:{inputs:[Q(),I,u,m,f,h]},itemSwapSlots:[U.ItemSlotMainHand,U.ItemSlotOffHand,U.ItemSlotRanged],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[te],talents:[se],rotations:[ae],gear:[Z,$,ee]},autoRotation:e=>ae.rotation.rotation,raidSimPresets:[{spec:E.SpecDestructionWarlock,talents:se.data,specOptions:le,consumes:ne,defaultFactionRaces:{[_.Unknown]:K.RaceUnknown,[_.Alliance]:K.RaceHuman,[_.Horde]:K.RaceOrc},defaultGear:{[_.Unknown]:{},[_.Alliance]:{1:Z.gear,2:$.gear,3:ee.gear},[_.Horde]:{1:Z.gear,2:$.gear,3:ee.gear}},otherDefaults:de}]});class ge extends S{constructor(e,a){super(e,a,ce),a.sim.waitForInit().then((()=>{new O(this,{statSelectionPresets:pe})}))}}export{ge as D};
