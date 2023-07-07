ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/splashing/';
    const recipes = [

        {
            ingredients: [
                {'item': 'kubejs:prismasand'}
            ],
            
            results: [{'count': 3, 'item': 'kubejs:pearlescent_nugget'}, {'count': 1, 'chance': 0.5, 'item': 'kubejs:chromium_nugget'}, {'count': 3, 'item': 'kubejs:chromium_nugget'}],
            id: `${id_prefix}prismasand`
        },

        {
            ingredients: [
                {'tag': 'forge:sand'}
            ],
            
            results: [{'count': 1, 'chance': 0.25, 'item': 'minecraft:clay_ball'}, {'count': 1, 'chance': 0.25, 'item': 'croptopia:salt'}, {'count': 2, 'chance': 0.1, 'item': 'croptopia:salt'}],
            old_id: 'create:splashing/sand',
            id: `${id_prefix}sand_salt`
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