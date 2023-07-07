ServerEvents.recipes(event => {
    let croptopiaWeirdnessIgnore = [
        'create:bar_of_chocolate',
        'brewinandchewin:flaxen_cheese_wedge',
        'gourmet:cheese',
        'create:dough',
        'farmersdelight:apple_pie',
        'farmersdelight:hamburger',
        'gourmet:cooked_fries',
        'gourmet:butter',
        'delightful:cheeseburger',
        'neapolitan:vanilla_ice_cream',
        'neapolitan:strawberry_ice_cream',
        'neapolitan:chocolate_ice_cream',
        'farmersdelight:raw_pasta',
        'croptopia:cinnamon_roll',
        'croptopia:olive_oil',
        'farmersdelight:melon_juice'
    ]
    event.forEachRecipe({mod: 'croptopia', input: ['croptopia:frying_pan', 'croptopia:cooking_pot']}, recipe => {
        let outputItems = recipe.json.get('result')
        if (outputItems.length > 1) { return }
        let ingredientList = recipe.json.get('ingredients')
        let ingredientListShaped = recipe.json.get('key')
        let outputString = outputItems.toString().split('"')[3]

        // blacklist
        if (blacklist.includes(outputString)) {
            return
        }

        if (recipe.type == 'minecraft:crafting_shapeless') {
            let ingredients = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shapeless]", "")

            if (croptopiaWeirdnessIgnore.includes(outputString)) {
                event.remove({id: recipeId})
                return
            }

            ingredientList.forEach((input, index) => {
                if (input !== '{"item":"croptopia:frying_pan"}' && input !== '{"item":"croptopia:cooking_pot"}' && input !== '{"item":"croptopia:food_press"}' && input !== '{"item":"croptopia:knife"}') {
                    ingredients.push(input)
                }
            })

            if (ingredientList.length > 6) { return }
            event.custom({
                "type": "farmersdelight:cooking",
                "recipe_book_tab": "misc",
                "ingredients": ingredients,
                "result": outputItems,
                "cookingtime": 200
            })
            event.remove({id: recipeId})
            
        } else if (recipe.type == 'minecraft:crafting_shaped') {
            let ingredientsShaped = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shaped]", "")

            if (croptopiaWeirdnessIgnore.includes(outputString)) {
                event.remove({id: recipeId})
                return
            }

            for (let i = 1; i <= 6; i++) {
                let item = ingredientListShaped.get(`${i}`)
                if (item !== '{"item":"croptopia:frying_pan"}' && item !== '{"item":"croptopia:cooking_pot"}' && item !== '{"item":"croptopia:food_press"}' && item !== null && item !== '{"item":"croptopia:knife"}') {
                    ingredientsShaped.push(item)
                }
            }

            event.custom({
                "type": "farmersdelight:cooking",
                "recipe_book_tab": "misc",
                "ingredients": ingredientsShaped,
                "result": outputItems,
                "cookingtime": 200
            })
            event.remove({id: recipeId})
        }
    })

    event.forEachRecipe({mod: 'croptopia', input: ['croptopia:food_press']}, recipe => {
        let outputItems = recipe.json.get('result')
        if (outputItems.length > 1) { return }
        let ingredientList = recipe.json.get('ingredients')
        let outputString = outputItems.toString().split('"')[3]
        let mixing = false

        // blacklist
        if (blacklist.includes(outputString)) {
            return
        }

        if (recipe.type == 'minecraft:crafting_shapeless') {
            let ingredients = []
            let recipeId = recipe.toString().replace("[minecraft:crafting_shapeless]", "")

            if (croptopiaWeirdnessIgnore.includes(outputString)) {
                event.remove({id: recipeId})
                return
            }
            
            if (!ingredientList.asJsonArray.contains({"item":"minecraft:glass_bottle"})) {
                mixing = true
            }

            ingredientList.forEach((input, index) => {
                if (input !== '{"item":"croptopia:food_press"}' && input !== '{"tag":"forge:water_bottles"}' && input !== '{"item":"minecraft:glass_bottle"}') {
                    ingredients.push(input)
                }
            })

            if (ingredientList.length > 6) { return }

            if (mixing) {
                event.custom({
                    type: 'create:mixing',
                    ingredients: ingredients,
                    results: [outputItems]
                })
            } else {
                event.custom({
                    type: 'farmersrespite:brewing',
                    container: {'item': 'minecraft:glass_bottle'},
                    cookingtime: 300,
                    experience: 0.1,
                    needwater: true,
                    ingredients: ingredients,
                    result: outputItems
                })
            }
            event.remove({id: recipeId})
            
        }
    })
})