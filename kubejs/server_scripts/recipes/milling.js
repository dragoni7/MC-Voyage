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
        },

        {
            ingredients: [{'item': 'create:bar_of_chocolate'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'pamhc2foodcore:cocoapowderitem'
                }],
            id: `${id_prefix}cocoapowderitem`,
            old_id: 'pamhc2foodcore:cocoapowderitem'
        },

        {
            ingredients: [{'tag': 'forge:rawpork'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'pamhc2foodcore:groundporkitem'
                }],
            id: `${id_prefix}groundporkitem`,
            old_id: 'pamhc2foodcore:groundporkitem'
        },

        {
            ingredients: [{'tag': 'forge:rawmutton'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'pamhc2foodcore:groundmuttonitem'
                }],
            id: `${id_prefix}groundmuttonitem`,
            old_id: 'pamhc2foodcore:groundmuttonitem'
        },

        {
            ingredients: [{'tag': 'forge:rawchicken'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'pamhc2foodcore:groundchickenitem'
                }],
            id: `${id_prefix}groundchickenitem`,
            old_id: 'pamhc2foodcore:groundchickenitem'
        },

        {
            ingredients: [{'tag': 'forge:rawfish'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'pamhc2foodcore:groundfishitem'
                }],
            id: `${id_prefix}groundfishitem`,
            old_id: 'pamhc2foodcore:groundfishitem'
        },

        {
            ingredients: [{'tag': 'forge:rawrabbit'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'pamhc2foodcore:groundrabbititem'
                }],
            id: `${id_prefix}groundrabbititem`,
            old_id: 'pamhc2foodcore:groundrabbititem'
        },

        {
            ingredients: [{'tag': 'forge:rawbeef'}],
            time: 50,
            results: [
                {
                    'count': 1,
                    'item': 'pamhc2foodcore:groundbeefitem'
                }],
            id: `${id_prefix}groundbeefitem`,
            old_id: 'pamhc2foodcore:groundbeefitem'
        }
    ]

    recipes.forEach((recipe) => {

        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }
        
        event.custom({
            type: 'create:milling',
            ingredients: recipe.ingredients,
            processingTime: recipe.time,
            results: recipe.results
        })
        .id(recipe.id)
    })
})