ServerEvents.recipes(event => {

    let blasting = [
        {
            type: 'blasting',
            output: 'createdeco:cast_iron_ingot',
            input: 'minecraft:iron_ingot',
            cookingTime: 500
        }
    ]

    let smelting = [
        {
            type: 'smelting',
            output: 'twilightforest:ironwood_ingot',
            input: 'jaopca:dusts.ironwood',
            cookingTime: 100
        },

        {
            type: 'smelting',
            output: 'twilightforest:knightmetal_ingot',
            input: 'jaopca:dusts.knightmetal',
            cookingTime: 100
        }
    ]

    blasting.forEach(recipe => {
        event.blasting(recipe.output, recipe.input).cookingTime(recipe.cookingTime)
    })

    smelting.forEach(recipe => {
        event.smelting(recipe.output, recipe.input).cookingTime(recipe.cookingTime)
    })
})