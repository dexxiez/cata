import { IndividualLinkImporter } from './components/importers';
import Toast, { ToastOptions } from './components/toast';
import * as Tooltips from './constants/tooltips.js';
import { Encounter } from './encounter';
import { Player } from './player';
import { APLRotation, APLRotation_Type as APLRotationType } from './proto/apl';
import { Cooldowns, Encounter as EncounterProto, EquipmentSpec, Faction, HealingModel, Spec } from './proto/common';
import { SavedRotation, SavedTalents } from './proto/ui';
import { Stats } from './proto_utils/stats';
import { SpecRotation, specTypeFunctions } from './proto_utils/utils';

interface PresetBase {
	name: string;
	tooltip?: string;
	enableWhen?: (obj: Player<any>) => boolean;
	onLoad?: (player: Player<any>) => void;
}

interface PresetOptionsBase extends Pick<PresetBase, 'onLoad'> {
	customCondition?: (player: Player<any>) => boolean;
}

export interface PresetGear extends PresetBase {
	gear: EquipmentSpec;
}
export interface PresetGearOptions extends PresetOptionsBase, Pick<PresetBase, 'tooltip'> {
	talentTree?: number;
	talentTrees?: Array<number>;
	faction?: Faction;
}

export interface PresetTalents {
	name: string;
	data: SavedTalents;
	enableWhen?: (obj: Player<any>) => boolean;
}

export interface PresetTalentsOptions {
	customCondition?: (player: Player<any>) => boolean;
}

export interface PresetRotation extends PresetBase {
	rotation: SavedRotation;
}
export interface PresetRotationOptions extends Pick<PresetOptionsBase, 'onLoad'> {
	talentTree?: number;
}

export interface PresetEpWeights extends PresetBase {
	epWeights: Stats;
}
export interface PresetEpWeightsOptions extends PresetOptionsBase {}

export interface PresetEncounter extends PresetBase {
	encounter?: EncounterProto;
	healingModel?: HealingModel;
}
export interface PresetEncounterOptions extends PresetOptionsBase {
	includeHealingModel?: boolean;
}

export interface PresetBuild {
	name: string;
	gear?: PresetGear;
	talents?: PresetTalents;
	rotation?: PresetRotation;
	epWeights?: PresetEpWeights;
	encounter?: PresetEncounter;
}

export interface PresetBuildOptions extends Omit<PresetBuild, 'name'> {}

export const makePresetGear = (name: string, gearJson: any, options?: PresetGearOptions): PresetGear => {
	const gear = EquipmentSpec.fromJson(gearJson);
	return makePresetGearHelper(name, gear, options || {});
};

const makePresetGearHelper = (name: string, gear: EquipmentSpec, options: PresetGearOptions): PresetGear => {
	const conditions: Array<(player: Player<any>) => boolean> = [];
	if (options.talentTree !== undefined) {
		conditions.push((player: Player<any>) => player.getTalentTree() == options.talentTree);
	}
	if (options.talentTrees !== undefined) {
		conditions.push((player: Player<any>) => (options.talentTrees || []).includes(player.getTalentTree()));
	}
	if (options.faction !== undefined) {
		conditions.push((player: Player<any>) => player.getFaction() == options.faction);
	}
	if (options.customCondition !== undefined) {
		conditions.push(options.customCondition);
	}

	return {
		name,
		tooltip: options.tooltip || Tooltips.BASIC_BIS_DISCLAIMER,
		gear,
		enableWhen: !!conditions.length ? (player: Player<any>) => conditions.every(cond => cond(player)) : undefined,
		onLoad: options?.onLoad,
	};
};

export const makePresetTalents = (name: string, data: SavedTalents, options?: PresetTalentsOptions): PresetTalents => {
	const conditions: Array<(player: Player<any>) => boolean> = [];
	if (options && options.customCondition) {
		conditions.push(options.customCondition);
	}

	return {
		name,
		data,
		enableWhen: conditions.length > 0 ? (player: Player<any>) => conditions.every(cond => cond(player)) : undefined,
	};
};

