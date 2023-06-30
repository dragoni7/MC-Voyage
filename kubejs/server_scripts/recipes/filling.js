ServerEvents.recipes(event => {
    
    const id_prefix = 'kubejs:/filling/';
    const recipes = [
        {
            ingredients: [
                {'item': 'gourmet:waffle'},
                {'fluid': 'create_central_kitchen:vanilla_ice_cream', 'amount': 500}
            ],
            results: [
            {'item': 'gourmet:ice_cream_cone'}],
            id: `${id_prefix}vanilla_cone`,
            old_id: 'gourmet:ice_cream_cone'
        },

        {
            ingredients: [
                {'item': 'gourmet:waffle'},
                {'fluid': 'create_central_kitchen:sweet_berry_ice_cream', 'amount': 500}
            ],
            results: [
            {'item': 'gourmet:sweet_berry_ice_cream_cone'}],
            id: `${id_prefix}sweet_berry_cone`,
            old_id: 'gourmet:sweet_berry_ice_cream_cone'
        },

        {
            ingredients: [
                {'item': 'gourmet:waffle'},
                {'fluid': 'create_central_kitchen:chocolate_ice_cream', 'amount': 500}
            ],
            results: [
            {'item': 'gourmet:chocolate_ice_cream_cone'}],
            id: `${id_prefix}chocolate_cone`,
            old_id: 'gourmet:chocolate_ice_cream_cone'
        }
        
    ]

    recipes.forEach((recipe) => {

        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:filling',
            ingredients: recipe.ingredients,
            results: recipe.results
        })
        .id(recipe.id)
    });
});