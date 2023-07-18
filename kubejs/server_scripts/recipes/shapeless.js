ServerEvents.recipes(event => {

    const id_prefix = 'kubejs:/shapeless/';
    const recipes = [

        {
            input: ['alexsmobs:acacia_blossom'],
            result: '2x minecraft:white_dye',
            id: `${id_prefix}blossom_to_dye`
        },

        {
            input: ['croptopia:peach'],
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
            input: ['croptopia:persimmon'],
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
            input: ['minecraft:andesite', 'architects_palette:algal_brick', 'create:zinc_ingot'],
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
        },

        {
            input: ['#alexsdelight:cooked_kangaroo', '#alexsdelight:cooked_kangaroo', 'gourmet:buns', '#forge:salad_ingredients', 'minecraft:carrot'],
            result: 'alexsmobs:kangaroo_burger',
            id: `${id_prefix}kangaroo_burger`,
            old_id: 'alexsmobs:kangaroo_burger'
        },

        {
            input: ['#forge:beef_patty', 'gourmet:buns', '#forge:salad_ingredients', 'farmersdelight:tomato', 'farmersdelight:onion', '#forge:cheese', 'culturaldelights:pickle', '#forge:cooked_bacon'],
            result: 'delightful:cheeseburger',
            id: `${id_prefix}cheeseburger`,
            old_id: 'delightful:food/cheeseburger'
        },

        {
            input: ['#forge:beef_patty', 'culturaldelights:pickle', 'gourmet:buns', '#forge:salad_ingredients', 'farmersdelight:tomato', 'farmersdelight:onion', '#forge:cheese', '#forge:cheese', 'gourmet:caramelized_bacon'],
            result: 'delightful:deluxe_cheeseburger',
            id: `${id_prefix}deluxe_cheeseburger`,
            old_id: 'delightful:food/deluxe_cheeseburger'
        },

        {
            input: ['#forge:beef_patty', 'gourmet:buns', '#forge:salad_ingredients', 'farmersdelight:tomato', 'farmersdelight:onion'],
            result: 'farmersdelight:hamburger',
            id: `${id_prefix}hamburger`,
            old_id: 'farmersdelight:hamburger'
        },

        {
            input: ['alexsdelight:bison_patty', 'gourmet:buns', '#forge:salad_ingredients', 'farmersdelight:tomato', 'minecraft:beetroot'],
            result: 'alexsdelight:bison_burger',
            id: `${id_prefix}bison_burger`,
            old_id: 'alexsdelight:bison_burger'
        },

        {
            input: ['collectorsreap:baked_portobello_cap', 'gourmet:buns', '#forge:salad_ingredients', 'farmersdelight:tomato', 'farmersdelight:onion'],
            result: 'collectorsreap:portobello_burger',
            id: `${id_prefix}portobello_burger`,
            old_id: 'collectorsreap:food/portobello_burger'
        },

        {
            input: ['#culturaldelights:smoked_regular_eggplants', 'gourmet:buns', '#forge:salad_ingredients', 'farmersdelight:tomato'],
            result: 'culturaldelights:eggplant_burger',
            id: `${id_prefix}eggplant_burger`,
            old_id: 'culturaldelights:eggplant_burger'
        },

        {
            input: ['aquaculture:fish_fillet_raw', 'minecraft:dried_kelp'],
            result: 'aquaculture:sushi',
            id: `${id_prefix}sushi`,
            old_id: 'aquaculture:sushi'
        },

        {
            input: ['farmersrespite:coffee', 'minecraft:sugar', 'croptopia:paprika', '#forge:milks', 'farmersdelight:pumpkin_slice', 'farmersdelight:pumpkin_slice', 'farmersdelight:pumpkin_slice'],
            result: 'croptopia:pumpkin_spice_latte',
            id: `${id_prefix}pumpkin_spice_latte`,
            old_id: 'croptopia:pumpkin_spice_latte',
        },

        {
            input: ['minecraft:egg', 'minecraft:sugar', 'minecraft:sugar', '#forge:almonds', '#forge:almonds'],
            result: '2x croptopia:macaron',
            id: `${id_prefix}macaron`,
            old_id: 'croptopia:macaron',
        },

        {
            input: ['croptopia:orange', '#forge:bottles/blood'],
            result: 'createcafe:blood_orange',
            id: `${id_prefix}blood_orange`
        },

        {
            input: ['farmersdelight:tomato', 'farmersdelight:onion', 'aquaculture:fish_fillet_cooked'],
            result: 'farmersdelight:barbecue_stick',
            id: `${id_prefix}barbecue_stick`
        },

        {
            input: ['minecraft:ender_pearl', 'minecraft:amethyst_shard', 'minecraft:glowstone_dust', 'botania:pixie_dust'],
            result: '4x waystones:warp_dust',
            id: `${id_prefix}warp_dust`
        }
    ]
    
    event.remove({id: 'silentgear:pebble'})
    
    event.shapeless('silentgear:pebble',
    [Item.of('silentgear:pickaxe'), 'minecraft:cobblestone'])
    .id(`${id_prefix}pebble`)
    .damageIngredient(Item.of('silentgear:pickaxe'), 2)
    

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.shapeless(recipe.result, recipe.input).id(recipe.id)
    })
    
})