ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/splashing/';
    const recipes = [

        {
            ingredients: [
                {'item': 'kubejs:prismasand'}
            ],
            
            results: [{'count': 3, 'item': 'kubejs:pearlescent_nugget'}, {'count': 1, 'chance': 0.5, 'item': 'kubejs:chromium_nugget'}, {'count': 3, 'item': 'kubejs:chromium_nugget'}],
            id: `${id_prefix}prismasand`
        }
    ]

    recipes.forEach((recipe) => {

        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:splashing',
            ingredients: recipe.ingredients,
            results: recipe.results
        })
        .id(recipe.id)
    })
})