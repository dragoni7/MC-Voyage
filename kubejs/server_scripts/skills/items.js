// fix for relog
PlayerEvents.loggedIn((event) => {
    PlayerSkills.skills.forEach(skill => {
        if (event.entity.data.skills.can(skill.name)) {

            console.info(`Reapplying ${skill.name}...`)

            // reapply skill
            event.server.scheduleInTicks(200, (callback) => {
                event.server.runCommand(
                  `skills set ${event.player.name.string} ` + skill.name + ' true'
                )
            })
        }
    })
})

ItemSkillEvents.register(event => {

    let allowed_items = [
        'thermal:cured_rubber',
        'thermal:rubber',

        // silentgear materials
        // restricting any of these breaks gear crafting..
        'the_bumblezone:honey_crystal_shards',
        'the_bumblezone:bee_stinger',
        'the_bumblezone:sugar_infused_cobblestone',
        'twilightforest:naga_scale',
        'twilightforest:raven_feather',
        'twilightforest:ironwood_ingot',
        'twilightforest:fiery_ingot',
        'twilightforest:steeleaf_ingot',
        'twilightforest:carminite',
        'twilightforest:knightmetal_ingot',
        'twilightforest:arctic_fur',
        'twilightforest:alpha_yeti_fur',
        'twilightforest:towerwood', 
        'twilightforest:cracked_towerwood', 
        'twilightforest:mossy_towerwood', 
        'twilightforest:infested_towerwood', 
        'twilightforest:encased_towerwood', 
        'twilightforest:beanstalk_leaves', 
        'twilightforest:thorn_leaves', 
        'twilightforest:twilight_oak_leaves', 
        'twilightforest:canopy_leaves',
        'twilightforest:mangrove_planks', 
        'twilightforest:dark_planks', 
        'twilightforest:time_planks', 
        'twilightforest:transformation_planks', 
        'twilightforest:mining_planks', 
        'twilightforest:sorting_planks', 
        'twilightforest:mangrove_leaves', 
        'twilightforest:dark_leaves', 
        'twilightforest:time_leaves', 
        'twilightforest:transformation_leaves', 
        'twilightforest:mining_leaves', 
        'twilightforest:sorting_leaves', 
        'twilightforest:rainbow_oak_leaves', 
        'twilightforest:twilight_oak_planks', 
        'twilightforest:canopy_planks',
        'undergarden:cloggrum_ingot',
        'undergarden:froststeel_ingot',
        'undergarden:utherium_crystal',
        'undergarden:regalium_crystal',
        'undergarden:forgotten_ingot',
        'undergarden:twistytwig',
        'undergarden:ditchbulb_paste',
        'undergarden:brute_tusk',
        'undergarden:mogmoss',
        'undergarden:masticator_scales',
        'undergarden:depthrock',
        'undergarden:shiverstone',
        'undergarden:tremblecrust',
        'undergarden:goo_block',
        'undergarden:smogstem_leaves',
        'undergarden:smogstem_planks',
        'undergarden:wigglewood_leaves',
        'undergarden:wigglewood_planks',
        'undergarden:grongle_leaves',
        'undergarden:grongle_planks',                 
        'blue_skies:pyrope_gem',
        'blue_skies:aquite',
        'blue_skies:diopside_gem',
        'blue_skies:charoite',
        'blue_skies:horizonite_ingot',
        'blue_skies:venom_sac',
        'blue_skies:turquoise_cobblestone',
        'blue_skies:bluebright_leaves',
        'blue_skies:bluebright_planks',
        'blue_skies:starlit_leaves',
        'blue_skies:starlit_planks',
        'blue_skies:frostbright_leaves',
        'blue_skies:frostbright_planks',
        'blue_skies:midnight_sandstone',
        'blue_skies:chiseled_midnight_sandstone',
        'blue_skies:cut_midnight_sandstone',
        'blue_skies:lunar_cobblestone',
        'blue_skies:lunar_leaves',
        'blue_skies:lunar_planks',
        'blue_skies:dusk_leaves',
        'blue_skies:dusk_planks',
        'blue_skies:maple_leaves',
        'blue_skies:maple_planks',
        'blue_skies:crystallized_leaves',
        'blue_skies:crystal_sandstone',
        'blue_skies:chiseled_crystal_sandstone',
        'blue_skies:cut_crystal_sandstone',
        'blue_skies:smooth_crystal_sandstone',
        'blue_skies:cherry_leaves',
        'blue_skies:cherry_planks',
        'blue_skies:crescent_fruit_leaves',
        'cataclysm:ignitium_ingot',
        'cataclysm:witherite_ingot',
        'cataclysm:void_core',
        'cataclysm:monstrous_horn',
        'cataclysm:chorus_planks',
        'phantasm:stellium_ingot',
        'ad_astra:steel_ingot',
        'ad_astra:desh_ingot',
        'ad_astra:ostrum_ingot',
        'ad_astra:calorite_ingot',
        'ad_astra:aeronos_planks',
        'ad_astra:strophar_planks',
        'ad_astra:venus_sandstone',
        'ad_astra:venus_sandstone_bricks',
        'ad_astra:cracked_venus_sandstone_bricks',
        'ad_astra:glacian_leaves',
        'ad_astra:glacian_planks',
        'ad_astra:glacian_fur',
        'enlightened_end:bismuth_ingot',
        'ae2:certus_quartz_crystal',
        'ae2:charged_certus_quartz_crystal',
        'ae2:fluix_crystal',
        'biomancy:living_flesh',
        'biomancy:unstable_compound',
        'biomancy:corrosive_additive',
        'biomancy:creator_mix',
        'thermal:signalum_ingot',
        'thermal:lumium_ingot',
        'thermal:enderium_ingot',
        'thermal:tin_ingot',
        'thermal:lead_ingot',
        'thermal:silver_ingot',
        'thermal:nickel_ingot',
        'thermal:bronze_ingot',
        'thermal:electrum_ingot',
        'thermal:invar_ingot',
        'botanicadds:gaiasteel_ingot',
        'mythicbotany:alfsteel_ingot',
        'phantasm:pream_planks',
        'phantasm:ebony_planks',
        'enlightened_end:congealed_planks',
        'enlightened_end:ebony_planks'
    ]

    let bumblezone_items = [
        'silentgear:lining_blueprint',
    ]

        // some items are blacklisted
        Ingredient.of('@productivebees').itemIds.forEach(item => {
            if (!blacklist.includes(item) && !allowed_items.includes(item)) {
                bumblezone_items.push(item)
            }
        })

        Ingredient.of('@the_bumblezone').itemIds.forEach(item => {
            if (!blacklist.includes(item) && !allowed_items.includes(item)) {
                bumblezone_items.push(item)
            }
        })

    let nether_items = [
        'silentgear:shield_blueprint',
        'silentgear:tip_blueprint',
        'silentgear:grip_blueprint',
        'silentgear:binding_blueprint',
        'irons_spellbooks:gold_spell_book',
        'irons_spellbooks:diamond_spell_book'
    ]

        // some items are blacklisted
        Ingredient.of('@biomancy').itemIds.forEach(item => {
            if (!blacklist.includes(item) && !allowed_items.includes(item)) {
                nether_items.push(item)
            }
        })

        Ingredient.of('@cataclysm').itemIds.forEach(item => {
            if (!blacklist.includes(item) && !allowed_items.includes(item)) {
                nether_items.push(item)
            }
        })

    let twilight_items = [
        'silentgear:bow_blueprint',
        'silentgear:arrow_blueprint',
        'silentgear:fletching_blueprint',
        'silentgear:mattock_blueprint',
        'silentgear:starlight_charger',
        'silentgear:material_grader',
        'irons_spellbooks:netherite_spell_book'
    ]

    Ingredient.of('@twilightforest').itemIds.forEach(item => {
        if (!blacklist.includes(item) && !allowed_items.includes(item)) {
            twilight_items.push(item)
        }
    })

    let undergarden_items = [
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
        'hexerei:willow_broom',
        'hexerei:witch_hazel_broom',
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
        'hexerei:broom_brush',
        'hexerei:broom_thruster_brush',
        'hexerei:moon_dust_brush',
        'hexerei:wet_herb_enhanced_broom_brush',
        'hexerei:herb_enhanced_broom_brush',
        'hexerei:mahogany_broom_stand',
        'hexerei:willow_broom_stand',
        'hexerei:witch_hazel_broom_stand'
    ]

    Ingredient.of('@undergarden').itemIds.forEach(item => {
        if (!blacklist.includes(item) && !allowed_items.includes(item)) {
            undergarden_items.push(item)
        }
    })

    let expert_items = [
        'ad_astra:steel_plate',
        'ad_astra:steel_nugget',
        'ad_astra:steel_block',
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
        'createdieselgenerators:*',
        'thermaloot:variable_capacitor',
        'mutantmonsters:*',
        'mutantmore:*',
        'kubejs:steel_casing',
        'kubejs:masticator_bait'
    ]

    // some items are blacklisted
    Ingredient.of('@thermal').itemIds.forEach(item => {
        if (!blacklist.includes(item) && !allowed_items.includes(item)) {
            expert_items.push(item)
        }
    })

    Ingredient.of('@blue_skies').itemIds.forEach(item => {
        if (!blacklist.includes(item) && !allowed_items.includes(item)) {
            expert_items.push(item)
        }
    })

    Ingredient.of('@botanicadds').itemIds.forEach(item => {
        if (!blacklist.includes(item) && !allowed_items.includes(item)) {
            expert_items.push(item)
        }
    })

    let master_items = [
        'ad_astra_giselle_addon:*',
        'createteleporters:*',
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
        'silentcompat:plasteel_nugget', 
        'silentcompat:plasteel_block',
        'jaopca:raw_storage_blocks.voidmetal', 
        'jaopca:create_crushed_ores.voidmetal', 
        'jaopca:dusts.voidmetal', 
        'silentcompat:raw_voidmetal', 
        'silentcompat:voidmetal_ore',
        'silentcompat:voidmetal_nugget',
        'jaopca:raw_storage_blocks.arcmetal', 
        'jaopca:create_crushed_ores.arcmetal', 
        'jaopca:dusts.arcmetal', 
        'silentcompat:raw_arcmetal', 
        'silentcompat:arcmetal_ore',
        'silentcompat:arcmetal_nugget',
        'jaopca:raw_storage_blocks.solarmetal', 
        'jaopca:create_crushed_ores.solarmetal', 
        'jaopca:dusts.solarmetal', 
        'silentcompat:raw_solarmetal', 
        'silentcompat:solarmetal_ore',
        'silentcompat:solarmetal_nugget',
        'silentgear:azure_electrum_nugget', 
        'silentgear:azure_electrum_dust', 
        'silentgear:azure_electrum_block',
        'silentgear:tyrian_steel_nugget', 
        'silentgear:tyrian_steel_dust', 
        'silentgear:tyrian_steel_block',
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
        'kubejs:incomplete_overclocked_mechanism'
    ]
    
    let master_mods = [
        'ae2',
        'mythicbotany',
        'thermalendergy',
        'enlightened_end',
        'phantasm'
    ]

    master_mods.forEach(mod => {
        Ingredient.of('@' + mod).itemIds.forEach(item => {
            if (!blacklist.includes(item) && !allowed_items.includes(item)) {
                master_items.push(item)
            }
        })
    })

    // don't include ad astra steel items and blacklisted items
    Ingredient.of('@ad_astra').itemIds.forEach(item => {
        if (!blacklist.includes(item) && !expert_items.includes(item) && !allowed_items.includes(item)) {
            master_items.push(item)
        }
    })

    blacklist.forEach(item => {
        event.restrict(item, restrict => {
            restrict.everything()
          })
    })

    bumblezone_items.forEach(item => {
        event.restrict(item, restrict => {
            restrict.everything().holdable()
              .if(player => player.cannot('skills:bumblezone_access'))
          })
    })

    nether_items.forEach(item => {
        event.restrict(item, restrict => {
            restrict.everything().holdable()
              .if(player => player.cannot('skills:nether_access'))
          })
    })
    
    twilight_items.forEach(item => {
        event.restrict(item, restrict => {
            restrict.everything().holdable()
              .if(player => player.cannot('skills:twilight_access'))
          })
    })

    undergarden_items.forEach(item => {
        event.restrict(item, restrict => {
            restrict.everything().holdable()
              .if(player => player.cannot('skills:undergarden_access'))
          })
    })

    expert_items.forEach(item => {
        event.restrict(item, restrict => {
            restrict.everything().holdable()
              .if(player => player.cannot('skills:expert_mode'))
          })
    })

    master_items.forEach(item => {
        event.restrict(item, restrict => {
            restrict.everything().holdable()
              .if(player => player.cannot('skills:master_mode'))
          })
    })
})