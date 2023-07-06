ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/brewing/';
    
    const recipes = [

        {
            cookingtime: 2400,
            exp: 0.35,
            needwater: true,
            result: {'item': 'farmersrespite:coffee'},
            container: {'item': 'minecraft:glass_bottle'},
            ingredients: [
                {
                    'item': 'createcafe:coffee_grounds',
                },
                {
                    'item': 'createcafe:coffee_grounds',
                },
            ],
            id: `${id_prefix}coffee`,
            old_id: 'farmersrespite:brewing/coffee'
        },

        {
            cookingtime: 2400,
            exp: 0.35,
            needwater: false,
            result: {'item': 'respiteful:mocha_coffee'},
            container: {'item': 'farmersdelight:milk_bottle'},
            ingredients: [
                {
                    'item': 'createcafe:coffee_grounds',
                },
                {
                    'item': 'create:bar_of_chocolate',
                },
            ],
            id: `${id_prefix}mocha_coffee`,
            old_id: 'respiteful:brewing/mocha_coffee'
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'farmersrespite:brewing',
            container: recipe.container,
            cookingtime: recipe.cookingtime,
            experience: recipe.exp,
            needwater: recipe.needwater,
            ingredients: recipe.ingredients,
            result: recipe.result
        })
        .id(recipe.id)
    })
})