import{m as e,_ as t,$ as a,l,n as s,a0 as n,o as r,K as i,a1 as p,q as o,a2 as d,s as c,v as I,T as g,w as u,x as m,y as h,z as S,A as v,H as y,D as T,G as f}from"./preset_utils-Dz2KMMFX.chunk.js";import{R as A}from"./suggest_reforges_action-DVUR84On.chunk.js";import{T as O,aF as R,S as P,a4 as k,a5 as U,a6 as C,an as b,ao as L,a7 as N,G as H,at as G,au as x,av as E,aG as D,ac as w,ad as M,ae as F,af as J,aH as V,ag as z,a as Z,ah as B,aI as j,ai as q,aJ as Y,aB as Q,aj as W,ak as K,al as X,am as $,aK as _,aC as ee,aD as te,aL as ae,aM as le,aE as se,F as ne,R as re}from"./detailed_results-BcgtFdXH.chunk.js";import{s as ie}from"./apl_utils-DwmPkkTb.chunk.js";const pe=e({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial Rage at the start of each iteration."}),oe={inputs:[t({fieldName:"maintainFaerieFire",label:"Maintain Faerie Fire",labelTooltip:"Maintain Faerie Fire debuff. Overwrites any external Sunder effects specified in settings."}),t({fieldName:"maintainDemoralizingRoar",label:"Maintain Demo Roar",labelTooltip:"Keep Demoralizing Roar active on the primary target. If a stronger debuff is active, will not cast."}),a({fieldName:"demoTime",label:"Demo Roar refresh leeway",labelTooltip:"Refresh Demoralizing Roar when remaining duration is less than this value (in seconds). Larger values provide safety buffer against misses, but at the cost of lower DPS.",showWhen:e=>e.getSimpleRotation().maintainDemoralizingRoar}),a({fieldName:"pulverizeTime",label:"Pulverize refresh leeway",labelTooltip:"Refresh Pulverize when remaining duration is less than this value (in seconds). Note that Mangle, Thrash, and Faerie Fire usage on cooldown takes priority over this rule, unless Lacerate itself is about to fall off."}),t({fieldName:"prepullStampede",label:"Assume pre-pull Stampede",labelTooltip:"Activate Stampede Haste buff at the start of each pull. Models the effects of initiating the pull with Feral Charge.",showWhen:e=>e.getTalents().stampede>0,changeEmitter:e=>O.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},de={items:[{id:65190,enchant:4206,gems:[52294,52242],reforging:142},{id:69880,randomSuffix:-137,reforging:142},{id:65083,enchant:4198,gems:[52242],reforging:142},{id:65035,enchant:4090,reforging:142},{id:65060,enchant:4103,gems:[52242,52242],reforging:142},{id:65050,enchant:4258,gems:[0],reforging:142},{id:65073,enchant:3260,gems:[52242,0],reforging:156},{id:60231,gems:[52242,52238,52242],reforging:142},{id:65191,enchant:4127,gems:[52233,52242],reforging:142},{id:65144,enchant:4062,gems:[52233],reforging:149},{id:65367,randomSuffix:-137,reforging:142},{id:65082,reforging:142},{id:65048},{id:65109},{id:65139,enchant:4098,reforging:142},{},{id:64671,gems:[52242],reforging:149}]},ce={items:[{id:41678,enchant:4222,gems:[41339,45880]},{id:45517,gems:[40008]},{id:45245,enchant:44957,gems:[40008,40008]},{id:45496,enchant:3294,gems:[42702]},{id:45473,enchant:3832,gems:[40008,40008,40008]},{id:45611,enchant:3850,gems:[40008,0]},{id:46043,enchant:63770,gems:[40008,40008,0]},{id:46095,gems:[40008,40008,40008]},{id:45536,enchant:38373,gems:[40008,40008,40008]},{id:45232,enchant:55016,gems:[40008]},{id:45471,gems:[40091]},{id:45608,gems:[40008]},{id:45158},{id:46021},{id:45533,enchant:3870,gems:[40008,40008]},{},{id:45509}]},Ie={items:[{id:71488,enchant:4206,gems:[52294,52238],reforging:135},{id:71610,reforging:149},{id:71490,enchant:4198,gems:[52242],reforging:163},{id:71415,enchant:4090,gems:[52242,52242],reforging:135},{id:71486,enchant:4103,gems:[52242,52242],reforging:142},{id:71428,randomSuffix:-137,enchant:4258,gems:[0],reforging:163},{id:71440,enchant:3260,gems:[52242,0],reforging:163},{id:71641,gems:[52242,52242],reforging:142},{id:71489,enchant:4127,gems:[52233,52233],reforging:163},{id:71467,enchant:4062,gems:[52242],reforging:163},{id:71216,gems:[52242],reforging:149},{id:71401,reforging:149},{id:69109},{id:65109},{id:71466,enchant:4098,reforging:163},{},{id:71567,gems:[52242],reforging:163}]},ge={items:[{id:51296,enchant:3878,gems:[41380,40119]},{id:50682,gems:[40130]},{id:51299,enchant:3852,gems:[40119]},{id:50466,enchant:3294,gems:[40119]},{id:50656,enchant:3330,gems:[40119,40119,40119]},{id:50670,enchant:3850,gems:[40119,0]},{id:51295,enchant:3860,gems:[40119,0]},{id:50707,gems:[40119,40119,40119]},{id:51297,enchant:3822,gems:[40119,40119]},{id:50607,enchant:4223,gems:[40119,40119]},{id:50622,gems:[40119]},{id:50404,gems:[40119]},{id:47088},{id:50364},{id:51432,enchant:3870,gems:[40119,40119]},{},{id:50456}]},ue={type:"TypeAPL",simple:{cooldowns:{cooldowns:[],hpPercentForDefensives:.5}},prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:81017}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"30%"}}}},castSpell:{spellId:{spellId:22842}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}},castSpell:{spellId:{spellId:61336}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target",index:1},spellId:{spellId:33745}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target",index:1},spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target",index:1}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"Target"},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"Target"},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"Target",index:1},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"Target",index:1},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857},target:{type:"Target",index:1}}}},{action:{condition:{auraShouldRefresh:{sourceUnit:{type:"Target"},auraId:{spellId:99},maxOverlap:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:99},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:50334}}}},{action:{castSpell:{spellId:{spellId:5229}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}},castSpell:{spellId:{spellId:77758},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:33878},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{targetUnit:{type:"Target",index:1},spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target",index:1}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4s"}}}}]}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target",index:1},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target",index:1},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4s"}}}}]}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target",index:1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"Target",index:1},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745},target:{type:"Target",index:1}}}},{action:{castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:6807},target:{type:"Target"}}}}]},me={type:"TypeAPL",simple:{cooldowns:{cooldowns:[],hpPercentForDefensives:.5}},prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:81017}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"30%"}}}},castSpell:{spellId:{spellId:22842}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}},castSpell:{spellId:{spellId:61336}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"Target"},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"Target"},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{condition:{auraShouldRefresh:{sourceUnit:{type:"Target"},auraId:{spellId:99},maxOverlap:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:99},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:50334}}}},{action:{castSpell:{spellId:{spellId:5229}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:50334}}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:33878},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:77758},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4s"}}}}]}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:6807},target:{type:"Target"}}}}]},he={type:"TypeAPL",simple:{cooldowns:{hpPercentForDefensives:.5}},prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"7"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}}]}},castSpell:{spellId:{itemId:62471}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"8"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}},{not:{val:{auraIsActive:{auraId:{itemId:62471}}}}}]}},castSpell:{spellId:{spellId:22842}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"8"}}}},{not:{val:{auraIsActive:{auraId:{spellId:22842}}}}}]}},castSpell:{spellId:{itemId:56370}}}},{action:{condition:{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"10"}}}}]}}]}},{not:{val:{auraIsActive:{auraId:{spellId:22842}}}}},{not:{val:{auraIsActive:{auraId:{itemId:56370}}}}}]}},castSpell:{spellId:{spellId:61336}}}},{action:{condition:{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{and:{vals:[{cmp:{op:"OpLe",lhs:{bossSpellTimeToReady:{spellId:{spellId:81272}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"10"}}}}]}}]}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}}]}},castSpell:{spellId:{spellId:22812}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}},{not:{val:{auraIsActive:{auraId:{spellId:22812}}}}}]}},castSpell:{spellId:{spellId:33206,tag:-1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:22812}}}}},{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"40%"}}}}]}},{not:{val:{auraIsActive:{auraId:{spellId:33206,tag:-1}}}}}]}},castSpell:{spellId:{itemId:56370}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:79330}}},rhs:{const:{val:"11"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61336}}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:22812}}}}},{cmp:{op:"OpLt",lhs:{currentHealthPercent:{}},rhs:{const:{val:"30%"}}}}]}},{not:{val:{auraIsActive:{auraId:{spellId:33206,tag:-1}}}}}]}},castSpell:{spellId:{spellId:22842}}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:33745}}},rhs:{const:{val:"4s"}}}}]}},castSpell:{spellId:{spellId:80313}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857}}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:99},maxOverlap:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:99}}}},{action:{castSpell:{spellId:{spellId:77758}}}},{action:{castSpell:{spellId:{spellId:779}}}},{action:{castSpell:{spellId:{spellId:50334}}}},{action:{castSpell:{spellId:{spellId:5229}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}}]}},castSpell:{spellId:{spellId:33745}}}},{action:{castSpell:{spellId:{spellId:33878}}}},{action:{castSpell:{spellId:{spellId:16857}}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4s"}}}}]}}]}},castSpell:{spellId:{spellId:80313}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745}}}},{action:{castSpell:{spellId:{spellId:6807}}}}]},Se={type:"TypeSimple",simple:{specRotationJson:'{"maintainFaerieFire":true,"maintainDemoralizingRoar":true,"demoTime":4,"pulverizeTime":4}',cooldowns:{cooldowns:[{id:{spellId:22812},timings:[40,104]},{id:{spellId:61336},timings:[146]},{id:{spellId:22842},timings:[84]},{id:{itemId:65109},timings:[104]},{id:{itemId:58145},timings:[59]},{id:{spellId:33206,tag:-1},timings:[138]},{id:{spellId:6940,tag:-1},timings:[116,127]}],hpPercentForDefensives:.3}},prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{activateAura:{auraId:{spellId:81017}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{schedule:{schedule:"40.0s, 104.0s",innerAction:{castSpell:{spellId:{spellId:22812}}}}}},{action:{schedule:{schedule:"146.0s",innerAction:{castSpell:{spellId:{spellId:61336}}}}}},{action:{schedule:{schedule:"84.0s",innerAction:{castSpell:{spellId:{spellId:22842}}}}}},{action:{schedule:{schedule:"104.0s",innerAction:{castSpell:{spellId:{itemId:65109}}}}}},{action:{schedule:{schedule:"59.0s",innerAction:{castSpell:{spellId:{itemId:58145}}}}}},{action:{schedule:{schedule:"138.0s",innerAction:{castSpell:{spellId:{spellId:33206,tag:-1}}}}}},{action:{schedule:{schedule:"116.0s, 127.0s",innerAction:{castSpell:{spellId:{spellId:6940,tag:-1}}}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},rhs:{const:{val:"4.0s"}}}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"Target"},auraId:{spellId:770}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"Target"},auraId:{spellId:770}}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{condition:{auraShouldRefresh:{sourceUnit:{type:"Target"},auraId:{spellId:99},maxOverlap:{const:{val:"4.0s"}}}},castSpell:{spellId:{spellId:99},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:50334}}}},{action:{castSpell:{spellId:{spellId:5229}}}},{action:{castSpell:{spellId:{spellId:82174}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}}}},{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:50334}}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:33878},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:77758},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:16857},target:{type:"Target"}}}},{action:{condition:{and:{vals:[{dotIsActive:{targetUnit:{type:"Target"},spellId:{spellId:33745}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:80951}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:80951}}},rhs:{const:{val:"4.0s"}}}}]}}]}},castSpell:{spellId:{spellId:80313},target:{type:"Target"}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{sourceUnit:{type:"Target"},auraId:{spellId:33745}}},rhs:{const:{val:"3"}}}},castSpell:{spellId:{spellId:33745},target:{type:"Target"}}}},{action:{castSpell:{spellId:{spellId:6807},target:{type:"Target"}}}}]},ve=l("Pre-Raid",{items:[{id:59455,enchant:4206,gems:[52294,59477,59480]},{id:60668,reforging:163},{id:60447,enchant:4198,gems:[52233],reforging:156},{id:60779,enchant:4090,reforging:163},{id:60446,enchant:4103,gems:[52242,52242],reforging:142},{id:60591,enchant:4258,gems:[0],reforging:135},{id:60443,enchant:3260,gems:[52242,0],reforging:142},{id:60589,gems:[52242,52242],reforging:135},{id:60445,enchant:4127,gems:[52242,52242],reforging:149},{id:60587,enchant:4062,gems:[52233],reforging:142},{id:62362,reforging:149},{id:68812,reforging:149},{id:56347},{id:58182},{id:69843,enchant:4098,reforging:149},{},{id:64671,gems:[52242],reforging:149}]}),ye=l("P1/P2",de),Te=l("P2",ce),fe=l("P3",Ie),Ae=l("P4",ge),Oe=R.create({maintainFaerieFire:!0,maintainDemoralizingRoar:!0,demoTime:4,pulverizeTime:4,prepullStampede:!0}),Re=s("APL Default",me),Pe=s("2-Target Cleave",ue),ke=s("AoE (Nef Adds)",he),Ue=s("Beth'tilac Phase 2",Se),Ce=n("Simple Default",P.SpecGuardianDruid,Oe),be=r("Survival",k.fromMap({[U.StatHealth]:.06,[U.StatStamina]:1.18,[U.StatAgility]:1,[U.StatArmor]:1.44,[U.StatBonusArmor]:.33,[U.StatDodgeRating]:.69,[U.StatMasteryRating]:.31,[U.StatStrength]:.1,[U.StatAttackPower]:.09,[U.StatHitRating]:.23,[U.StatExpertiseRating]:.46,[U.StatCritRating]:.41,[U.StatHasteRating]:.06},{[C.PseudoStatMainHandDps]:0,[C.PseudoStatPhysicalHitPercent]:.23*b})),Le=r("Balanced",k.fromMap({[U.StatHealth]:.04,[U.StatStamina]:1,[U.StatAgility]:1,[U.StatArmor]:1.11,[U.StatBonusArmor]:.25,[U.StatDodgeRating]:.52,[U.StatMasteryRating]:.23,[U.StatStrength]:.16,[U.StatAttackPower]:.15,[U.StatHitRating]:.53,[U.StatExpertiseRating]:.99,[U.StatCritRating]:.44,[U.StatHasteRating]:.11},{[C.PseudoStatMainHandDps]:.45,[C.PseudoStatPhysicalHitPercent]:.495*b,[C.PseudoStatSpellHitPercent]:.035*L})),Ne={name:"Standard",data:N.create({talentsString:"-2300322312310001220311-020331",glyphs:H.create({prime1:G.GlyphOfMangle,prime2:G.GlyphOfLacerate,prime3:G.GlyphOfBerserk,major1:x.GlyphOfFrenziedRegeneration,major2:x.GlyphOfMaul,major3:x.GlyphOfRebirth,minor1:E.GlyphOfDash,minor2:E.GlyphOfChallengingRoar,minor3:E.GlyphOfUnburdenedRebirth})})},He={name:"Infected Wounds",data:N.create({talentsString:"-2302322310310001220311-020331",glyphs:H.create({prime1:G.GlyphOfMangle,prime2:G.GlyphOfRip,prime3:G.GlyphOfBerserk,major1:x.GlyphOfFrenziedRegeneration,major2:x.GlyphOfMaul,major3:x.GlyphOfRebirth,minor1:E.GlyphOfDash,minor2:E.GlyphOfChallengingRoar,minor3:E.GlyphOfUnburdenedRebirth})})},Ge=D.create({startingRage:15}),xe=w.create({flask:M.FlaskOfSteelskin,food:F.FoodSkeweredEel,prepopPotion:J.PotionOfTheTolvir,defaultPotion:J.PotionOfTheTolvir,defaultConjured:V.ConjuredHealthstone,tinkerHands:z.TinkerHandsSynapseSprings}),Ee={iterationCount:5e4},De=i("Single Target Dummy",{rotation:Ce,encounter:p("Single Target Dummy","http://localhost:5173/cata/druid/guardian/?i=rcmxe#eJzjEuVgdGDMYGxgZJzAyNjAxLiBifECE6MTpwCjBaMH4w1GRismAUYhBqkvjLOY2QJyEitTizjYBBiVeDmYDSQDmCKYEliBGp0YVjFzS3EKMoCBnsMJJpYLTOy3mDgFZ80EgZv2j5iaGCWYlOq4CquVchMz80qA2C0xtSgz1S2zKFXJqqSoNFUHLuOSmptflJiTWZWZlx6Un1gEk08Biodk5gLVm+goFZTmlAENqEpFiBSlAgVzgksScwtSU6Cm1gohXPGCKeUHE+NCZog7Ix26mGU5wcymKw5wRZpnz4AAl4MCm9JxJg9miIqGNAeo90QcJCFKT9pbQkQu2CumgcE1e0eI5jf2Rj1MBas+M1ZxByVmpiiEJBalp5YoREiwa91gZKAHCGhxoKZxDSnHkc3zsZg7xxFdDTg0GhZxOs5khIUlVA2LAwBf7n5L")}),we=i("Magmaw MT",{rotation:Pe,encounter:p("Magmaw MT","http://localhost:5173/cata/druid/guardian/?i=rcmxe#eJzdVE9MHFUYn++9YZn5dtkOT6jLs+KwBEMn7WZZQCsxzkANWZO2AhqkjQcn7FIGl13KrhI5rVUjeCJeLERM6rEnw0Xl0EPTRJvYhF5a4NJGY2LS9tQL9WCceTOLu2Q10RgPfqd5v+/7/b6/GWxVwIJpKAOsAJQJfEVgi8CQqsEJSMM2wADRgEn8krpGQyM5+73svBLSIN6k0GTbCJkgbzW4xCHpCg1ztVkSlrC+J/IWadwlFeSe+SNZV2I0HmZ/QNiMIS4jiTXHG7EB6fGeIraiMhNCWXm8J8dVdOHjyURPkcmcDEisnR9BZmgKZXQXJC5Ivcku7hE2N6Cuvy/wX7pL2QQfxzQbxkgKGdGIi976mCA3YgqwpmtQBXKXidArfDKLzFS7XDUkfUWO7vvbR7LnYS/yATzGjDrKf8V234I9xC1MsgRGUxEmayQGAf+IwV1+dKYG3VeIBArCxyz+EiZ5ArV4FCMboIqUVLkYqlSxWYX5Gs/5Vex8AKKKYf4y9nG3gbiG0Q0IB0mFRlDJZg26rxIJVPxKOvgz+MQu0UQ2okzuF6x4L5EKuSKW8sUyZSpv9KatPOzeh397v4E9zZ/CpngY1Q0IIkWxV+/6A4/yiHjfXvJH2Mt7sJN1+O3XLKGOSGXuz/N+7GKdfscHZn+AVjvsaT6FE2z8bxySwburJb/ek/FJo9WdqbpZAeoeVp7n8E12ru5pADt0DWpv4x9kiwTZ/M48ptcHrd9HzfgS/Jiog/5ZHQemVtlZ5eCauPvLcDf/Wb/3/IVk9ghcpv7f4az1CX1W9b7KyVtW89g37R/dH902j04J+9Vse/fV9sMzp38y9VD8TkOailBp5YIV/F1arLa1Vc9umC/4yJbZ4ZNvm4M3f/DsgZkq07mfr5PF8Gn7/Ky9oKf69bQ+EQNjG6T/wkY+tP5NuXLmu2q9UyfWPx88GCOmUf5SHVwFf0A7ZhAjW5/CBfeoWl6ZnbNzWX0sa0+WnEJef92ZzRpn0oUFPVfIn9cXnFxOL027AbaT0Uv221m9VNADUjprZ3Qnr7+WnSzkM8WE3j04VcrOi3gn75QcO6f3JItHO/ycLVZqlcwtX6SLh4dy9qLjyp8s5Iul+XcmS/423vi/bENaMkbrb0NaemStBi3eq2xDspLwOzCwD1o=")}),Me=i("Nef Adds OT",{rotation:ke,encounter:p("Nef Adds OT","http://localhost:3333/cata/druid/guardian/?i=rcmxe#eJzll19oW1Ucx3POuU1Pfu1ccqhrcmTrWXSjiywkabt11ZnbilJEpI6OMhTZXXJLM5LceHM7bccgdkh1Pii+6IYTN1/EJw2iW9W5dQP/oNA97I8FmexpsM0XEYoPm/dPksVWm6ooyP295J5ffr/v73c+v5PDDbRTJJCMxlAJodcQKmH0AUZzGA00+dFlhPqwHzEPP99yhHiHssqEqlOvH4V9lMRCQ9hMGCCnEXqftHBfwGNbVP4KS3O4eR5XPT8mr+JLECThFnbHBQHwcglwMBBuhiYgm+NFJnHc52HDfAcMskchFGmnEvNNSV4m0YVfJU7BC1I82lMEHglSL1s1i4BhfxNI9Op1iZsigLbCqnAL+MrIDKVvXiHc/PRPXyMsxRUYYTv/nmrvItW6pSVuFaEzZfTPWv9dEVPNbr18grBDiE8jOMD2w1N8F9wTCS0VMEMBx+PQx3qXK75MbmxR9fotmk3wys7ZJH8e8iz7n7VSmSF9q4J3O3tg+bp/OilLggdgNf34IBa3q4bYfj4BGsv9JdUN/N5FysAifkoYmUcebh/o7tgGCIbXQFsZLS1am+2/VLyrUXH7uD7OHwOZPQQ0YXnOT2P7dKL6Nkynczq7YE2kzRwm3VuJdbrrLtpqJ3+W2IO8D2I8Cv7wXdBaRj5bgdApr60qsdaZOp+TvcXJ/v4gYiHeDqvncStgmqpJS9aKAad22Kkr5lnizVY/9BVvzf32y6TmvtlZc996oYmZT84dw+7nm6CDrYXWMNRtt46iqcIr7prExZfuPFs97ubPwDDbsUJeEd5ZX+CTBQnaI3dbv4eZqmMJw438PluT/LFmrcPqft/ouYbTCxgdI869uks+RDb6rKfS0A9yoOPF60+eWHchuenZ7XDp3cLNZOi9kW8S5z78KSm84dLaQWKHenarcuVebpNDRw5b9nVym+OZS64fte1isv+7by27kUycIYWTN26jyXX9+UxOMdS0GNDyqhhRdD2j6SLRIwbFZhEXO4M0chl5/odWSn8p1y3loxNT/YtjHEIfHZcPo7O/dD796uyFZDVGfh0dRebJCDySVVOGrqXGDVU8rI3njciBJ8Zze1RdaKOi/suUUjSKwtBETkur2agY1gwlK1JWinguk82KPaooFnRVSQt1n5rPTghtn6lijKlCzdth5io9ritGRsubGcaYUISu5NNaLjNpDkgbHS2qRnS9019QTryDCzONZ5hw8QwtRJ82RtTlckSfNUbU7XJEnzdG1ONyRKcaI9rickRfNEa01eWITjdG1OtyRGcaI9rmZkTHcGHWQtSx/LttzOWMzq6AkZv/AFiMzq2AkZtfsH8D6cCcbQ==")}),Fe=i("Beth'tilac Phase 2",{rotation:Ue,encounter:p("Beth'tilac Phase 2","http://localhost:5173/cata/druid/guardian/?i=rcmxe#eJzVVF1oHFUY3Xtndjtzk2x3b43dvbV6M5Y2LknYzZ9pUGcSSojVSi2VxkjRye7d7iS7M+vObENXCtEiVn1QAlIbilh8KaUPNQ/+5EGLglZRqIg1lmpBREQrCL7EH9Q7d3bTjdUHH/1gGL7znXvu+Q7MoHYFGKAA5gB4HoA5CM5CcAGCUTUGhsA4WAZgGMYADpF5dUGK7C6ah1hFaYkBrUWR0snd8JEwPzYaOQfAeQBPSy1EjYdEbTHOQ/kSVON9oj7Vv4YvKAmoPQvR5GNaybRsjz9jJqtYbMyqMG3Yq1RZ1+pkBys5FbNo1Sz7wB7HrDTmOY7vtUqc39+llavFg1ygxurIYXwGoASSlROLAMcCIzuM4D1poBifvHhFwooAjKkAWeLcAAk9IJDYZ783OPVTsZPvNZC5XQbahNYrrx2B9M9GNQQM00AaiionBptndSP7AyPnHjZWM0FxFCEygom4tg6FkdSdcVE7UqYj3NYvK7KmIg53p3syLpYJHA7hzWRTLYna+tM9abeLZtL9/I0VEqmvfCO5oYZRJNM/eA33F24nG2pxFB5qoi810ZtkxO51+sD2a7AfQAe5pbaZ0/uGfHwDiV8fQyfZWtuCopnMYGCw93afiknsulAmyQTaicdRay/CMAa5o0+egoikEgrAbe+AJpDwYBDoQzeliCLj1unmkYK4Od89QRx582fZn2GD3IXSpAfFtChqXQSqOCApT0SEPtdYasL89RAcDBS+OAKEwq2kA7VfgliwoJJtukjxe0FCJIjypaclrJJ1vk/lx85V+I/Hw/heshPdgYcDJ2s2bdNakLoI6ufRxlS7Esbq6QYQuOoLXHG+uDBKWkV/8eja/q0r8pq+scU0KaBJPPEfMu4iqWZnr6/IKJnayCNTlxrAv2SeIp1CWfpn5TV7tBH+n+BhHRvw2+/gr2AFgpNS8Jk8aDwjbVXFp/b9ZSO+542bn/zh/mX9tkfvRJ+/Uv5STx7N7r88Jn2j04j2oTwuCWro5axR//H8pCcXjvv1gb49QC7oHXlRF/WRjz/y66re+5xcnl+QautHmVfY5llFM0t7B+g4nUiA1DII/Q9rLve+0dSejR8+NvJ3jkjk1LvyyHGg73vo1bevfqU3OMY8+A3g6N12tljNMTpWYXbtUOpbsMvJsSL1CoxOVSs2LRdMl1EnLxBmZ52q7bEKnbW8goBcz8zO8H82nXJcl+bMknmAUbNU7qH3OR7jFNOjezlvn5VzZre59B6L02atYpHajkenGC3597EcZQeZTS3/HsulTtmzHN661OXDrMdyXdS17CyjluejputWS/yQkDdt7i/f7Zn2TKDMVcsVxgHu1bfmOdR1zBnhN8emqvl8TwL8BQ0Xc7A=")}),Je=o(P.SpecGuardianDruid,{cssClass:"guardian-druid-sim-ui",cssScheme:Z.getCssClass(Z.Druid),knownIssues:[],warnings:[],epStats:[U.StatHealth,U.StatStamina,U.StatAgility,U.StatArmor,U.StatBonusArmor,U.StatDodgeRating,U.StatMasteryRating,U.StatStrength,U.StatAttackPower,U.StatHitRating,U.StatExpertiseRating,U.StatCritRating,U.StatHasteRating,U.StatNatureResistance],epPseudoStats:[C.PseudoStatMainHandDps,C.PseudoStatPhysicalHitPercent,C.PseudoStatSpellHitPercent],epReferenceStat:U.StatAgility,displayStats:B.createDisplayStatArray([U.StatHealth,U.StatStamina,U.StatAgility,U.StatArmor,U.StatBonusArmor,U.StatMasteryRating,U.StatStrength,U.StatAttackPower,U.StatExpertiseRating,U.StatNatureResistance],[C.PseudoStatDodgePercent,C.PseudoStatPhysicalHitPercent,C.PseudoStatPhysicalCritPercent,C.PseudoStatMeleeHastePercent,C.PseudoStatSpellHitPercent,C.PseudoStatSpellCritPercent]),defaults:{gear:ve.gear,epWeights:be.epWeights,statCaps:new k,softCapBreakpoints:[j.fromStat(U.StatExpertiseRating,{breakpoints:[26*q,56*q],capType:Y.TypeSoftCap,postCapEPs:[.495,0]}),j.fromPseudoStat(C.PseudoStatPhysicalHitPercent,{breakpoints:[8],capType:Y.TypeSoftCap,postCapEPs:[0]}),j.fromPseudoStat(C.PseudoStatSpellHitPercent,{breakpoints:[17],capType:Y.TypeSoftCap,postCapEPs:[0]})],other:Ee,consumes:xe,rotationType:Q.TypeSimple,simpleRotation:Oe,talents:Ne.data,specOptions:Ge,raidBuffs:W.create({powerWordFortitude:!0,markOfTheWild:!0,bloodlust:!0,strengthOfEarthTotem:!0,abominationsMight:!0,windfuryTotem:!0,communion:!0,devotionAura:!0}),partyBuffs:K.create({}),individualBuffs:X.create({}),debuffs:$.create({ebonPlaguebringer:!0,criticalMass:!0,bloodFrenzy:!0,frostFever:!0})},playerIconInputs:[],rotationInputs:oe,includeBuffDebuffInputs:[d,c],excludeBuffDebuffInputs:[],otherInputs:{inputs:[I,g,u,m,h,S,v,y,pe,T]},encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[be,Le],talents:[Ne,He],rotations:[Ce,Re,Pe,ke],gear:[ve,ye,fe],builds:[De,we,Me,Fe]},autoRotation:e=>Re.rotation.rotation,simpleRotation:(e,t,a)=>{const[l,s]=ie(a),n=1==e.getTalents().stampede?81016:81017,r=_.fromJsonString(`{"action":{"activateAura":{"auraId":{"spellId":${n.toFixed(0)}}}},"doAtValue":{"const":{"val":"-0.1s"}}}`),i=e.getTalents().pulverize?80313:33745,p=ee.fromJsonString(`{"condition":{"and":{"vals":[{"dotIsActive":{"targetUnit":{"type":"Target"},"spellId":{"spellId":33745}}},{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":33745}}},"rhs":{"const":{"val":"3"}}}},{"cmp":{"op":"OpLe","lhs":{"dotRemainingTime":{"targetUnit":{"type":"Target"},"spellId":{"spellId":33745}}},"rhs":{"const":{"val":"${t.pulverizeTime.toFixed(1)}s"}}}}]}},"castSpell":{"spellId":{"spellId":${i.toFixed(0)}},"target":{"type":"Target"}}}`),o=ee.fromJsonString('{"condition":{"or":{"vals":[{"not":{"val":{"auraIsActive":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":770}}}}},{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":770}}},"rhs":{"const":{"val":"6s"}}}}]}},"castSpell":{"spellId":{"spellId":16857},"target":{"type":"Target"}}}'),d=ee.fromJsonString(`{"condition":{"auraShouldRefresh":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":99},"maxOverlap":{"const":{"val":"${t.demoTime.toFixed(1)}s"}}}},"castSpell":{"spellId":{"spellId":99},"target":{"type":"Target"}}}`),c=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":50334}}}'),I=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":5229}}}'),g=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":82174}}}'),u=ee.fromJsonString('{"condition":{"and":{"vals":[{"not":{"val":{"dotIsActive":{"targetUnit":{"type":"Target"},"spellId":{"spellId":33745}}}}},{"not":{"val":{"auraIsActive":{"auraId":{"spellId":50334}}}}},{"cmp":{"op":"OpGt","lhs":{"spellTimeToReady":{"spellId":{"spellId":50334}}},"rhs":{"const":{"val":"3s"}}}}]}},"castSpell":{"spellId":{"spellId":33745},"target":{"type":"Target"}}}'),m=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":33878},"target":{"type":"Target"}}}'),h=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":77758},"target":{"type":"Target"}}}'),S=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":16857},"target":{"type":"Target"}}}'),v=ee.fromJsonString(`{"condition":{"and":{"vals":[{"dotIsActive":{"targetUnit":{"type":"Target"},"spellId":{"spellId":33745}}},{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":33745}}},"rhs":{"const":{"val":"3"}}}},{"or":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":80951}}}}},{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"auraId":{"spellId":80951}}},"rhs":{"const":{"val":"${t.pulverizeTime.toFixed(1)}s"}}}}]}}]}},"castSpell":{"spellId":{"spellId":80313},"target":{"type":"Target"}}}`),y=ee.fromJsonString('{"condition":{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"sourceUnit":{"type":"Target"},"auraId":{"spellId":33745}}},"rhs":{"const":{"val":"3"}}}},"castSpell":{"spellId":{"spellId":33745},"target":{"type":"Target"}}}'),T=ee.fromJsonString('{"castSpell":{"spellId":{"spellId":6807},"target":{"type":"Target"}}}');return l.push(...[t.prepullStampede?r:null].filter((e=>e))),s.push(...[p,t.maintainFaerieFire?o:null,t.maintainDemoralizingRoar?d:null,c,I,g,u,m,h,S,v,y,T].filter((e=>e))),te.create({simple:ae.create({cooldowns:le.create({hpPercentForDefensives:a.hpPercentForDefensives})}),prepullActions:l,priorityList:s.map((e=>se.create({action:e})))})},raidSimPresets:[{spec:P.SpecGuardianDruid,talents:Ne.data,specOptions:Ge,consumes:xe,defaultFactionRaces:{[ne.Unknown]:re.RaceUnknown,[ne.Alliance]:re.RaceNightElf,[ne.Horde]:re.RaceTauren},defaultGear:{[ne.Unknown]:{},[ne.Alliance]:{1:ye.gear,2:Te.gear,3:fe.gear,4:Ae.gear},[ne.Horde]:{1:ye.gear,2:Te.gear,3:fe.gear,4:Ae.gear}},otherDefaults:Ee}]});class Ve extends f{constructor(e,t){super(e,t,Je),t.sim.waitForInit().then((()=>{new A(this)}))}}export{Ve as G};