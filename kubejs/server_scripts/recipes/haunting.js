ServerEvents.recipes(event => {
    
    const id_prefix = 'kubejs:/haunting/';
    const recipes = [
        {
            ingredients: [
                {'tag': 'forge:dusts/glowstone'}
            ],
            results: [
            {'item': 'spirit:soul_powder'}, 
            {'item': 'spirit:soul_powder'}],
            id: `${id_prefix}soul_powder`
        },

        {
            ingredients: [
                {'item': 'minecraft:deepslate'}
            ],
            results: [
            {'item': 'spirit:soul_slate'}],
            id: `${id_prefix}soul_slate`
        },

        {
            ingredients: [
                {'item': 'environmental:mud_ball'}
            ],
            results: [
            {'item': 'nourished_nether:sludge_ball'}],
            id: `${id_prefix}sludge_ball`
        },

        {
            ingredients: [
                {'item': 'minecraft:mud'}
            ],
            results: [
            {'item': 'nourished_nether:soul_sludge'}],
            id: `${id_prefix}soul_sludge`
        },

        {
            ingredients: [
                {'item': 'croptopia:salt'}
            ],
            results: [
            {'item': 'infernalexp:soul_salt_clump'}],
            id: `${id_prefix}soul_salt_clump`
        },

        {
            ingredients: [
                {'item': 'deeperdarker:soul_dust'}
            ],
            results: [
            {'item': 'silentgear:blazing_dust'}],
            id: `${id_prefix}blazing_dust`
        },

        {
            ingredients: [
                {'item': 'minecraft:blaze_powder'}
            ],
            results: [
            {'item': 'biomemakeover:soul_embers'}],
            id: `${id_prefix}soul_embers`
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:haunting',
            ingredients: recipe.ingredients,
            results: recipe.results
        })
        .id(recipe.id)
    })
})