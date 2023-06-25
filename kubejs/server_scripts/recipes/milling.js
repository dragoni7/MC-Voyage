ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/milling/'
    const recipes = [

        {
            ingredients: [{'item': 'architects_palette:withered_bone'}],
            time: 150,
            results: [
                {
                    'count': 3,
                    'item': 'minecraft:bone_meal'
                },
                {
                    'chance': 0.05,
                    'item': 'biomancy:withered_mob_marrow'
                }],
            id: `${id_prefix}wither_marrow`
        },

        {
            ingredients: [{'item': 'pamhc2trees:cinnamonitem'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'festive_delight:cinnamon_powder'
                },
                {
                    'chance': 0.05,
                    'item': 'festive_delight:cinnamon_powder'
                }],
            id: `${id_prefix}cinnamon_powder`
        },

        {
            ingredients: [{'item': 'minecraft:prismarine'}],
            time: 150,
            results: [
                {
                    'count': 2,
                    'item': 'dyenamics:aquamarine_dye'
                },
                {
                    'chance': 0.05,
                    'item': 'minecraft:prismarine_shard'
                }],
            id: `${id_prefix}prismarine_shard`
        },

        {
            ingredients: [{'item': 'alexsmobs:capsid'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'minecraft:purple_dye'
                },
                {
                    'chance': 0.01,
                    'item': 'majruszsdifficulty:enderium_shard'
                }],
            id: `${id_prefix}enderium_from_capsid`
        },

        {
            ingredients: [{'item': 'farmersrespite:green_tea_leaves'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'delightful:matcha'
                }],
            id: `${id_prefix}tea_leaf_milling`
        },

        {
            ingredients: [{'item': 'quark:soul_bead'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'spirit:soul_powder'
                }],
            id: `${id_prefix}soul_powder_milling`
        }
    ]

    recipes.forEach((recipe) => {
        event.custom({
            type: 'create:milling',
            ingredients: recipe.ingredients,
            processingTime: recipe.time,
            results: recipe.results
        })
        .id(recipe.id)
    })
})