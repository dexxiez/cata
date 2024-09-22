package balance

import (
	"testing"

	_ "github.com/wowsims/cata/sim/common" // imported to get caster sets included. (we use spellfire here)
	"github.com/wowsims/cata/sim/core"
	"github.com/wowsims/cata/sim/core/proto"
)

func init() {
	RegisterBalanceDruid()
}

func TestBalance(t *testing.T) {
	core.RunTestSuite(t, t.Name(), core.FullCharacterTestSuiteGenerator(core.CharacterSuiteConfig{
		Class: proto.Class_ClassDruid,
		Race:  proto.Race_RaceNightElf,

		GearSet: core.GetGearSet("../../../ui/druid/balance/gear_sets", "t11"),
		OtherGearSets: []core.GearSetCombo{
			core.GetGearSet("../../../ui/druid/balance/gear_sets", "t12"),
		},
		Talents:     StandardTalents,
		Glyphs:      StandardGlyphs,
		Consumes:    FullConsumes,
		SpecOptions: core.SpecOptionsCombo{Label: "Default", SpecOptions: PlayerOptionsBalance},
		Rotation:    core.GetAplRotation("../../../ui/druid/balance/apls", "t11"),
		OtherRotations: []core.RotationCombo{
			core.GetAplRotation("../../../ui/druid/balance/apls", "t12"),
		},
		ItemFilter: ItemFilter,
	}))
}

var StandardTalents = "33230221123212111001-01-020331"
var StandardGlyphs = &proto.Glyphs{
	Prime1: int32(proto.DruidPrimeGlyph_GlyphOfInsectSwarm),
	Prime2: int32(proto.DruidPrimeGlyph_GlyphOfMoonfire),
	Prime3: int32(proto.DruidPrimeGlyph_GlyphOfWrath),
	Major1: int32(proto.DruidMajorGlyph_GlyphOfStarfall),
	Major2: int32(proto.DruidMajorGlyph_GlyphOfRebirth),
	Major3: int32(proto.DruidMajorGlyph_GlyphOfFocus),
	Minor1: int32(proto.DruidMinorGlyph_GlyphOfTyphoon),
	Minor2: int32(proto.DruidMinorGlyph_GlyphOfUnburdenedRebirth),
	Minor3: int32(proto.DruidMinorGlyph_GlyphOfMarkOfTheWild),
}

var PlayerOptionsBalance = &proto.Player_BalanceDruid{
	BalanceDruid: &proto.BalanceDruid{
		Options: &proto.BalanceDruid_Options{
			ClassOptions: &proto.DruidOptions{},
		},
	},
}

var FullConsumes = &proto.Consumes{
	Flask:         proto.Flask_FlaskOfTheDraconicMind,
	Food:          proto.Food_FoodSeveredSagefish,
	DefaultPotion: proto.Potions_VolcanicPotion,
	PrepopPotion:  proto.Potions_VolcanicPotion,
}

var ItemFilter = core.ItemFilter{
	WeaponTypes: []proto.WeaponType{
		proto.WeaponType_WeaponTypeDagger,
		proto.WeaponType_WeaponTypeMace,
		proto.WeaponType_WeaponTypeOffHand,
		proto.WeaponType_WeaponTypeStaff,
		proto.WeaponType_WeaponTypePolearm,
	},
	ArmorType: proto.ArmorType_ArmorTypeLeather,
	RangedWeaponTypes: []proto.RangedWeaponType{
		proto.RangedWeaponType_RangedWeaponTypeRelic,
	},
}