export const makePresetEpWeights = (name: string, epWeights: Stats, options?: PresetEpWeightsOptions): PresetEpWeights => {
	return makePresetEpWeightHelper(name, epWeights, options || {});
};

const makePresetEpWeightHelper = (name: string, epWeights: Stats, options?: PresetEpWeightsOptions): PresetEpWeights => {
	const conditions: Array<(player: Player<any>) => boolean> = [];
	if (options?.customCondition !== undefined) {
		conditions.push(options.customCondition);
	}

	return {
		name,
		epWeights,
		enableWhen: !!conditions.length ? (player: Player<any>) => conditions.every(cond => cond(player)) : undefined,
		onLoad: options?.onLoad,
	};
};

export const makePresetAPLRotation = (name: string, rotationJson: any, options?: PresetRotationOptions): PresetRotation => {
	const rotation = SavedRotation.create({
		rotation: APLRotation.fromJson(rotationJson),
	});

	return makePresetRotationHelper(name, rotation, options);
};

export const makePresetSimpleRotation = <SpecType extends Spec>(
	name: string,
	spec: SpecType,
	simpleRotation: SpecRotation<SpecType>,
	options?: PresetRotationOptions,
): PresetRotation => {
	const isTankSpec =
		spec == Spec.SpecBloodDeathKnight || spec == Spec.SpecGuardianDruid || spec == Spec.SpecProtectionPaladin || spec == Spec.SpecProtectionWarrior;
	const rotation = SavedRotation.create({
		rotation: {
			type: APLRotationType.TypeSimple,
			simple: {
				specRotationJson: JSON.stringify(specTypeFunctions[spec].rotationToJson(simpleRotation)),
				cooldowns: Cooldowns.create({
					hpPercentForDefensives: isTankSpec ? 0.4 : 0,
				}),
			},
		},
	});

	return makePresetRotationHelper(name, rotation, options);
};

const makePresetRotationHelper = (name: string, rotation: SavedRotation, options?: PresetRotationOptions): PresetRotation => {
	const conditions: Array<(player: Player<any>) => boolean> = [];
	if (options?.talentTree != undefined) {
		conditions.push((player: Player<any>) => player.getTalentTree() == options.talentTree);
	}
	return {
		name,
		rotation,
		enableWhen: !!conditions.length ? (player: Player<any>) => conditions.every(cond => cond(player)) : undefined,
		onLoad: options?.onLoad,
	};
};

export const makePresetEncounter = (name: string, encounter?: PresetEncounter['encounter'] | string, options?: PresetEncounterOptions): PresetEncounter => {
	let healingModel: PresetEncounter['healingModel'] = undefined;
	if (typeof encounter === 'string') {
		const parsedUrl = IndividualLinkImporter.tryParseUrlLocation(new URL(encounter));
		if (parsedUrl?.settings.encounter) Encounter.updateProtoVersion(parsedUrl?.settings.encounter);
		encounter = parsedUrl?.settings.encounter;
		healingModel = !!options?.includeHealingModel ? parsedUrl?.settings.player?.healingModel : undefined;
	}

	return {
		name,
		encounter,
		healingModel,
		...options,
	};
};

export const makePresetBuild = (name: string, { gear, talents, rotation, epWeights, encounter }: PresetBuildOptions): PresetBuild => {
	return { name, gear, talents, rotation, epWeights, encounter };
};

export type SpecCheckWarning = {
	condition: (player: Player<any>) => boolean;
	message: string;
};

export const makeSpecChangeWarningToast = (checks: SpecCheckWarning[], player: Player<any>, options?: Partial<ToastOptions>) => {
	const messages: string[] = checks.map(({ condition, message }) => condition(player) && message).filter((m): m is string => !!m);
	if (messages.length)
		new Toast({
			variant: 'warning',
			body: (
				<>
					{messages.map(message => (
						<p>{message}</p>
					))}
				</>
			),
			delay: 5000 * messages.length,
			...options,
		});
};
