ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:/shapeless/';
    const recipes = [

        {
            input: ['alexsmobs:acacia_blossom'],
            result: '2x minecraft:white_dye',
            id: `${id_prefix}blossom_to_dye`
        },

        {
            input: ['pamhc2trees:peachitem'],
            result: '2x dyenamics:peach_dye',
            id: `${id_prefix}peach_dye`
        },

        {
            input: ['upgrade_aquatic:prismarine_coral_block'],
            result: '2x dyenamics:aquamarine_dye',
            id: `${id_prefix}aquamarine_dye`
        },

        {
            input: ['minecraft:glow_berries'],
            result: '2x dyenamics:fluorescent_dye',
            id: `${id_prefix}fluorescent_dye`
        },

        {
            input: ['neapolitan:mint_leaves'],
            result: '2x dyenamics:mint_dye',
            id: `${id_prefix}mint_dye`
        },

        {
            input: ['hexerei:blood_bottle'],
            result: '2x dyenamics:maroon_dye',
            id: `${id_prefix}maroon_dye`
        },

        {
            input: ['supplementaries:soap'],
            result: '2x dyenamics:bubblegum_dye',
            id: `${id_prefix}bubblegum_dye`
        },

        {
            input: ['quark:lavender_blossom_leaves'],
            result: '2x dyenamics:lavender_dye',
            id: `${id_prefix}lavender_dye`
        },

        {
            input: ['blue_skies:charoite'],
            result: '2x dyenamics:lavender_dye',
            id: `${id_prefix}lavender_dye`
        },

        {
            input: ['pamhc2trees:persimmonitem'],
            result: '2x dyenamics:persimmon_dye',
            id: `${id_prefix}persimmon_dye`
        },

        {
            input: ['blue_skies:aquite'],
            result: '2x dyenamics:cherenkov_dye',
            id: `${id_prefix}cherenkov_dye`
        },

        {
            input: ['minecraft:clay_ball', 'minecraft:seagrass'],
            result: '2x architects_palette:algal_blend',
            id: `${id_prefix}algal_blend_seagrass`
        },

        {
            input: ['minecraft:clay_ball', 'aquaculture:algae'],
            result: '2x architects_palette:algal_blend',
            id: `${id_prefix}algal_blend_algae`
        },

        {
            input: ['minecraft:andesite', 'architects_palette:algal_brick', 'create:zinc_nugget'],
            result: '3x create:andesite_alloy',
            id: `${id_prefix}andesite_alloy`,
            old_id: 'create:crafting/materials/andesite_alloy'
        },

        {
            input: ['create:dough', '#forge:eggs', 'minecraft:sugar', 'meetyourfight:phantoplasm'],
            result: '4x meetyourfight:aether_glazed_cupcake',
            id: `${id_prefix}aether_cupcake`,
            old_id: 'meetyourfight:aether_glazed_cupcake'
        },

        {
            input: ['create:dough', '#forge:milk', '#forge:fruits/strawberry', '#forge:fruits/lime'],
            result: 'collectorsreap:strawberry_jam_bun',
            id: `${id_prefix}strawberry_jam_bun`,
            old_id: 'collectorsreap:food/strawberry_jam_bun'
        },

        {
            input: ['create:dough', '#forge:crops/corn'],
            result: 'culturaldelights:corn_dough',
            id: `${id_prefix}corn_dough`,
            old_id: 'culturaldelights:corn_dough'
        },

        {
            input: ['create:dough', 'minecraft:egg', 'minecraft:honey_bottle', 'festive_delight:cinnamon_powder'],
            result: '2x festive_delight:gingerbread_dough',
            id: `${id_prefix}gingerbread_dough`,
            old_id: 'festive_delight:gingerbread_dough_craft'
        },

        {
            input: ['gourmet:butter', 'minecraft:baked_potato', '#forge:cooked_beef'],
            result: 'farmersdelight:stuffed_potato',
            id: `${id_prefix}stuffed_potato`,
            old_id: 'farmersdelight:stuffed_potato'
        },

        {
            input: ['supplementaries:flax'],
            result: 'silentgear:flax_string',
            id: `${id_prefix}flax_string`,
            old_id: 'supplementaries:string'
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.shapeless(recipe.result, recipe.input).id(recipe.id)
    })
    
})