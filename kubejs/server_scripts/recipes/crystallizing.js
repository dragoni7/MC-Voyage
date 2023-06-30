ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/crystallizing/';
    const recipes = [

        {
            ingredients: [
                {'fluid': 'thermal:redstone', 'amount': 250},
                {'item': 'ae2:charged_certus_quartz_crystal'},
                {'tag': 'forge:gems/quartz'},
            ],
            
            results: [{'count': 2, 'item': 'ae2:fluix_crystal'}],
            id: `${id_prefix}fluix_crystal`,
            old_id: 'create:compat/ae2/mixing/fluix_crystal'
        },

        {
            ingredients: [
                {'fluid': 'thermal:glowstone', 'amount': 1000},
                {'item': 'biomemakeover:illunite_block'},
                {'item': 'minecraft:amethyst_block'},
            ],
            
            results: [{'item': 'ae2:flawed_budding_quartz'}],
            id: `${id_prefix}flawed_budding_quartz`
        },

        {
            ingredients: [
                {'fluid': 'minecraft:water', 'amount': 1000},
                {'item': 'biomancy:tough_fibers'},
                {'item': 'ae2:certus_quartz_dust'},
            ],
            
            results: [{'item': 'ae2:quartz_fiber', 'amount': 6}],
            id: `${id_prefix}quartz_fiber`,
            old_id: 'ae2:network/parts/quartz_fiber_part'
        },

        {
            ingredients: [
                {'fluid': 'thermal:redstone', 'amount': 2000},
                {'item': 'minecraft:ender_pearl'},
            ],
            
            results: [{'item': 'createteleporters:redstone_pearl'}],
            id: `${id_prefix}redstone_pearl`,
            old_id: 'createteleporters:redstone_pearl_recipe'
        },

        {
            ingredients: [
                {'fluid': 'ad_astra:cryo_fuel', 'amount': 2000},
                {'item': 'alexsmobs:mosquito_larva'},
                {'item': 'morbid:morbid_harvester_arm'},
            ],
            
            results: [{'item': 'kubejs:stasis_larva'}],
            id: `${id_prefix}stasis_larva`
        },

        {
            ingredients: [
                {'fluid': 'minecraft:water', 'amount': 250},
                {'item': 'biomancy:stone_powder'},
            ],
            
            results: [{'item': 'minecraft:clay_ball'}],
            id: `${id_prefix}clay_ball`
        }
    ]

    recipes.forEach((recipe) => {

        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'thermal:crystallizer',
            ingredients: recipe.ingredients,
            results: recipe.results
        })
        .id(recipe.id)
    })
})