ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/crushing/';

    const recipes = [
        {
            ingredients: [{'item': 'minecraft:shulker_shell'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'silentgear:crushed_shulker_shell'
                }],
            old_id: 'silentgear:crushed_shulker_shell',
            id: `${id_prefix}crushed_shulker_shell`
        },

        {
            ingredients: [{'item': 'minecraft:cobbled_deepslate'}],
            time: 150,
            results: [
                {
                    'count': 1,
                    'item': 'minecraft:gravel'
                },
                {
                    'chance': 0.05,
                    'item': 'silentgear:bort'
                }],
            id: `${id_prefix}bort_crushing`
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:crushing',
            ingredients: recipe.ingredients,
            processingTime: recipe.time,
            results: recipe.results
        })
        .id(recipe.id)
    })
})