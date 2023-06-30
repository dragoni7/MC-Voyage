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