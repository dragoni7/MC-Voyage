ServerEvents.recipes(event => {
    
    const id_prefix = 'kubejs:/cutting/';
    const recipes = [
        {
            ingredients: [
                {'item': 'minecraft:bread'}
            ],
            results: [
            {'item': 'gourmet:buns'}],
            tool: {"tag": "forge:tools/knives"},
            id: `${id_prefix}buns`,
            old_id: 'gourmet:buns'
        },

        {
            ingredients: [
                {'item': 'farmersdelight:cabbage'}
            ],
            results: [
            {'item': 'farmersdelight:cabbage_leaf', 'count': 2}],
            tool: {"tag": "forge:tools/knives"},
            id: `${id_prefix}cabbage_leaf`,
            old_id: 'farmersdelight:cutting/cabbage'
        }
    ]

    recipes.forEach((recipe) => {

        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: recipe.ingredients,
            result: recipe.results,
            tool: recipe.tool
        })
        .id(recipe.id)
    })
})