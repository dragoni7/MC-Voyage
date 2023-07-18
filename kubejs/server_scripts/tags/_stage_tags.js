// priority: 0 

ServerEvents.tags('item', event => {

    let allowed_items = [
        'thermal:cured_rubber',
        'thermal:cured_rubber_block',
        'thermal:rubber',
        'thermal:rubber_block',
        'ad_astra:iron_rod'
    ]

    event.add('kubejs:expert_mode', [
        'cataclysm:witherite_ingot',
        'cataclysm:mechanical_fusion_anvil',
        'cataclysm:witherite_block',
        'minecraft:nether_star',
        'silentgear:nether_star_fragment',
        'ad_astra:steel_plate',
        'ad_astra:steel_nugget',
        'ad_astra:steel_block',
        'ad_astra:steel_ingot',
        'ad_astra:steel_plating',
        'ad_astra:steel_pillar',
        'ad_astra:glowing_steel_pillar',
        'ad_astra:steel_plating',
        'ad_astra:steel_plating_stairs',
        'ad_astra:steel_plating_slab',
        'ad_astra:steel_plating_pressure_plate',
        'ad_astra:steel_sliding_door',
        'ad_astra:steel_door',
        'ad_astra:steel_trapdoor',
        'kubejs:redstone_mechanism',
        'kubejs:incomplete_redstone_mechanism',
        'thermaloot:variable_capacitor',
        'kubejs:steel_casing',
        'kubejs:masticator_bait',
        'silentcompat:bunny_steel_ingot',
        'silentcompat:bunny_steel_nugget',
        'silentcompat:bunny_steel_block'
    ])

    let expert_mods = [
        'thermal',
        'createdieselgenerators',
        'blue_skies',
        'botanicadds',
        'mutantmore',
        'mutantmonsters'
    ]

    expert_mods.forEach((mod) => {
        Ingredient.of('@' + mod).itemIds.forEach(item => {
            if (!allowed_items.includes(item)) {
                event.add('kubejs:expert_mode', item)
            }
        })
    })

    event.add('kubejs:master_mode', [
        'cataclysm:void_core',
        'cataclysm:abyssal_sacrifice',
        'cataclysm:altar_of_abyss',
        'kubejs:stainless_steel_ingot',
        'kubejs:stainless_mechanism',
        'kubejs:stainless_casing',
        'kubejs:azure_casing',
        'kubejs:incomplete_stainless_mechanism',
        'kubejs:plasteel_mechanism',
        'kubejs:incomplete_plasteel_mechanism',
        'kubejs:pearlescent_nugget',
        'kubejs:chromium_nugget',
        'kubejs:chromium_ingot',
        'kubejs:prismasand',
        'kubejs:impossible_compound',
        'silentgear:azure_silver_ingot',
        'silentgear:azure_electrum_ingot',
        'silentgear:tyrian_steel_ingot',
        'silentgear:elytra_blueprint',
        'kubejs:stasis_larva',
        'kubejs:incomplete_steel_engine',
        'kubejs:incomplete_desh_engine',
        'kubejs:incomplete_ostrum_engine',
        'kubejs:incomplete_calorite_engine',
        'jaopca:raw_storage_blocks.plasteel', 
        'jaopca:create_crushed_ores.plasteel', 
        'jaopca:dusts.plasteel', 
        'silentcompat:raw_plasteel', 
        'silentcompat:plasteel_ore',
        'silentcompat:plasteel_ingot',
        'silentcompat:plasteel_nugget', 
        'silentcompat:plasteel_block',
        'jaopca:raw_storage_blocks.voidmetal', 
        'jaopca:create_crushed_ores.voidmetal', 
        'jaopca:dusts.voidmetal', 
        'silentcompat:raw_voidmetal',
        'silentcompat:voidmetal_ore',
        'silentcompat:voidmetal_ingot',
        'silentcompat:voidmetal_nugget',
        'jaopca:raw_storage_blocks.arcmetal', 
        'jaopca:create_crushed_ores.arcmetal', 
        'jaopca:dusts.arcmetal', 
        'silentcompat:raw_arcmetal', 
        'silentcompat:arcmetal_ore',
        'silentcompat:arcmetal_ingot',
        'silentcompat:arcmetal_nugget',
        'jaopca:raw_storage_blocks.solarmetal', 
        'jaopca:create_crushed_ores.solarmetal', 
        'jaopca:dusts.solarmetal', 
        'silentcompat:raw_solarmetal', 
        'silentcompat:solarmetal_ore',
        'silentcompat:solarmetal_ingot',
        'silentcompat:solarmetal_nugget',
        'silentcompat:capsid_alloy_ingot',
        'silentcompat:crystalline_alloy',
        'silentgear:azure_electrum_nugget', 
        'silentgear:azure_electrum_dust', 
        'silentgear:azure_electrum_block',
        'silentgear:tyrian_steel_nugget', 
        'silentgear:tyrian_steel_dust', 
        'silentgear:tyrian_steel_block',
        'majruszsdifficulty:enderium_ingot',
        'majruszsdifficulty:enderium_helmet', 
        'majruszsdifficulty:enderium_chestplate', 
        'majruszsdifficulty:enderium_leggings', 
        'majruszsdifficulty:enderium_boots', 
        'majruszsdifficulty:enderium_shard',
        'majruszsdifficulty:enderium_sword', 
        'majruszsdifficulty:enderium_pickaxe', 
        'majruszsdifficulty:enderium_axe', 
        'majruszsdifficulty:enderium_shovel', 
        'majruszsdifficulty:enderium_hoe', 
        'majruszsdifficulty:enderium_shard_locator',
        'kubejs:overclocked_mechanism',
        'kubejs:incomplete_overclocked_mechanism',
        'morbid:morbid_harvester_arm'
    ])

    let steel_items = [
        'ad_astra:steel_plate',
        'ad_astra:steel_nugget',
        'ad_astra:steel_block',
        'ad_astra:steel_ingot',
        'ad_astra:steel_plating',
        'ad_astra:steel_pillar',
        'ad_astra:glowing_steel_pillar',
        'ad_astra:steel_plating',
        'ad_astra:steel_plating_stairs',
        'ad_astra:steel_plating_slab',
        'ad_astra:steel_plating_pressure_plate',
        'ad_astra:steel_sliding_door',
        'ad_astra:steel_door',
        'ad_astra:steel_trapdoor',
    ]

    Ingredient.of('@ad_astra').itemIds.forEach(item => {
        if (!steel_items.includes(item)) {
            if (!allowed_items.includes(item)) {
                event.add('kubejs:master_mode', item)
            }
        }
    })

    let master_mods = [
        'ae2',
        'mythicbotany',
        'thermalendergy',
        'enlightened_end',
        'phantasm',
        'ad_astra_giselle_addon',
        'createteleporters',
        'hmag'
    ]

    master_mods.forEach((mod) => {
        Ingredient.of('@' + mod).itemIds.forEach(item => {
            if (!allowed_items.includes(item)) {
                event.add('kubejs:master_mode', item)
            }
        })
    })
    
    
    event.add('kubejs:bumblezone_access', [
        'silentgear:lining_blueprint'
    ])

    let bumblezone_mods = [
        'productivebees',
        'the_bumblezone'
    ]

    bumblezone_mods.forEach((mod) => {
        Ingredient.of('@' + mod).itemIds.forEach(item => {
            if (!allowed_items.includes(item)) {
                event.add('kubejs:bumblezone_access', item)
            }
        })
    })

    event.add('kubejs:nether_access', [
        'cataclysm:burning_ashes',
        'cataclysm:ignitium_ingot',
        'cataclysm:ignitium_block',
        'cataclysm:monstrous_horn',
        'silentgear:crimson_iron_ingot',
        'silentgear:shield_blueprint',
        'silentgear:tip_blueprint',
        'silentgear:grip_blueprint',
        'silentgear:binding_blueprint',
        'irons_spellbooks:gold_spell_book',
        'irons_spellbooks:diamond_spell_book',
        'hexerei:willow_broom',
        'hexerei:willow_broom_stand',
        'hexerei:wet_herb_enhanced_broom_brush',
        'hexerei:herb_enhanced_broom_brush',
        'hexerei:broom_whistle',
        'hexerei:small_satchel',
        'hexerei:medium_satchel',
        'hexerei:large_satchel',
        'hexerei:ender_satchel',
        'hexerei:replacer_satchel',
        'hexerei:broom_seat',
        'hexerei:gold_rings',
        'hexerei:broom_netherite_tip',
        'hexerei:broom_waterproof_tip',
        'hexerei:broom_keychain',
        'hexerei:wet_broom_brush',
        'hexerei:broom_brush'
    ])

    let nether_mods = [
        'biomancy'
    ]

    nether_mods.forEach((mod) => {
        Ingredient.of('@' + mod).itemIds.forEach(item => {
            if (!allowed_items.includes(item)) {
                event.add('kubejs:nether_access', item)
            }
        })
    })

    event.add('kubejs:twilight_access', [
        'silentgear:crimson_steel_ingot',
        'silentgear:bow_blueprint',
        'silentgear:arrow_blueprint',
        'silentgear:fletching_blueprint',
        'silentgear:mattock_blueprint',
        'silentgear:starlight_charger',
        'silentgear:material_grader',
        'irons_spellbooks:netherite_spell_book',
    ])

    let twilight_mods = [
        'twilightforest'
    ]

    twilight_mods.forEach((mod) => {
        Ingredient.of('@' + mod).itemIds.forEach(item => {
            if (!allowed_items.includes(item)) {
                event.add('kubejs:twilight_access', item)
            }
        })
    })

    event.add('kubejs:undergarden_access', [
        'silentgear:crossbow_blueprint',
        'silentgear:ring_blueprint',
        'silentgear:trident_blueprint',
        'silentgear:salvager',
        'silentgear:metal_alloyer',
        'silentgear:recrystallizer',
        'silentgear:refabricator',
        'silentgear:metal_press',
        'silentgear:bracelet_blueprint',
        'silentgear:hammer_blueprint',
        'silentgear:excavator_blueprint',
        'hexerei:mahogany_broom',
        'hexerei:witch_hazel_broom',
        'hexerei:broom_thruster_brush',
        'hexerei:wet_moon_dust_brush',
        'hexerei:moon_dust_brush',
        'hexerei:mahogany_broom_stand',
        'hexerei:witch_hazel_broom_stand'
    ])

    let undergarden_mods = [
        'undergarden'
    ]

    undergarden_mods.forEach((mod) => {
        Ingredient.of('@' + mod).itemIds.forEach(item => {
            if (!allowed_items.includes(item)) {
                event.add('kubejs:undergarden_access', item)
            }
        })
    })
})