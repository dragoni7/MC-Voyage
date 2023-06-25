ServerEvents.recipes(event => {

    // swampjaw
    event.recipes.summoningrituals
    .altar("#forge:raw_fishes")
    .mobOutput(
        SummoningOutput.mob('meetyourfight:swampjaw').count(1).data({ Health: 150, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 150 }]})
        )
    .mobOutput(
        SummoningOutput.mob('peat_mummy:peat_zombie').spread(4, 0, 4).count(4).data({ Health: 25})
    )
    .input('3x bone_block', '4x moss_block', '4x slime_ball', '4x honey_bottle')

    // bellringer
    event.recipes.summoningrituals
    .altar("bell")
    .mobOutput(
        SummoningOutput.mob('meetyourfight:bellringer').count(1).data({ Health: 200, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 200 }]})
        )
    .mobOutput(
        SummoningOutput.mob('vex').spread(4, 0, 4).count(4).data({ Health: 15})
    )        
    .input('3x quark:soul_bead', '4x phantom_membrane', '2x biomemakeover:illunite_shard', 'meetyourfight:mossy_tooth')

    // damefortuna
    event.recipes.summoningrituals
    .altar("diamond")
    .mobOutput(
        SummoningOutput.mob('meetyourfight:dame_fortuna').count(1).data({ Health: 280, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 280 }]})
        )
    .mobOutput(
        SummoningOutput.mob('witch').spread(4, 0, 4).count(4).data({ Health: 25})
    )
    .input('3x create:polished_rose_quartz', '3x emerald', '4x gold_ingot', 'meetyourfight:phantoplasm')

    // hirschgeist
    event.recipes.summoningrituals
    .altar("minecraft:bone")
    .mobOutput(
        SummoningOutput.mob('whisperwoods:hirschgeist').count(1).data({ Health: 300, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 5 }, { Name: 'generic.max_health', Base: 300 }]})
        )
    .mobOutput(
        SummoningOutput.mob('whisperwoods:wisp').spread(4, 0, 4).count(4).data({ Health: 25})
    )
    .input('3x quark:soul_bead', '8x bone', 'meetyourfight:fortunes_favor')

    // nether key
    event.recipes.summoningrituals
    .altar("whisperwoods:hirschgeist_skull")
    .mobOutput(
        SummoningOutput.mob('friendsandfoes:wildfire').count(1).data({ Health: 200, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 200 }]})
        )
    .itemOutput('kubejs:inert_nether_portal_key')
    .input('4x spider_eye', 'kubejs:boss_essence', '4x book', '4x createdeco:cast_iron_ingot')
    .dayTime('night')
    .sacrifice('pig', 1)
    .recipeTime(300)

    // Ignis
    event.recipes.summoningrituals
    .altar('minecraft:netherite_ingot')
    .mobOutput(
        SummoningOutput.mob('cataclysm:ignis').count(1)
        )
    .input('3x cataclysm:burning_ashes', '4x minecraft:blaze_rod')

    // Netherite Monstosity
    event.recipes.summoningrituals
    .altar('minecraft:netherite_ingot')
    .mobOutput(
        SummoningOutput.mob('cataclysm:netherite_monstrosity').count(1)
        )
    .input('3x cataclysm:burning_ashes', '8x minecraft:blaze_powder')

    // Harbinger
    event.recipes.summoningrituals
    .altar('minecraft:netherite_ingot')
    .mobOutput(
        SummoningOutput.mob('cataclysm:the_harbinger').count(1)
        )
    .input('3x cataclysm:burning_ashes', '6x minecraft:wither_skeleton_skull', 'kubejs:redstone_mechanism')

    // End Guardian
    event.recipes.summoningrituals
    .altar('majruszsdifficulty:enderium_ingot')
    .mobOutput(
        SummoningOutput.mob('cataclysm:ender_guardian').count(1)
        )
    .input('6x phantasm:stardust', '6x minecraft:shulker_shell', 'enlightened_end:adamantite_plates')

    // everdawn key
    event.recipes.summoningrituals
    .altar("twilightforest:armor_shard_cluster")
    .mobOutput(
        SummoningOutput.mob('mutantmonsters:mutant_zombie').count(1).data({ Health: 250, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 150 }]})
        )
    .itemOutput('kubejs:inert_everdawn_portal_key')
    .itemOutput('twilightforest:knight_phantom_trophy')
    .input('2x twilightforest:carminite', 'kubejs:boss_essence', '4x twilightforest:raw_ironwood', 'twilightforest:knight_phantom_trophy')
    .recipeTime(300)

    // everbright key
    event.recipes.summoningrituals
    .altar("twilightforest:armor_shard_cluster")
    .mobOutput(
        SummoningOutput.mob('mutantmonsters:mutant_skeleton').count(1).data({ Health: 250, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 150 }]})
        )
    .itemOutput('kubejs:inert_everbright_portal_key')
    .itemOutput('twilightforest:snow_queen_trophy')
    .input('2x twilightforest:carminite', 'kubejs:boss_essence', '4x twilightforest:raw_ironwood', 'twilightforest:snow_queen_trophy')
    .recipeTime(300)

    // rosalyne
    event.recipes.summoningrituals
    .altar("amethyst_shard")
    .mobOutput(
        SummoningOutput.mob('meetyourfight:rosalyne').count(1).data({ Health: 500, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 500 }]})
        )
    .input('2x blue_skies:falsite_ingot', '2x blue_skies:camellia', '2x minecraft:echo_shard', 'kubejs:boss_essence')

    // catalyst
    event.recipes.summoningrituals
    .altar("twilightforest:hydra_trophy")
    .mobOutput(
        SummoningOutput.mob('blue_skies:summoner').count(1).data({ Health: 150, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 150 }]})
        )
    .itemOutput('twilightforest:hydra_trophy')
    .itemOutput('undergarden:catalyst')
    .input('4x twilightforest:ironwood_ingot', 'kubejs:boss_essence', '4x twilightforest:knightmetal_ingot', 'meetyourfight:violet_bloom', '#blue_skies:arcs')
    .recipeTime(300)

    // masticator
    event.recipes.summoningrituals
    .altar("kubejs:masticator_bait")
    .mobOutput(
        SummoningOutput.mob('undergarden:masticator').count(1).data({ Health: 580, Attributes: [{ Name: 'generic.armor_toughness', Base: 6 }, { Name: 'generic.armor', Base: 10 }, { Name: 'generic.max_health', Base: 580 }]})
        )
    .input('kubejs:boss_essence', '4x undergarden:utherium_crystal')
    .sacrifice('pig', 3)

    // exotic eye
    event.recipes.summoningrituals
    .altar("ender_eye")
    .itemOutput('endrem:exotic_eye')
    .input('bubble_coral', 'aquamirae:abyssal_amethyst', 'kubejs:boss_essence', 'horn_coral', 'tube_coral', '8x progressivebosses:elder_guardian_spike', '2x conduit', '8x aquamirae:wisteria_niveis', '12x aquamirae:luminescent_bubble')
    .recipeTime(300)

    // undead eye
    event.recipes.summoningrituals
    .altar("ender_eye")
    .itemOutput('endrem:undead_eye')
    .input('endrem:undead_soul','kubejs:boss_essence', '4x phantom_membrane', '8x rotten_flesh', '8x rottencreatures:magma_rotten_flesh', '8x rottencreatures:frozen_rotten_flesh', '8x peat_mummy:rotten_peat_fresh', '4x zombie_head')
    .recipeTime(300)

    // evil eye
    event.recipes.summoningrituals
    .altar("ender_eye")
    .itemOutput('endrem:evil_eye')
    .input('4x undergarden:masticator_scales', '4x undergarden:forgotten_ingot', 'kubejs:boss_essence', '4x biomancy:creator_mix', 'deeperdarker:soul_crystal', '4x deeperdarker:sculk_bone')
    .recipeTime(300)

    // wither eye
    event.recipes.summoningrituals
    .altar("ender_eye")
    .itemOutput('endrem:wither_eye')
    .input('3x wither_skeleton_skull', 'kubejs:boss_essence', 'friendsandfoes:wildfire_crown_fragment', 'cataclysm:monstrous_horn', 'nether_star', '4x netherdepthsupgrade:wither_bonefish', 'mutantmore:mutant_wither_skeleton_rib', 'mutantmore:mutant_blaze_core')
    .recipeTime(300)

    // magical eye
    event.recipes.summoningrituals
    .altar("ender_eye")
    .itemOutput('endrem:magical_eye')
    .input('totem_of_undying', 'kubejs:boss_essence', 'conjurer_illager:conjurer_hat', '2x botania:gaia_ingot', 'hexerei:crystal_ball', '4x irons_spellbooks:magic_cloth')
    .recipeTime(300)

    // witch eye
    event.recipes.summoningrituals
    .altar("ender_eye")
    .itemOutput('endrem:witch_eye')
    .input('endrem:witch_pupil', 'the_bumblezone:royal_jelly_bottle','kubejs:boss_essence', 'hexerei:witch_helmet', '8x cauldron', '4x hexerei:dried_belladonna_flowers', 'botania:cosmetic_witch_pin')
    .recipeTime(300)

});