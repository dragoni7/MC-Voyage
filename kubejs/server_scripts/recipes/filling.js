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
        },

        {
            ingredients: [
                {'item': 'minecraft:glass_bottle'},
                {'fluid': 'createcafe:coffee', 'amount': 1000}
            ],
            results: [
            {'item': 'farmersrespite:coffee'}],
            id: `${id_prefix}coffee`,
            old_id: 'create_central_kitchen:filling/coffee'
        },

        {
            ingredients: [
                {'item': 'collectorsreap:pomegranate_seeds'},
                {'fluid': 'create:chocolate', 'amount': 250}
            ],
            results: [
            {'item': 'collectorsreap:chocolate_arils'}],
            id: `${id_prefix}chocolate_arils`,
            old_id: 'collectorsreap:food/chocolate_arils'
        },

        {
            ingredients: [
                {'item': 'minecraft:glowstone'},
                {'fluid': 'minecraft:lava', 'amount': 250}
            ],
            results: [
            {'item': 'infernalexp:dimstone'}],
            id: `${id_prefix}dimstone`
        },

        {
            ingredients: [
                {'item': 'minecraft:glass_bottle'},
                {'fluid': 'createdieselgenerators:plant_oil', 'amount': 250}
            ],
            results: [
            {'item': 'gourmet:seed_oil_bottle'}],
            id: `${id_prefix}seed_oil_bottle`
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