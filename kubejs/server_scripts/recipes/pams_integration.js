// pot

ServerEvents.recipes(event => {
    event.forEachRecipe({mod: 'pamhc2foodcore', mod: 'pamhc2foodextended', input: ['pamhc2foodcore:potitem']}, recipe => {
        let outputItems = recipe.json.get('result')
        if (outputItems.length >= 1) { return }
        let ingredientList = recipe.json.get('ingredients')

        // blacklist
        if (blacklist.includes(outputItems.item)) return

        if (recipe.type == 'minecraft:crafting_shapeless') {
            let ingredients = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shapeless]", "")
            ingredientList.forEach((input, index) => {
                if (input !== '{"item":"pamhc2foodcore:potitem"}' && input !== '{"tag":"forge:tool_pot"}') {
                    ingredients.push(input)
                }
            })

            if (ingredients.length >= 6) { return }
            event.custom({
                "type": "farmersdelight:cooking",
                "recipe_book_tab": "misc",
                "ingredients": ingredients,
                "result": outputItems,
                "cookingtime": 400
            })
            event.remove({id: recipeId})
            
        }
    })
})

// saucepan
ServerEvents.recipes(event => {
    event.forEachRecipe({mod: 'pamhc2foodcore', mod: 'pamhc2foodextended', input: ['pamhc2foodcore:saucepanitem']}, recipe => {
        let outputItems = recipe.json.get('result')
        if (outputItems.length > 1) { return }
        let ingredientList = recipe.json.get('ingredients')

        // blacklist
        if (blacklist.includes(outputItems.item)) return

        if (recipe.type == 'minecraft:crafting_shapeless') {
            let ingredients = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shapeless]", "")
            ingredientList.forEach((input, index) => {
                if (input !== '{"item":"pamhc2foodcore:saucepanitem"}' && input !== '{"tag":"forge:tool_saucepan"}') {
                    ingredients.push(input)
                }
            })

            if (ingredients.length > 6) { return }
            event.custom({
                "type": "farmersdelight:cooking",
                "recipe_book_tab": "misc",
                "ingredients": ingredients,
                "result": outputItems,
                "cookingtime": 400
            })
            event.remove({id: recipeId})
            
        }
    })
})

// grinder
ServerEvents.recipes(event => {
    event.forEachRecipe({mod: 'pamhc2foodcore', mod: 'pamhc2foodextended', input: ['pamhc2foodcore:grinderitem']}, recipe => {
        let outputItems = recipe.json.get('result');
        if (outputItems.length >= 1) { return }
        let ingredientList = recipe.json.get('ingredients')

        // blacklist
        if (blacklist.includes(outputItems.item)) return

        if (recipe.type == 'minecraft:crafting_shapeless') {
            let ingredients = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shapeless]", "")
            ingredientList.forEach((input, index) => {
                if (input !== '{"item":"pamhc2foodcore:grinderitem"}' && input !== '{"tag":"forge:tool_grinder"}') {
                    ingredients.push(input)
                }
            })

            if (ingredients.length > 1) { 
                event.custom({
                    "type": "create:mixing",
                    "ingredients": ingredients,
                    "results": [outputItems],
                })
            }
            else {
                event.custom({
                    "type": "create:milling",
                    "ingredients": ingredients,
                    "results": [outputItems],
                    "processingTime": 200
                })
            }
            event.remove({id: recipeId})
        }
    })
})

// juicer
ServerEvents.recipes(event => {
    event.forEachRecipe({mod: 'pamhc2foodcore', mod: 'pamhc2foodextended', input: ['pamhc2foodcore:juiceritem']}, recipe => {
        let outputItems = recipe.json.get('result');
        if (outputItems.length >= 1) { return }
        let ingredientList = recipe.json.get('ingredients')

        // blacklist
        if (blacklist.includes(outputItems.item)) return

        if (recipe.type == 'minecraft:crafting_shapeless') {
            let ingredients = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shapeless]", "")
            ingredientList.forEach((input, index) => {
                if (input !== '{"item":"pamhc2foodcore:juiceritem"}' && input !== '{"tag":"forge:tool_juicer"}') {
                    ingredients.push(input)
                }
            })

            event.custom({
                "type": "create:compacting",
                "ingredients": ingredients,
                "results": [outputItems],
            })
            event.remove({id: recipeId})
        }
    })
})