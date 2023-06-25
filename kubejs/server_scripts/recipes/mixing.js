ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/mixing/';
    const recipes = [

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:ingots/crimson_steel'},
                {'tag': 'forge:ingots/desh'},
                {'item': 'majruszsdifficulty:enderium_shard'},
                {'item': 'mythicbotany:alfsteel_ingot'},
                {'item': 'silentgear:crushed_shulker_shell'},
            ],
            
            results: [{'count': 3, 'item': 'silentgear:tyrian_steel_ingot'}],
            old_id: 'silentgear:compounding/metal/tyrian_steel_ingot',
            id: `${id_prefix}tyrian_steel_ingot`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/steel'},
                {'tag': 'forge:ingots/fiery'},
                {'tag': 'forge:ingots/crimson_iron'},
                {'item': 'minecraft:crimson_fungus'},
            ],
            
            results: [{'count': 3, 'item': 'silentgear:crimson_steel_ingot'}],
            old_id: 'silentgear:crimson_steel_ingot',
            id: `${id_prefix}crimson_steel_ingot`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:ingots/electrum'},
                {'tag': 'forge:ingots/azure_silver'},
                {'item': 'biomancy:exotic_dust'},
                {'tag': 'forge:ingots/manasteel'}
            ],
            
            results: [{'count': 3, 'item': 'silentgear:azure_electrum_ingot'}],
            old_id: 'silentgear:azure_electrum_ingot',
            id: `${id_prefix}azure_electrum_ingot`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'minecraft:ender_eye'},
                {'tag': 'forge:dusts/fluix'},
                {'tag': 'forge:dusts/fluix'},
                {'tag': 'forge:dusts/fluix'},
                {'item': 'biomancy:exotic_dust'},
                {'tag': 'forge:gems/fluix'},
                {'tag': 'forge:gems/fluix'},
                {'tag': 'forge:gems/fluix'},
                {'tag': 'forge:gems/fluix'},
            ],
            
            results: [{'item': 'ae2:fluix_pearl'}],
            old_id: 'ae2:misc/fluixpearl',
            id: `${id_prefix}fluix_pearl`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:dusts/stellarium'},
                {'item': 'kubejs:boss_essence'},
                {'item': 'botanicadds:gaiasteel_ingot'},
                {'item': 'ae2:quantum_entangled_singularity'},
                {'item': 'deeperdarker:reinforced_echo_shard'},
                {'tag': 'forge:dusts/tyrian_steel'},
            ],
            
            results: [{'item': 'kubejs:impossible_compound'}],
            id: `${id_prefix}impossible_compound`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/copper'},
                {'tag': 'forge:ingots/tin'}
            ],
            
            results: [{'item': 'thermal:bronze_ingot'}],
            id: `${id_prefix}bronze_ingot`,
            old_id: 'thermal:machines/smelter/smelter_alloy_bronze'
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'item': 'minecraft:magma_block'}
            ],
            
            results: [{'amount': 50, 'fluid': 'minecraft:lava'}],
            id: `${id_prefix}lava_from_magma`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'item': 'minecraft:packed_ice'}
            ],
            
            results: [{'amount': 1000, 'fluid': 'minecraft:water'}],
            id: `${id_prefix}water_from_ice`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'item': 'minecraft:snow_block'}
            ],
            
            results: [{'amount': 500, 'fluid': 'minecraft:water'}],
            id: `${id_prefix}water_from_snow`
        },

        {
            ingredients: [
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {'item': 'minecraft:sugar'},
                {
                    'amount': 1000,
                    'fluid': 'minecraft:water',
                    'nbt': {}
                }
            ],
            
            results: [{'amount': 900, 'fluid': 'the_bumblezone:sugar_water_still'}],
            id: `${id_prefix}sugar_water_from_sugar`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'item': 'architects_palette:algal_blend'},
                {'tag': 'forge:nuggets/zinc'},
                {'item': 'minecraft:andesite'}
            ],
            
            results: [{'count': 3, 'item': 'create:andesite_alloy'}],
            id: `${id_prefix}andesite_alloy`
        },

        {
            ingredients: [
                {'item': 'minecraft:soul_sand'},
                {'item': 'minecraft:soul_sand'},
                {'tag': 'forge:nuggets/zinc'},
                {'tag': 'forge:ingots/copper'},
            ],
            
            results: [{'count': 4, 'item': 'architects_palette:nether_brass_blend'}],
            id: `${id_prefix}nether_brass_blend`,
            old_id: 'architects_palette:nether_brass_blend'
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'item': 'architects_palette:nether_brass_blend'},
                {'item': 'minecraft:clay_ball'},
            ],
            
            results: [{'item': 'architects_palette:nether_brass_ingot'}],
            id: `${id_prefix}nether_brass`,
            old_id: 'architects_palette:smelting/nether_brass_ingot_from_nether_brass_blend_smelting'
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:coal_coke'},
                {'tag': 'forge:coal_coke'},
                {'tag': 'forge:coal_coke'},
                {'item': 'createdeco:cast_iron_ingot'},
            ],
            
            results: [{'item': 'ad_astra:steel_ingot'}],
            id: `${id_prefix}steel_ingot`,
            old_id: 'as_astra:recipes/steel_ingot_from_blasting_iron_ingot'
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/gold'},
                {'tag': 'forge:ingots/copper'}
            ],
            
            results: [{'count': 2, 'item': 'thermal:rose_gold_ingot'}],
            id: `${id_prefix}rose_gold_ingot`,
            old_id: 'thermal:machines/smelter/smelter_alloy_rose_gold'
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:ingots/silver'},
                {'tag': 'forge:ingots/copper'},
                {'tag': 'forge:ingots/copper'},
                {'tag': 'forge:ingots/copper'},
                {'tag': 'forge:dusts/redstone'},
                {'tag': 'forge:dusts/redstone'},
                {'tag': 'forge:dusts/redstone'},
                {'tag': 'forge:dusts/redstone'}
            ],
            
            results: [{'count': 4, 'item': 'thermal:signalum_ingot'}],
            id: `${id_prefix}signalum_ingot`,
            old_id: 'thermal:machines/smelter/smelter_alloy_signalum'
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:ingots/silver'},
                {'tag': 'forge:ingots/tin'},
                {'tag': 'forge:ingots/tin'},
                {'tag': 'forge:ingots/tin'},
                {'tag': 'forge:dusts/glowstone'},
                {'tag': 'forge:dusts/glowstone'},
                {'item': 'architects_palette:sunmetal_brick'}
            ],
            
            results: [{'count': 4, 'item': 'thermal:lumium_ingot'}],
            id: `${id_prefix}lumium_ingot`,
            old_id: 'thermal:machines/smelter/smelter_alloy_lumium'
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:dusts/diamond'},
                {'tag': 'forge:dusts/diamond'},
                {'tag': 'forge:ingots/lead'},
                {'tag': 'forge:ingots/lead'},
                {'tag': 'forge:ingots/lead'},
                {'tag': 'forge:dusts/ender_pearl'},
                {'tag': 'forge:dusts/ender_pearl'},
                {'item': 'architects_palette:wardstone_brick'}
            ],
            
            results: [{'count': 3, 'item': 'thermal:enderium_ingot'}],
            id: `${id_prefix}enderium`,
            old_id: 'thermal:machines/smelter/smelter_alloy_enderium'
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:gems/prismarine'},
                {'tag': 'forge:ingots/nickel'},
                {'tag': 'forge:ingots/nickel'},
                {'item': 'kubejs:pearlescent_nugget'},
                {'item': 'kubejs:pearlescent_nugget'},
                {'item': 'kubejs:pearlescent_nugget'}
            ],
            
            results: [{'count': 2, 'item': 'thermalendergy:prismalium_ingot'}],
            id: `${id_prefix}prismalium_ingot`,
            old_id: 'thermalendergy:machine/smelter/prismalium_ingot'
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:gems/amethyst'},
                {'tag': 'forge:gems/amethyst'},
                {'tag': 'forge:gems/amethyst'},
                {'tag': 'forge:gems/amethyst'},
                {'tag': 'forge:fruits/chorus'},
                {'tag': 'forge:fruits/chorus'},
                {'tag': 'forge:ingots/bismuth'},
                {'tag': 'forge:ingots/bismuth'},
            ],
            
            results: [{'count': 2, 'item': 'thermalendergy:melodium_ingot'}],
            id: `${id_prefix}melodium_ingot`,
            old_id: 'thermalendergy:machine/smelter/melodium_ingot'
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'tag': 'forge:nether_stars'},
                {'item': 'architects_palette:unobtanium'},
                {'item': 'architects_palette:unobtanium'},
                {'item': 'architects_palette:unobtanium'},
                {'item': 'architects_palette:unobtanium'},
                {'tag': 'forge:ingots/stellium'},
                {'tag': 'forge:ingots/stellium'},
                {'tag': 'forge:ingots/stellium'},
            ],
            
            results: [{'count': 4, 'item': 'thermalendergy:stellarium_ingot'}],
            id: `${id_prefix}stellarium_ingot`,
            old_id: 'thermalendergy:machine/smelter/stellarium_ingot'
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/silver'},
                {'tag': 'forge:ingots/gold'}
            ],
            
            results: [{'count': 2, 'item': 'thermal:electrum_ingot'}],
            id: `${id_prefix}electrum`,
            old_id: 'thermal:machines/smelter/smelter_alloy_electrum'
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/nickel'},
                {'tag': 'forge:ingots/iron'},
                {'tag': 'forge:ingots/zinc'},
                {'item': 'architects_palette:cerebral_plate'}
            ],
            
            results: [{'count': 4, 'item': 'thermal:invar_ingot'}],
            id: `${id_prefix}invar`,
            old_id: 'thermal:machines/smelter/smelter_alloy_invar'
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:ingots/nickel'},
                {'tag': 'forge:ingots/copper'}
            ],
            
            results: [{'count': 2, 'item': 'thermal:constantan_ingot'}],
            id: `${id_prefix}constantan`,
            old_id: 'thermal:machines/smelter/smelter_alloy_constantan'
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'minecraft:coals'},
                {'tag': 'minecraft:coals'},
                {'tag': 'minecraft:coals'},
                {'tag': 'minecraft:coals'},
            ],
            
            results: [{'count': 2, 'item': 'thermal:coal_coke'}],
            id: `${id_prefix}coke_from_coal`
        },

        {
            heatRequirement: 'heated',
            ingredients: [
                {'tag': 'forge:bitumen'},
                {'tag': 'forge:bitumen'},
                {'tag': 'forge:bitumen'},
                {'tag': 'forge:bitumen'},
            ],
            
            results: [{'count': 2, 'item': 'thermal:coal_coke'}],
            id: `${id_prefix}coke_from_bitumen`
        },

        {
            ingredients: [
                {'item': 'quark:soul_bead'},
                {'tag': 'forge:gems/quartz'}
                
            ],
            
            results: [{'item': 'nourished_nether:soul_quartz'}],
            id: `${id_prefix}soul_quartz_mixing`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'kubejs:chromium_ingot'},
                {'tag': 'forge:ingots/nickel'},
                {'tag': 'forge:ingots/steel'}
            ],
            
            results: [{'count': 3, 'item': 'kubejs:stainless_steel_ingot'}],
            id: `${id_prefix}stainless_steel_ingot`
        },

        {
            heatRequirement: 'superheated',
            ingredients: [
                {'item': 'architects_palette:oracle_jelly'},
                {'item': 'architects_palette:oracle_jelly'},
                {'item': 'architects_palette:oracle_jelly'},
                {'item': 'architects_palette:oracle_jelly'},
                {
                    'amount': 1000,
                    'fluid': 'ad_astra:cryo_fuel',
                    'nbt': {}
                }
            ],
            
            results: [{'amount': 1000, 'fluid': 'createteleporters:quantum_fluid'}],
            id: `${id_prefix}quantum_fluid`,
            old_id: 'createteleporters:quantum_fluid_recipe'
        }
    ];

    recipes.forEach((recipe) => {

        if (recipe.heatRequirement) {
            event.custom({
                type: 'create:mixing',
                heatRequirement: recipe.heatRequirement,
                ingredients: recipe.ingredients,
                results: recipe.results
            })
            .id(recipe.id)
        }
        else {
            event.custom({
                type: 'create:mixing',
                ingredients: recipe.ingredients,
                results: recipe.results
            })
            .id(recipe.id)
        }

        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }
    });
});