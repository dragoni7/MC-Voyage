let CR = (id) => 'create:' + id
let MC = (id) => 'minecraft:' + id
let AE = (id) => 'ae2:' + id
let TH = (id) => 'thermal:' + id
let KJ = (id) => 'kubejs:' + id
let BI = (id) => 'biomancy:' + id
let AA = (id) => 'ad_astra:' + id
let BO = (id) => 'botania:' + id
let HX = (id) => 'hexerei:' + id

let FORGE_TAG = (id) => '#forge:' + id
let MC_TAG = (id) => '#minecraft:' + id
let GEAR_TAG = (id) => '#forge:gears/' + id
let GEM_TAG = (id) => '#forge:gems/' + id
let INGOT_TAG = (id) => '#forge:ingots/' + id
let PLATE_TAG = (id) => '#forge:plates/' + id
let NUGGET_TAG = (id) => '#forge:nuggets/' + id
let STORAGE_BLOCK_TAG = (id) => '#forge:storage_blocks/' + id


ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:/shaped/';
    const recipes = [

        {
            output: MC('ender_eye'),
            old_id: MC('ender_eye'),
            pattern: 
            ['   ',
             'CPB', 
             '   '],
            key: {
                B: MC('blaze_powder'),
                C: 'the_bumblezone:honey_crystal_shards',
                P: MC('ender_pearl')
            },
            id:  `${id_prefix}ender_eye`
        },

        {
            output: 'the_bumblezone:sugar_water_bucket',
            old_id: 'the_bumblezone:sugar_water_bucket',
            pattern: 
            ['SSS',
             'SBS',
             'SSS'],
            key: {
                B: 'minecraft:water_bucket',
                S: '#forge:sugar'
            },
            id:  `${id_prefix}sugar_water_bucket`
        },

        {
            output: 'spirit:soul_pedestal',
            old_id: 'spirit:crafting/soul_pedestal',
            pattern: 
            ['IBI',
             'ACA', 
             'SSS'],
            key: {
                I: 'spirit:soul_steel_ingot',
                B: 'spirit:soul_steel_block',
                A: 'quark:soul_bead',
                C: 'spirit:crystal_pedestal',
                S: 'spirit:soul_slate',
            },
            id:  `${id_prefix}soul_pedestal`
        },

        // AE2

        {
            output: Item.of('ae2:item_cell_housing', 1),
            old_id: 'ae2:network/cells/item_cell_housing',
            pattern: 
            ['GRG',
             'R R', 
             'CCC'],
            key: {
                G: 'ae2:quartz_glass',
                R: MC('redstone'),
                C: INGOT_TAG('steel')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}item_cell_housing`
        },

        {
            output: 'ae2:inscriber',
            old_id: 'ae2:network/blocks/inscribers',
            pattern: 
            ['APA',
             'MSM', 
             'APA'],
            key: {
                A: INGOT_TAG('stainless_steel'),
                P: KJ('plasteel_mechanism'),
                M: KJ('infused_mechanism'),
                S: KJ('stainless_casing')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}inscriber`
        },

        {
            output: AE('crafting_unit'),
            old_id: AE('network/crafting/cpu_crafting_unit'),
            pattern: 
            ['CIC',
             'FAF', 
             'ILI'],
            key: {
                I: INGOT_TAG('stainless_steel'),
                A: KJ('azure_casing'),
                C: AE('calculation_processor'),
                F: AE('fluix_glass_cable'),
                L: AE('logic_processor')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}crafting_unit`
        },

        {
            output: 'ae2:charger',
            old_id: 'ae2:network/blocks/crystal_processing_charger',
            pattern: 
            ['APA',
             'PSP', 
             'APA'],
            key: {
                A: INGOT_TAG('stainless_steel'),
                P: CR('copper_sheet'),
                S: KJ('stainless_casing')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}charger`
        },

        {
            output: 'ae2:molecular_assembler',
            old_id: 'ae2:network/crafting/molecular_assembler',
            pattern: 
            ['IGI',
             'ACF', 
             'IGI'],
            key: {
                I: INGOT_TAG('stainless_steel'),
                C: KJ('plasteel_mechanism'),
                G: 'ae2:quartz_glass',
                A: 'ae2:annihilation_core',
                F: 'ae2:formation_core'
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}molecular_assembler`
        },

        {
            output: 'ae2:condenser',
            old_id: 'ae2:network/blocks/io_condenser',
            pattern: 
            ['IGI',
             'GDG', 
             'IGI'],
            key: {
                I: INGOT_TAG('tyrian_steel'),
                D: KJ('infused_mechanism'),
                G: KJ('plasteel_mechanism')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}condenser`
        },

        {
            output: 'ae2:interface',
            old_id: 'ae2:network/blocks/interfaces_interface',
            pattern: 
            ['IGI',
             'ACF', 
             'IGI'],
            key: {
                I: INGOT_TAG('invar'),
                C: KJ('stainless_mechanism'),
                G: 'ae2:quartz_glass',
                A: 'ae2:annihilation_core',
                F: 'ae2:formation_core'
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}interface`
        },

        {
            output: Item.of('ae2:fluix_glass_cable', 6),
            old_id: 'ae2:network/cables/glass_fluix',
            pattern: 
            [' F ',
             'DQD', 
             ' F '],
            key: {
                Q: 'ae2:quartz_fiber',
                F: '#forge:gems/fluix',
                D: TH('obsidian_glass')

            },
            stage: MASTER_MODE,
            id:  `${id_prefix}fluix_glass_cable`
        },

        {
            output: 'ae2:quartz_vibrant_glass',
            old_id: 'ae2:decorative/quartz_vibrant_glass',
            pattern: 
            ['   ',
             'DGD', 
             '   '],
            key: {
                G: 'ae2:quartz_glass',
                D: INGOT_TAG('lumium')

            },
            stage: MASTER_MODE,
            id:  `${id_prefix}quartz_vibrant_glass`
        },

        {
            output: Item.of('ae2:semi_dark_monitor', 3),
            old_id: 'ae2:network/parts/panels_semi_dark_monitor',
            pattern: 
            [' CG',
             'IRV', 
             '  G'],
            key: {
                G: 'ae2:quartz_glass',
                V: 'ae2:quartz_vibrant_glass',
                R: 'minecraft:redstone',
                I: INGOT_TAG('iron'),
                C: KJ('stainless_mechanism')

            },
            stage: MASTER_MODE,
            id:  `${id_prefix}panels_semi_dark_monitor`
        },

        {
            output: 'ae2:energy_cell',
            old_id: 'ae2:network/blocks/energy_energy_cell',
            pattern: 
            ['CDC',
             'DTD', 
             'CDC'],
            key: {
                C: '#forge:gems/certus_quartz',
                D: '#forge:dusts/fluix',
                T: KJ('redstone_mechanism')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}energy_cell`
        },

        {
            output: 'ae2:quartz_growth_accelerator',
            old_id: 'ae2:network/blocks/crystal_processing_quartz_growth_accelerator',
            pattern: 
            ['IFI',
             'GMG', 
             'IFI'],
            key: {
                I: INGOT_TAG('lumium'),
                M: 'kubejs:stainless_casing',
                G: 'ae2:quartz_glass',
                F: 'ae2:fluix_glass_cable'
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}quartz_growth_accelerator`
        },

        {
            output: 'ae2:wireless_access_point',
            old_id: 'ae2:network/wireless_access_point',
            pattern: 
            [' W ',
             'PCP', 
             ' F '],
            key: {
                W: 'ae2:wireless_receiver',
                P: 'ae2:calculation_processor',
                C: 'kubejs:azure_casing',
                F: 'ae2:fluix_glass_cable'
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}wireless_access_point`
        },

        {
            output: 'ae2:io_port',
            old_id: 'ae2:network/blocks/io_port',
            pattern: 
            ['GGG',
             'DCD', 
             'IPI'],
            key: {
                G: '#forge:glass',
                P: 'ae2:logic_processor',
                D: 'ae2:drive',
                C: KJ('stainless_mechanism'),
                I: INGOT_TAG('iron')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}io_port`
        },

        {
            output: 'meetyourfight:ace_of_iron',
            old_id: 'meetyourfight:ace_of_iron',
            pattern: 
            ['IBI',
             'EFE', 
             'IBI'],
            key: {
                F: 'meetyourfight:fortunes_favor',
                I: INGOT_TAG('iron'),
                E: INGOT_TAG('stainless_steel'),
                B: '#forge:storage_blocks/knightmetal'
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}ace_of_iron`
        },

        {
            output: 'meetyourfight:slicers_dice',
            old_id: 'meetyourfight:slicers_dice',
            pattern: 
            [' I ',
             'IFI', 
             ' I '],
            key: {
                F: 'meetyourfight:fortunes_favor',
                I: INGOT_TAG('elementium'),
            },
            id:  `${id_prefix}slicers_dice`
        },

        {
            output: 'meetyourfight:bone_raker',
            old_id: 'meetyourfight:bone_raker',
            pattern: 
            ['BBB',
             'ITI', 
             'III'],
            key: {
                T: 'meetyourfight:mossy_tooth',
                I: INGOT_TAG('steel'),
                B: FORGE_TAG('bones')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}bone_raker`
        },

        {
            output: 'meetyourfight:spectres_grasp',
            old_id: 'meetyourfight:spectres_grasp',
            pattern: 
            [' P ',
             'I I', 
             'III'],
            key: {
                P: 'meetyourfight:phantoplasm',
                I: INGOT_TAG('blaze_gold'),
            },
            id:  `${id_prefix}spectres_grasp`
        },

        {
            output: 'meetyourfight:passages_toll',
            old_id: 'meetyourfight:passages_toll',
            pattern: 
            [' S ',
             'III', 
             'IPI'],
            key: {
                P: 'meetyourfight:phantoplasm',
                I: INGOT_TAG('blaze_gold'),
                S: FORGE_TAG('string')
            },
            id:  `${id_prefix}passages_toll`
        },

        {
            output: 'meetyourfight:caged_heart',
            old_id: 'meetyourfight:caged_heart',
            pattern: 
            ['BIB',
             'BIB', 
             ' T '],
            key: {
                B: '#forge:bones',
                I: INGOT_TAG('elementium'),
                T: 'meetyourfight:mossy_tooth'
            },
            id:  `${id_prefix}caged_heart`
        },

        {
            output: 'meetyourfight:spectres_eye',
            old_id: 'meetyourfight:spectres_eye',
            pattern: 
            ['III',
             'EPE', 
             'III'],
            key: {
                E: 'minecraft:ender_eye',
                I: INGOT_TAG('blaze_gold'),
                P: 'meetyourfight:phantoplasm'
            },
            id:  `${id_prefix}spectres_eye`
        },

        {
            output: 'meetyourfight:blossoming_mind',
            old_id: 'meetyourfight:blossoming_mind',
            pattern: 
            [' V ',
             'AIA', 
             'AIA'],
            key: {
                A: GEM_TAG('amethyst'),
                I: INGOT_TAG('terrasteel'),
                V: 'meetyourfight:violet_bloom'
            },
            id:  `${id_prefix}blossoming_mind`
        },

        {
            output: 'silentgear:hammer_blueprint',
            old_id: 'silentgear:hammer_blueprint',
            pattern: 
            ['BBB',
             'BBB', 
             ' I '],
            key: {
                B: 'silentgear:blueprint_paper',
                I: INGOT_TAG('cloggrum'),
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}hammer_blueprint`
        },

        {
            output: 'silentgear:excavator_blueprint',
            old_id: 'silentgear:excavator_blueprint',
            pattern: 
            ['B B',
             'BBB', 
             ' I '],
            key: {
                B: 'silentgear:blueprint_paper',
                I: INGOT_TAG('cloggrum'),
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}excavator_blueprint`
        },

        {
            output: 'silentgear:prospector_hammer_blueprint',
            old_id: 'silentgear:prospector_hammer_blueprint',
            pattern: 
            ['BB ',
             ' I ', 
             ' I '],
            key: {
                B: 'silentgear:blueprint_paper',
                I: '#forge:ingots/crimson_iron'
            },
            stage: NETHER,
            id:  `${id_prefix}prospector_hammer_blueprint`
        },

        {
            output: 'silentgear:lining_blueprint',
            old_id: 'silentgear:lining_blueprint',
            pattern: 
            ['BBB',
             'CCS', 
             'S  '],
            key: {
                B: 'silentgear:blueprint_paper',
                C: 'the_bumblezone:sticky_honey_residue',
                S: 'minecraft:string'
            },
            stage: BUMBLEZONE,
            id:  `${id_prefix}lining_blueprint`
        },

        {
            output: 'silentgear:katana_blueprint',
            old_id: 'silentgear:katana_blueprint',
            pattern: 
            ['BB ',
             'B  ', 
             'I  '],
            key: {
                B: 'silentgear:blueprint_paper',
                I: 'minecraft:diamond'
            },
            stage: NETHER,
            id:  `${id_prefix}katana_blueprint`
        },

        {
            output: 'silentgear:elytra_blueprint',
            old_id: 'silentgear:elytra_blueprint',
            pattern: 
            ['BVB',
             'BEB', 
             'BSB'],
            key: {
                B: 'silentgear:blueprint_paper',
                E: 'minecraft:elytra',
                V: 'cataclysm:void_core',
                S: 'quark:dragon_scale'
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}elytra_blueprint`
        },

        {
            output: Item.of('silentgear:starmetal_dust', 3),
            old_id: 'silentgear:starmetal_dust',
            pattern: 
            ['ASS',
             'BFD', 
             'DDD'],
            key: {
                A: '#forge:dusts/azure_electrum',
                S: '#forge:dusts/azure_silver',
                B: '#forge:dusts/blaze_gold',
                F: '#forge:shards/nether_star',
                D: 'phantasm:stardust'
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}starmetal_dust`
        },

        {
            output: 'silentgear:metal_alloyer',
            old_id: 'silentgear:metal_alloyer',
            pattern: 
            ['ICI',
             'ICI', 
             ' A '],
            key: {
                I: INGOT_TAG('crimson_steel'),
                A: 'kubejs:steel_casing',
                C: INGOT_TAG('cast_iron'),
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}metal_alloyer`
        },

        {
            output: 'silentgear:recrystallizer',
            old_id: 'silentgear:recrystallizer',
            pattern: 
            ['DED',
             'DGD', 
             ' A '],
            key: {
                E: '#forge:gems/emerald',
                D: '#forge:gems/carminite',
                G: 'minecraft:gold_block',
                A: 'kubejs:steel_casing',
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}recrystallizer`
        },

        {
            output: 'silentgear:refabricator',
            old_id: 'silentgear:refabricator',
            pattern: 
            ['I I',
             'DBD', 
             'WAW'],
            key: {
                I: INGOT_TAG('iron'),
                D: '#forge:gems/carminite',
                B: '#forge:gems/diamond',
                A: 'kubejs:steel_casing',
                W: '#minecraft:planks'
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}refabricator`
        },

        {
            output: 'silentgear:metal_press',
            old_id: 'silentgear:metal_press',
            pattern: 
            ['IPI',
             'ICI', 
             ' A '],
            key: {
                P: 'create:mechanical_press',
                I: INGOT_TAG('crimson_steel'),
                C: '#forge:storage_blocks/cast_iron',
                A: 'kubejs:steel_casing'
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}metal_press`
        },

        {
            output: 'silentgear:crossbow_blueprint',
            old_id: 'silentgear:crossbow_blueprint',
            pattern: 
            ['IBI',
             'BBB',
             ' I '],
            key: {
                I: INGOT_TAG('crimson_steel'),
                B: 'silentgear:blueprint_paper'
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}crossbow_blueprint`
        },

        {
            output: 'silentgear:bow_blueprint',
            old_id: 'silentgear:bow_blueprint',
            pattern: 
            [' BI',
             'B I',
             ' BI'],
            key: {
                I: INGOT_TAG('crimson_steel'),
                B: 'silentgear:blueprint_paper'
            },
            stage: TWILIGHT,
            id:  `${id_prefix}bow_blueprint`
        },

        {
            output: 'silentgear:bracelet_blueprint',
            old_id: 'silentgear:bracelet_blueprint',
            pattern: 
            ['BBB',
             'B B',
             'IBI'],
            key: {
                I: INGOT_TAG('regalium'),
                B: 'silentgear:blueprint_paper'
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}bracelet_blueprint`
        },

        {
            output: 'silentgear:tip_blueprint',
            old_id: 'silentgear:tip_blueprint',
            pattern: 
            ['BB ',
             'BI ',
             '   '],
            key: {
                I: INGOT_TAG('crimson_iron'),
                B: 'silentgear:blueprint_paper'
            },
            stage: NETHER,
            id:  `${id_prefix}tip_blueprint`
        },

        {
            output: 'silentgear:grip_blueprint',
            old_id: 'silentgear:grip_blueprint',
            pattern: 
            ['BB ',
             'IL ',
             '   '],
            key: {
                I: '#forge:gems/quartz',
                B: 'silentgear:blueprint_paper',
                L: 'minecraft:leather'
            },
            stage: NETHER,
            id:  `${id_prefix}grip_blueprint`
        },

        {
            output: 'silentgear:binding_blueprint',
            old_id: 'silentgear:binding_blueprint',
            pattern: 
            ['BI',
             'I ',
             '  '],
            key: {
                I: 'infernalexp:glowsilk',
                B: 'silentgear:blueprint_paper'
            },
            stage: NETHER,
            id:  `${id_prefix}binding_blueprint`
        },

        {
            output: 'silentgear:arrow_blueprint',
            old_id: 'silentgear:arrow_blueprint',
            pattern: 
            [' B ',
             ' S ',
             ' F '],
            key: {
                S: '#forge:rods/wooden',
                B: 'silentgear:blueprint_paper',
                F: '#forge:feathers'
            },
            stage: TWILIGHT,
            id:  `${id_prefix}arrow_blueprint`
        },

        {
            output: 'silentgear:fletching_blueprint',
            old_id: 'silentgear:fletching_blueprint',
            pattern: 
            ['BB ',
             'F  ',
             '   '],
            key: {
                B: 'silentgear:blueprint_paper',
                F: '#forge:feathers'
            },
            stage: TWILIGHT,
            id:  `${id_prefix}fletching_blueprint`
        },

        {
            output: 'silentgear:mattock_blueprint',
            old_id: 'silentgear:mattock_blueprint',
            pattern: 
            ['BB ',
             'BSB',
             ' S '],
            key: {
                B: 'silentgear:blueprint_paper',
                S: '#forge:rods/wooden'
            },
            stage: TWILIGHT,
            id:  `${id_prefix}mattock_blueprint`
        },

        {
            output: 'silentgear:ring_blueprint',
            old_id: 'silentgear:ring_blueprint',
            pattern: 
            [' BI',
             'B B',
             'IB '],
            key: {
                I: INGOT_TAG('froststeel'),
                B: 'silentgear:blueprint_paper'
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}ring_blueprint`
        },

        {
            output: 'silentgear:trident_blueprint',
            old_id: 'silentgear:trident_blueprint',
            pattern: 
            ['BHB',
             'BTB',
             ' B '],
            key: {
                H: MC('heart_of_the_sea'),
                T: MC('trident'),
                B: 'silentgear:blueprint_paper'
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}trident_blueprint`
        },

        {
            output: 'silentgear:shield_blueprint',
            old_id: 'silentgear:shield_blueprint',
            pattern: 
            ['B B',
             'III',
             ' B '],
            key: {
                I: INGOT_TAG('crimson_iron'),
                B: 'silentgear:blueprint_paper'
            },
            stage: NETHER,
            id:  `${id_prefix}shield_blueprint`
        },

        {
            output: 'silentgear:starlight_charger',
            old_id: 'silentgear:starlight_charger',
            pattern: 
            ['LGL',
             'BGB',
             'BSB'],
            key: {
                L: BO('livingrock'),
                B: 'minecraft:polished_blackstone',
                G: FORGE_TAG('glass'),
                S: STORAGE_BLOCK_TAG('blaze_gold')
            },
            stage: TWILIGHT,
            id:  `${id_prefix}starlight_charger`
        },

        {
            output: 'silentgear:material_grader',
            old_id: 'silentgear:material_grader',
            pattern: 
            ['LIL',
             'IUI',
             'BAB'],
            key: {
                L: BO('livingrock'),
                U: 'silentgear:advanced_upgrade_base',
                B: INGOT_TAG('blaze_gold'),
                A: 'kubejs:steel_casing',
                I: INGOT_TAG('iron')
            },
            stage: TWILIGHT,
            id:  `${id_prefix}material_grader`
        },

        {
            output: 'silentgear:salvager',
            old_id: 'silentgear:salvager',
            pattern: 
            [' P ',
             'LBL',
             'LAL'],
            key: {
                L: BO('livingrock'),
                P: MC('piston'),
                B: STORAGE_BLOCK_TAG('crimson_iron'),
                A: 'kubejs:steel_casing',
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}salvager`
        },

        // CREATE

        {
            output: '8x create:shaft',
            old_id: 'create:crafting/kinetics/shaft',
            pattern: 
            [' A ',
             ' I ',
             ' A '],
            key: {
                A: INGOT_TAG('andesite_alloy'),
                I: INGOT_TAG('iron')
            },
            id:  `${id_prefix}shaft`
        },

        {
            output: 'create_mechanical_extruder:mechanical_extruder',
            old_id: 'create_mechanical_extruder:mechanical_extruder',
            pattern: 
            [' R ',
             'GCG', 
             'SMS'],
            key: {
                R: CR('shaft'),
                G: '#forge:glass',
                C: CR('andesite_casing'),
                S: PLATE_TAG('cast_iron'),
                M: CR('precision_mechanism')
            },
            id:  `${id_prefix}mechanical_extruder`
        },

        {
            output: CR('basin'),
            old_id: CR('crafting/kinetics/basin'),
            pattern: 
            ['   ',
             'S S', 
             'SSS'],
            key: {
                S: INGOT_TAG('cast_iron')
            },
            id:  `${id_prefix}basin`
        },

        {
            output: CR('empty_blaze_burner'),
            old_id: CR('crafting/kinetics/empty_blaze_burner'),
            pattern: 
            [' S ',
             'SNS', 
             ' S '],
            key: {
                S: PLATE_TAG('cast_iron'),
                N: '#forge:netherrack'
            },
            id:  `${id_prefix}empty_blaze_burner`
        },

        {
            output: '4x ' + CR('chute'),
            old_id: CR('crafting/kinetics/chute'),
            pattern: 
            [' S ',
             ' I ', 
             ' S '],
            key: {
                S: PLATE_TAG('cast_iron'),
                I: INGOT_TAG('cast_iron')
            },
            id:  `${id_prefix}chute`
        },

        {
            output: '4x ' + CR('metal_bracket'),
            old_id: CR('crafting/kinetics/metal_bracket'),
            pattern: 
            ['   ',
             'NNN', 
             'IAI'],
            key: {
                N: NUGGET_TAG('iron'),
                I: INGOT_TAG('cast_iron'),
                A: INGOT_TAG('andesite_alloy')
            },
            id:  `${id_prefix}metal_bracket`
        },

        {
            output: '8x ' + CR('metal_girder'),
            old_id: CR('crafting/kinetics/metal_girder'),
            pattern: 
            ['   ',
             'PPP', 
             'AAA'],
            key: {
                P: PLATE_TAG('cast_iron'),
                A: INGOT_TAG('andesite_alloy')
            },
            id:  `${id_prefix}metal_girder`
        },

        {
            output: CR('steam_engine'),
            old_id: CR('crafting/kinetics/steam_engine'),
            pattern: 
            [' P ',
             ' A ', 
             'IBI'],
            key: {
                P: PLATE_TAG('gold'),
                I: 'architects_palette:nether_brass_ingot',
                B: STORAGE_BLOCK_TAG('copper'),
                A: INGOT_TAG('andesite_alloy')
            },
            id:  `${id_prefix}steam_engine`
        },

        {
            output: CR('steam_whistle'),
            old_id: CR('crafting/kinetics/steam_whistle'),
            pattern: 
            [' P ',
             'ICI', 
             '   '],
            key: {
                P: PLATE_TAG('gold'),
                I: 'architects_palette:nether_brass_ingot',
                C: INGOT_TAG('copper')
            },
            id:  `${id_prefix}steam_whistle`
        },

        {
            output: '2x ' + CR('fluid_tank'),
            old_id: CR('crafting/kinetics/fluid_tank'),
            pattern:
            ['PRP',
             'RBR', 
             'PRP'],
            key: {
                P: PLATE_TAG('copper'),
                B: FORGE_TAG('barrels'),
                R: TH('cured_rubber')
            },
            id:  `${id_prefix}fluid_tank`
        },

        {
            output: '5x ' + CR('fluid_pipe'),
            old_id: CR('crafting/kinetics/fluid_pipe'),
            pattern: 
            ['R R',
             'PIP', 
             'R R'],
            key: {
                P: PLATE_TAG('copper'),
                I: INGOT_TAG('copper'),
                R: TH('cured_rubber')
            },
            id:  `${id_prefix}fluid_pipe`
        },

        {
            output: 'create_enchantment_industry:printer',
            old_id: 'create_enchantment_industry:crafting/printer',
            pattern: 
            ['ICI',
             'IKI', 
             ' P '],
            key: {
                K: MC('dried_kelp'),
                C: CR('copper_casing'),
                I: 'architects_palette:nether_brass_ingot',
                P: PLATE_TAG('netherite'),
            },
            id:  `${id_prefix}printer`
        },

        // THERMAL

        {
            output: TH('device_tree_extractor'),
            old_id: TH('device_tree_extractor'),
            pattern:
            ['WPW',
             'GCG', 
             'WSW'],
            key: {
                W: MC_TAG('planks'),
                C: CR('precision_mechanism'),
                G: FORGE_TAG('glass'),
                P: MC('bucket'),
                S: TH('redstone_servo')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}device_tree_extractor`
        },

        {
            output: TH('device_fisher'),
            old_id: TH('device_fisher'),
            pattern:
            ['WPW',
             'GCG', 
             'WSW'],
            key: {
                W: MC_TAG('planks'),
                C: CR('precision_mechanism'),
                G: FORGE_TAG('glass'),
                P: 'aquaculture:diamond_fishing_rod',
                S: TH('redstone_servo')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}device_fisher`
        },

        {
            output: TH('device_composter'),
            old_id: TH('device_composter'),
            pattern:
            ['WPW',
             'GCG', 
             'WSW'],
            key: {
                W: MC_TAG('planks'),
                C: CR('precision_mechanism'),
                G: FORGE_TAG('glass'),
                P: MC('composter'),
                S: TH('redstone_servo')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}device_composter`
        },

        {
            output: TH('device_water_gen'),
            old_id: TH('device_water_gen'),
            pattern:
            ['IPI',
             'GCG', 
             'ISI'],
            key: {
                I: INGOT_TAG('copper'),
                C: CR('precision_mechanism'),
                G: FORGE_TAG('glass'),
                P: MC('bucket'),
                S: TH('redstone_servo')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}device_water_gen`
        },

        {
            output: TH('device_rock_gen'),
            old_id: TH('device_rock_gen'),
            pattern:
            ['IPI',
             'GCG', 
             'ISI'],
            key: {
                I: INGOT_TAG('invar'),
                C: CR('precision_mechanism'),
                G: FORGE_TAG('glass'),
                P: GEAR_TAG('constantan'),
                S: TH('redstone_servo')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}device_rock_gen`
        },

        {
            output: TH('device_collector'),
            old_id: TH('device_collector'),
            pattern:
            ['IPI',
             'GCG', 
             'ISI'],
            key: {
                I: INGOT_TAG('tin'),
                C: CR('precision_mechanism'),
                G: FORGE_TAG('glass'),
                P: MC('ender_pearl'),
                S: TH('redstone_servo')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}device_collector`
        },

        {
            output: TH('device_nullifier'),
            old_id: TH('device_nullifier'),
            pattern:
            ['IPI',
             'GCG',
             'ISI'],
            key: {
                I: INGOT_TAG('tin'),
                C: CR('precision_mechanism'),
                G: FORGE_TAG('glass'),
                P: MC('lava_bucket'),
                S: TH('redstone_servo')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}device_nullifier`
        },

        {
            output: TH('device_potion_diffuser'),
            old_id: TH('device_potion_diffuser'),
            pattern:
            ['IPI',
             'GCG',
             'ISI'],
            key: {
                I: INGOT_TAG('silver'),
                C: CR('precision_mechanism'),
                G: FORGE_TAG('glass'),
                P: GEAR_TAG('emerald'),
                S: TH('redstone_servo')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}device_potion_diffuser`
        },

        {
            output: TH('tinker_bench'),
            old_id: TH('tinker_bench'),
            pattern:
            ['IMI',
             'GCG',
             'WRW'],
            key: {
                I: INGOT_TAG('steel'),
                M: KJ('infused_mechanism'),
                C: MC('crafting_table'),
                G: FORGE_TAG('glass'),
                W: MC_TAG('planks'),
                R: TH('rf_coil')
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}tinker_bench`
        },

        // BIOMANCY

        {
            output: BI('primordial_core'),
            old_id: BI('primordial_core'),
            pattern:
            ['MPM',
             'MBM',
             'MPM'],
            key: {
                P: MC('ender_pearl'),
                M: '#' + BI('raw_meats'),
                B: KJ('bio_mechanism')
            },
            stage: NETHER,
            id:  `${id_prefix}primordial_core`
        },

        {
            output: BI('bio_forge'),
            old_id: BI('bio_forge'),
            pattern:
            ['FSF',
             'MEM',
             'MBM'],
            key: {
                F: BI('mob_claw'),
                M: '#' + BI('raw_meats'),
                S: FORGE_TAG('slimeballs'),
                E: BI('living_flesh'),
                B: KJ('bio_mechanism')
            },
            stage: NETHER,
            id:  `${id_prefix}bio_forge`
        },

        {
            output: BI('decomposer'),
            old_id: BI('decomposer'),
            pattern:
            ['FSF',
             'MEM',
             'MBM'],
            key: {
                F: BI('mob_fang'),
                M: '#' + BI('raw_meats'),
                S: BI('mob_gland'),
                E: BI('living_flesh'),
                B: KJ('bio_mechanism')
            },
            stage: NETHER,
            id:  `${id_prefix}decomposer`
        },

        // AD ASTRA

        {
            output: AA('oxygen_loader'),
            old_id: AA('recipes/oxygen_loader'),
            pattern:
            ['PFP',
             'TCT',
             'PMP'],
            key: {
                P: PLATE_TAG('steel'),
                F: AA('engine_fan'),
                T: AA('oxygen_tank'),
                C: KJ('azure_casing'),
                M: KJ('overclocked_mechanism')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}oxygen_loader`
        },

        {
            output: AA('solar_panel'),
            old_id: AA('recipes/solar_panel'),
            pattern:
            ['GGG',
             'PAP',
             'DMD'],
            key: {
                G: MC('blue_stained_glass'),
                P: PLATE_TAG('steel'),
                D: PLATE_TAG('desh'),
                M: KJ('redstone_mechanism'),
                A: KJ('azure_casing')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}solar_panel`
        },

        {
            output: AA('energizer'),
            old_id: AA('recipes/energizer'),
            pattern:
            ['PMP',
             'PDP',
             'BPB'],
            key: {
                B: STORAGE_BLOCK_TAG('ostrum'),
                P: PLATE_TAG('ostrum'),
                D: STORAGE_BLOCK_TAG('diamond'),
                M: KJ('overclocked_mechanism')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}energizer`
        },

        {
            output: AA('cryo_freezer'),
            old_id: AA('recipes/cryo_freezer'),
            pattern:
            ['PMP',
             'ISI',
             'BAB'],
            key: {
                B: STORAGE_BLOCK_TAG('ostrum'),
                P: PLATE_TAG('ostrum'),
                I: INGOT_TAG('ostrum'),
                M: KJ('overclocked_mechanism'),
                S: KJ('plasteel_mechanism'),
                A: KJ('azure_casing')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}cryo_freezer`
        },

        {
            output: AA('engine_frame'),
            old_id: AA('recipes/engine_frame'),
            pattern:
            ['III',
             'BSB',
             'III'],
            key: {
                S: 'mutantmore:mutant_shulker_shell',
                I: INGOT_TAG('stainless_steel'),
                B: STORAGE_BLOCK_TAG('steel')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}engine_frame`
        },

        {
            output: 'deeperdarker:reinforced_echo_shard',
            old_id: 'deeperdarker:reinforced_echo_shard',
            pattern:
            ['SES',
             'ECE',
             'SES'],
            key: {
                S: 'spirit:soul_crystal_shard',
                E: MC('echo_shard'),
                C: 'deeperdarker:warden_carapace'
            },
            stage: EXPERT_MODE,
            id:  `${id_prefix}reinforced_echo_shard`
        },

        {
            output: 'productivebees:gene_indexer',
            old_id: 'productivebees:gene_indexer',
            pattern:
            ['CJC',
             'CTC',
             'CCC'],
            key: {
                J: 'the_bumblezone:royal_jelly_bottle',
                T: FORGE_TAG('workbenches'),
                C: 'the_bumblezone:honey_crystal_shards'
            },
            stage: BUMBLEZONE,
            id:  `${id_prefix}gene_indexer`
        },

        {
            output: 'productivebees:upgrade_base',
            old_id: 'productivebees:upgrades/base',
            pattern:
            ['SES',
             'HTH',
             'SES'],
            key: {
                S: 'the_bumblezone:bee_stinger',
                T: 'productivebees:honey_treat',
                H: 'the_bumblezone:honey_crystal_shards',
                E: GEM_TAG('emerald')
            },
            stage: BUMBLEZONE,
            id:  `${id_prefix}upgrade_base`
        },

        // BOTANIA
        {
            output: BO('flight_tiara'),
            old_id: BO('flighttiara_0'),
            pattern:
            ['IGI',
             'IEI',
             'FAF'],
            key: {
                I: INGOT_TAG('elementium'),
                G: INGOT_TAG('gaia'),
                E: MC('elytra'),
                F: MC('feather'),
                A: BO('ender_air_bottle')
            },
            id:  `${id_prefix}flight_tiara`
        },
        {
            output: BO('gaia_pylon'),
            old_id: 'mythicbotany:gaia_pylon',
            pattern:
            [' D ',
             'IPI',
             ' D '],
            key: {
                I: INGOT_TAG('elementium'),
                P: BO('natura_pylon'),
                D: BO('pixie_dust')
            },
            id:  `${id_prefix}gaia_pylon`
        },
        {
            output: BO('alfheim_portal'),
            old_id: BO('alfheim_portal'),
            pattern:
            ['WTW',
             'MTM',
             'WTW'],
            key: {
                W: '#' + BO('livingwood_logs'),
                T: NUGGET_TAG('terrasteel'),
                M: HX('moon_dust')
            },
            id:  `${id_prefix}alfheim_portal`
        },
        {
            output: BO('unholy_cloak'),
            old_id: BO('unholy_cloak'),
            pattern:
            ['WWW',
             'BWB',
             'BGB'],
            key: {
                W: MC('black_wool'),
                B: FORGE_TAG('bottles/blood'),
                G: BO('life_essence')
            },
            id:  `${id_prefix}unholy_cloak`
        },
        {
            output: BO('holy_cloak'),
            old_id: BO('holy_cloak'),
            pattern:
            ['WWW',
             'BWB',
             'BGB'],
            key: {
                W: MC('white_wool'),
                B: 'irons_spellbooks:divine_pearl',
                G: BO('life_essence')
            },
            id:  `${id_prefix}holy_cloak`
        },
        {
            output: 'mythicbotany:mana_infuser',
            old_id: 'mythicbotany:mana_infuser',
            pattern:
            ['IGI',
             'SDW',
             'UAT'],
            key: {
                I: INGOT_TAG('elementium'),
                G: 'botanicadds:gaia_plate',
                D: BO('glimmering_dreamwood'),
                S: BO('rune_spring'),
                W: BO('rune_winter'),
                U: BO('rune_summer'),
                A: 'mythicbotany:asgard_rune',
                T: BO('rune_autumn')
            },
            stage: MASTER_MODE,
            id:  `${id_prefix}mana_infuser`
        },
        
        // IRONS SPELLBOOKS
        {
            output: 'irons_spellbooks:mana_ring',
            old_id: 'irons_spellbooks:mana_ring',
            pattern:
            ['DI ',
             'I I',
             ' I '],
            key: {
                D: BO('mana_diamond'),
                I: 'irons_spellbooks:arcane_ingot'
            },
            id:  `${id_prefix}mana_ring`
        },

        {
            output: 'explorerscompass:explorerscompass',
            pattern:
            ['WIW',
             'ICI',
             'WIW'],
            key: {
                I: INGOT_TAG('cast_iron'),
                C: MC('compass'),
                W: MC('cobweb')
            },
            id:  `${id_prefix}explorerscompass`
        },


        // NEW RECIPES
        {
            output: 'kubejs:masticator_bait',
            pattern: 
            ['VUV',
             'UBU', 
             'VUV'],
            key: {
                B: 'alexsmobs:warped_muscle',
                V: 'deeperdarker:sculk_bone',
                U: 'biomancy:flesh_bits'
            },
            stage: UNDERGARDEN,
            id:  `${id_prefix}masticator_bait`
        },

        {
            output: 'minecraft:soul_sand',
            pattern: 
            [' B ',
             'BSB', 
             ' B '],
            key: {
                B: 'quark:soul_bead',
                S: '#forge:sand'
            },
            id:  `${id_prefix}soul_sand_from_bead`
        },

        {
            output: 'summoningrituals:altar',
            pattern: 
            ['BIF',
             'ITI', 
             'EIS'],
            key: {
                I: INGOT_TAG('gold'),
                T: 'minecraft:enchanting_table',
                B: "#forge:bones",
                F: "minecraft:rotten_flesh",
                S: "minecraft:slime_ball",
                E: "minecraft:spider_eye",
            },
            id:  `${id_prefix}summoning_altar`
        },

        {
            output: 'irons_spellbooks:blood_rune',
            pattern: 
            ['BBB',
             'BRB', 
             'BBB'],
            key: {
                B: FORGE_TAG('bottles/blood'),
                R: 'irons_spellbooks:blank_rune'
            },
            id:  `${id_prefix}blood_rune`,
            old_id: 'irons_spellbooks:blood_rune'
        },
        {
            output: MC('bell'),
            pattern: 
            [' A ',
             'III', 
             'III'],
            key: {
                I: INGOT_TAG('gold'),
                A: INGOT_TAG('andesite_alloy')
            },
            id:  `${id_prefix}bell`
        }
    ]

    let keyRecipe = function(name) {

        let key = 'kubejs:' + name
        let inert_key = 'kubejs:inert_' + name

        event.shaped(key,
        [' I ',
         'IKI',
         ' I '],
        {
            I: 'architects_palette:entwine_rod',
            K: inert_key
        }).id(`${id_prefix}` + name)

        event.shapeless(inert_key, key).id(`${id_prefix}inert_` + name)
    }

    keyRecipe('nether_portal_key')
    keyRecipe('everdawn_portal_key')
    keyRecipe('everbright_portal_key')

    function MachineRecipe(name, top, side, gear) {
        event.remove({id: name})
        let id = name.split(':')
        event.shaped(
            name,
            [' T ', 'SCS', 'GRG'],
            {
                T: top,
                S: side,
                C: KJ('steel_casing'),
                G: gear,
                R: KJ('redstone_mechanism')
            }
            )
            .stage(EXPERT_MODE)
            .id(`${id_prefix}` + id[1])
    }

    MachineRecipe(TH('machine_pulverizer'), MC('piston'), MC('flint'), GEAR_TAG('copper'))
    MachineRecipe(TH('machine_smelter'), MC('blast_furnace'), MC('netherite_scrap'), GEAR_TAG('bronze'))
    MachineRecipe(TH('machine_insolator'), MC('dirt'), FORGE_TAG('glass'), GEAR_TAG('lumium'))
    MachineRecipe(TH('machine_centrifuge'), CR('whisk'), INGOT_TAG('tin'), GEAR_TAG('constantan'))
    MachineRecipe(TH('machine_press'), STORAGE_BLOCK_TAG('cast_iron'), INGOT_TAG('bronze'), GEAR_TAG('constantan'))
    MachineRecipe(TH('machine_crucible'), FORGE_TAG('glass'), MC('nether_bricks'), GEAR_TAG('invar'))
    MachineRecipe(TH('machine_chiller'), FORGE_TAG('glass'), TH('blizz_rod'), GEAR_TAG('invar'))
    MachineRecipe(TH('machine_refinery'), FORGE_TAG('glass'), INGOT_TAG('copper'), GEAR_TAG('invar'))
    MachineRecipe(TH('machine_pyrolyzer'), KJ('infused_mechanism'), INGOT_TAG('crimson_steel'), GEAR_TAG('constantan'))
    MachineRecipe(TH('machine_crystallizer'), TH('lumium_glass'), PLATE_TAG('signalum'), GEAR_TAG('constantan'))

    function OrbRecipe(name) {
        event.remove({id: 'irons_spellbooks:' + name + '_upgrade_orb'})
        event.shaped(
            'irons_spellbooks:' + name + '_upgrade_orb',
            ['RSR', 'ROR', 'RCR'],
            {
                R: 'irons_spellbooks:' + name + '_rune',
                O: 'irons_spellbooks:upgrade_orb',
                S: 'irons_spellbooks:arcane_salvage',
                C: 'irons_spellbooks:cinder_essence'
            }
            ).id(`${id_prefix}` + name + '_orb')
    }

    OrbRecipe('fire')
    OrbRecipe('ice')
    OrbRecipe('lightning')
    OrbRecipe('holy')
    OrbRecipe('ender')
    OrbRecipe('blood')
    OrbRecipe('evocation')
    OrbRecipe('poison')
    OrbRecipe('cooldown')
    OrbRecipe('protection')

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }
        if (recipe.stage) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).stage(recipe.stage).id(recipe.id)
        }
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})

