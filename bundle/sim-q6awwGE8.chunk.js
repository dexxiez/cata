import{Z as e,k as a,_ as t,$ as i,l as n,n as r,o as s,a0 as o,q as l,X as g,U as d,v as m,Y as c,T as p,D as h,F as f,G as u}from"./preset_utils-Dz2KMMFX.chunk.js";import{R as S}from"./suggest_reforges_action-DVUR84On.chunk.js";import{ax as y,T as b,ay as T,a4 as R,a5 as w,a6 as P,az as A,S as k,a7 as v,G as O,at as W,au as F,av as E,aA as B,ac as M,ad as C,ae as x,af as D,ag as G,a as H,ah as N,ai as I,aB as $,aj as j,ak as L,al as U,am as _,aC as z,aD as J,aE as q,F as K,R as V}from"./detailed_results-BcgtFdXH.chunk.js";import{s as X}from"./apl_utils-DwmPkkTb.chunk.js";const Y=e({fieldName:"assumeBleedActive",label:"Assume Bleed Always Active",labelTooltip:"Assume bleed always exists for 'Rend and Tear' calculations. Otherwise will only calculate based on own rip/rake/lacerate.",extraCssClasses:["within-raid-sim-hide"]});function Z(e){const a=e.getSimpleRotation();return a.manualParams&&a.rotationType==y.SingleTarget}const Q={inputs:[a({fieldName:"rotationType",label:"Type",values:[{name:"Single Target",value:y.SingleTarget},{name:"AOE",value:y.Aoe}]}),t({fieldName:"maintainFaerieFire",label:"Maintain Faerie Fire",labelTooltip:"Maintain Faerie Fire debuff. Overwrites any external Sunder effects specified in settings."}),t({fieldName:"meleeWeave",label:"Enable leave-weaving",labelTooltip:"Weave out of melee range for Stampede procs",showWhen:e=>e.getSimpleRotation().rotationType==y.SingleTarget&&e.getTalents().stampede>0,changeEmitter:e=>b.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),t({fieldName:"bearWeave",label:"Enable bear-weaving",labelTooltip:"Weave into Bear Form while pooling Energy"}),t({fieldName:"snekWeave",label:"Use Albino Snake",labelTooltip:"Reset swing timer at the end of bear-weaves using Albino Snake pet",showWhen:e=>e.getSimpleRotation().bearWeave}),t({fieldName:"allowAoeBerserk",label:"Allow AoE Berserk",labelTooltip:"Allow Berserk usage in AoE rotation",showWhen:e=>e.getSimpleRotation().rotationType==y.Aoe}),t({fieldName:"manualParams",label:"Manual Advanced Parameters",labelTooltip:"Manually specify advanced parameters, otherwise will use preset defaults",showWhen:e=>e.getSimpleRotation().rotationType==y.SingleTarget}),i({fieldName:"minRoarOffset",label:"Roar Offset",labelTooltip:"Targeted offset in Rip/Roar timings",showWhen:Z}),i({fieldName:"ripLeeway",label:"Rip Leeway",labelTooltip:"Rip leeway when determining roar clips",showWhen:Z}),t({fieldName:"useRake",label:"Use Rake",labelTooltip:"Use rake during rotation",showWhen:Z}),t({fieldName:"useBite",label:"Bite during rotation",labelTooltip:"Use bite during rotation rather than just at end",showWhen:Z}),i({fieldName:"biteTime",label:"Bite Time",labelTooltip:"Min seconds on Rip/Roar to bite",showWhen:e=>Z(e)&&1==e.getSimpleRotation().useBite&&e.getSimpleRotation().biteModeType==T.Emperical}),t({fieldName:"biteDuringExecute",label:"Bite during Execute phase",labelTooltip:"Bite aggressively during Execute phase",showWhen:e=>Z(e)&&e.getTalents().bloodInTheWater>0,changeEmitter:e=>b.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),t({fieldName:"cancelPrimalMadness",label:"Enable Primal Madness cancellation",labelTooltip:"Click off Primal Madness buff when doing so will result in net Energy gains",showWhen:e=>(Z(e)||e.getSimpleRotation().rotationType==y.Aoe)&&e.getTalents().primalMadness>0,changeEmitter:e=>b.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},ee={items:[{id:65190,enchant:4209,gems:[68778,52220],reforging:147},{id:69880,randomSuffix:-137,reforging:144},{id:65083,enchant:4204,gems:[52212],reforging:144},{id:65035,enchant:1099,reforging:146},{id:65192,enchant:4102,gems:[52212,52220],reforging:154},{id:65050,enchant:4258,gems:[0],reforging:146},{id:65073,enchant:4107,gems:[52212,0],reforging:165},{id:60231,gems:[52220,52212,52212],reforging:146},{id:65381,randomSuffix:-199,enchant:4126,gems:[52212,52220],reforging:147},{id:65144,enchant:4076,gems:[52212],reforging:153},{id:65082,reforging:147},{id:65367,randomSuffix:-137,reforging:146},{id:65140},{id:65026},{id:65139,enchant:4227,reforging:144},{},{id:64671,gems:[52212],reforging:154}]},ae={items:[{id:46161,enchant:3817,gems:[41398,40002]},{id:45517,gems:[40002]},{id:45245,enchant:3808,gems:[40002,40002]},{id:46032,enchant:3605,gems:[40002,40058]},{id:45473,enchant:3832,gems:[40002,40002,40002]},{id:45869,enchant:3845,gems:[40037]},{id:46158,enchant:3604,gems:[40002]},{id:46095,gems:[40002,40002,40002]},{id:45536,enchant:3823,gems:[39996,39996,39996]},{id:45564,enchant:4223,gems:[39996,39996]},{id:46048,gems:[45862]},{id:45608,gems:[39996]},{id:45931},{id:46038},{id:45613,enchant:3789,gems:[40037,42702]},{},{id:40713}]},te={items:[{id:71488,enchant:4209,gems:[68778,52212],reforging:147},{id:71610,reforging:151},{id:71490,enchant:4204,gems:[52212],reforging:146},{id:71415,enchant:1099,gems:[52212,52212]},{id:71486,enchant:4102,gems:[52212,52212],reforging:147},{id:71428,randomSuffix:-133,enchant:4258,gems:[0],reforging:140},{id:71440,enchant:4107,gems:[52212,0],reforging:144},{id:71641,gems:[52212,52212],reforging:147},{id:71489,enchant:4126,gems:[52212,52212],reforging:139},{id:71467,enchant:4076,gems:[52212],reforging:144},{id:71216,gems:[52212],reforging:151},{id:71401,reforging:153},{id:69150},{id:69112},{id:71466,enchant:4227,reforging:146},{},{id:71567,gems:[52212]}]},ie={items:[{id:51296,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51299,enchant:3808,gems:[40117]},{id:47545,enchant:3605,gems:[40117]},{id:51298,enchant:3832,gems:[40117,40125]},{id:50670,enchant:3845,gems:[40125,0]},{id:50675,enchant:3604,gems:[40162,40117,0]},{id:50707,gems:[40117,40117,40117]},{id:51297,enchant:3823,gems:[40117,40162]},{id:50607,enchant:4223,gems:[40143,40143]},{id:50604,gems:[40143]},{id:50402,gems:[40143]},{id:50363},{id:50343},{id:50735,enchant:3789,gems:[40117,49110,40143]},{},{id:50456}]},ne={type:"TypeAPL",priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{const:{val:"false"}},castSpell:{spellId:{spellId:50334}}}},{action:{catOptimalRotationAction:{manualParams:!1,maintainFaerieFire:!0,meleeWeave:!0,bearWeave:!0,snekWeave:!0}}},{action:{autocastOtherCooldowns:{}}}]},re={type:"TypeAPL",priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{const:{val:"false"}},castSpell:{spellId:{spellId:50334}}}},{action:{catOptimalRotationAction:{rotationType:"Aoe",manualParams:!1,maintainFaerieFire:!1,bearWeave:!0,snekWeave:!0}}},{action:{autocastOtherCooldowns:{}}}]},se=n("Preraid Preset",{items:[{id:60202,enchant:4209,gems:[68778,52220],reforging:144},{id:67137,reforging:152},{id:60447,enchant:4204,gems:[52212],reforging:161},{id:58191,enchant:1099,reforging:147},{id:60287,enchant:4102,gems:[52212,52220],reforging:151},{id:69559,enchant:4258,gems:[0],reforging:154},{id:60443,enchant:4107,gems:[52212,0],reforging:147},{id:56537,gems:[52212,52212]},{id:60288,enchant:4126,gems:[52212,52212],reforging:144},{id:58482,enchant:4076,gems:[52212],reforging:154},{id:62362,reforging:151},{id:68812,reforging:151},{id:58181,reforging:140},{id:56427,reforging:161},{id:69843,enchant:4227,reforging:151},{},{id:64671,gems:[52212],reforging:154}]}),oe=n("P1 Preset",ee),le=n("P2 Preset",ae),ge=n("P3 Preset",te),de=n("P4 Preset",ie),me=r("APL Default",ne);r("APL AoE",re);const ce=s("Bear-Weave",R.fromMap({[w.StatStrength]:.39,[w.StatAgility]:1,[w.StatAttackPower]:.37,[w.StatHitRating]:.34,[w.StatExpertiseRating]:.32,[w.StatCritRating]:.31,[w.StatHasteRating]:.3,[w.StatMasteryRating]:.325},{[P.PseudoStatMainHandDps]:1.61})),pe=s("Mono-Cat",R.fromMap({[w.StatStrength]:.39,[w.StatAgility]:1,[w.StatAttackPower]:.37,[w.StatHitRating]:.31,[w.StatExpertiseRating]:.31,[w.StatCritRating]:.31,[w.StatHasteRating]:.3,[w.StatMasteryRating]:.33},{[P.PseudoStatMainHandDps]:1.56})),he=A.create({rotationType:y.SingleTarget,bearWeave:!0,minCombosForRip:5,minCombosForBite:5,useRake:!0,useBite:!0,mangleSpam:!1,biteModeType:T.Emperical,biteTime:11,minRoarOffset:29,ripLeeway:1,maintainFaerieFire:!0,snekWeave:!0,manualParams:!1,biteDuringExecute:!0,allowAoeBerserk:!1,meleeWeave:!0,cancelPrimalMadness:!1}),fe=o("Single Target Default",k.SpecFeralDruid,he),ue=A.create({rotationType:y.Aoe,bearWeave:!0,maintainFaerieFire:!1,snekWeave:!0,allowAoeBerserk:!1,cancelPrimalMadness:!1}),Se=o("AoE Default",k.SpecFeralDruid,ue),ye={name:"Mono-Cat",data:v.create({talentsString:"-2320322312012121202301-020301",glyphs:O.create({prime1:W.GlyphOfRip,prime2:W.GlyphOfBloodletting,prime3:W.GlyphOfBerserk,major1:F.GlyphOfThorns,major2:F.GlyphOfFeralCharge,major3:F.GlyphOfRebirth,minor1:E.GlyphOfDash,minor2:E.GlyphOfMarkOfTheWild,minor3:E.GlyphOfUnburdenedRebirth})})},be={name:"Hybrid",data:v.create({talentsString:"-2300322312310001220311-020331",glyphs:O.create({prime1:W.GlyphOfRip,prime2:W.GlyphOfBloodletting,prime3:W.GlyphOfBerserk,major1:F.GlyphOfFrenziedRegeneration,major2:F.GlyphOfMaul,major3:F.GlyphOfRebirth,minor1:E.GlyphOfDash,minor2:E.GlyphOfChallengingRoar,minor3:E.GlyphOfUnburdenedRebirth})})},Te=B.create({assumeBleedActive:!0}),Re=M.create({flask:C.FlaskOfTheWinds,food:x.FoodSkeweredEel,defaultPotion:D.PotionOfTheTolvir,prepopPotion:D.PotionOfTheTolvir,tinkerHands:G.TinkerHandsSynapseSprings,explosiveBigDaddy:!0}),we={distanceFromTarget:25,duration:240,durationVariation:15,highHpThreshold:.8,iterationCount:25e3},Pe=l(k.SpecFeralDruid,{cssClass:"feral-druid-sim-ui",cssScheme:H.getCssClass(H.Druid),knownIssues:[],warnings:[],epStats:[w.StatStrength,w.StatAgility,w.StatAttackPower,w.StatHitRating,w.StatExpertiseRating,w.StatCritRating,w.StatHasteRating,w.StatMasteryRating],epPseudoStats:[P.PseudoStatMainHandDps],epReferenceStat:w.StatAgility,displayStats:N.createDisplayStatArray([w.StatHealth,w.StatStrength,w.StatAgility,w.StatAttackPower,w.StatExpertiseRating,w.StatMasteryRating,w.StatMana],[P.PseudoStatPhysicalHitPercent,P.PseudoStatPhysicalCritPercent,P.PseudoStatMeleeHastePercent]),defaults:{gear:se.gear,epWeights:ce.epWeights,statCaps:(()=>{const e=(new R).withPseudoStat(P.PseudoStatPhysicalHitPercent,8),a=(new R).withStat(w.StatExpertiseRating,26*I);return e.add(a)})(),other:we,consumes:Re,rotationType:$.TypeSimple,simpleRotation:he,talents:ye.data,specOptions:Te,raidBuffs:j.create({markOfTheWild:!0,strengthOfEarthTotem:!0,abominationsMight:!0,windfuryTotem:!0,bloodlust:!0,communion:!0,arcaneBrilliance:!0,manaSpringTotem:!0}),partyBuffs:L.create({}),individualBuffs:U.create({}),debuffs:_.create({bloodFrenzy:!0})},playerIconInputs:[],rotationInputs:Q,includeBuffDebuffInputs:[g,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[Y,m,c,p,h,f]},encounterPicker:{showExecuteProportion:!0},presets:{epWeights:[ce,pe],talents:[ye,be],rotations:[fe,Se],gear:[se,oe,ge]},autoRotation:e=>me.rotation.rotation,simpleRotation:(e,a,t)=>{const[i,n]=X(t),r=z.fromJsonString('{"condition":{"const":{"val":"false"}},"castSpell":{"spellId":{"spellId":50334}}}'),s=z.fromJsonString(`{"catOptimalRotationAction":{"rotationType":${a.rotationType},"manualParams":${a.manualParams},"maintainFaerieFire":${a.maintainFaerieFire},"allowAoeBerserk":${a.allowAoeBerserk},"meleeWeave":${a.meleeWeave},"bearWeave":${a.bearWeave},"snekWeave":${a.snekWeave},"minRoarOffset":${a.minRoarOffset.toFixed(2)},"ripLeeway":${a.ripLeeway.toFixed(0)},"useRake":${a.useRake},"useBite":${a.useBite},"biteDuringExecute":${a.biteDuringExecute},"biteTime":${a.biteTime.toFixed(2)},"cancelPrimalMadness":${a.cancelPrimalMadness}}}`),o=z.fromJsonString('{"autocastOtherCooldowns":{}}');return n.push(...[r,s,o].filter((e=>e))),J.create({prepullActions:i,priorityList:n.map((e=>q.create({action:e})))})},hiddenMCDs:[50334],raidSimPresets:[{spec:k.SpecFeralDruid,talents:ye.data,specOptions:Te,consumes:Re,defaultFactionRaces:{[K.Unknown]:V.RaceUnknown,[K.Alliance]:V.RaceNightElf,[K.Horde]:V.RaceTauren},defaultGear:{[K.Unknown]:{},[K.Alliance]:{1:oe.gear,2:le.gear,3:ge.gear,4:de.gear},[K.Horde]:{1:oe.gear,2:le.gear,3:ge.gear,4:de.gear}},otherDefaults:we}]});class Ae extends u{constructor(e,a){super(e,a,Pe),a.sim.waitForInit().then((()=>{new S(this)}))}}export{Ae as F};
