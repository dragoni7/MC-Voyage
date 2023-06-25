ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/pressing/';
    const recipes = [
        {
            ingredients: [
                {'item': 'ae2:silicon'},
                {
                    'amount': 100,
                    'fluid': 'thermal:resin',
                    'nbt': {}
                }
            ],
            results: [{'item': 'ae2:printed_silicon'}],
            id: `${id_prefix}printed_silicon`,
            old_id: 'ae2:inscriber/silicon_print'
        },

        {
            ingredients: [
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
                {'item': 'rottencreatures:magma_rotten_flesh'},
            ],
            results: [{'item': 'minecraft:magma_block'}],
            id: `${id_prefix}magma_block_from_flesh`
        },

        {
            ingredients: [
                {'item': 'supplementaries:flint_block'}
            ],
            results: [{'item': 'minecraft:stone'}],
            id: `${id_prefix}flint_to_stone`,
        },

        {
            ingredients: [
                {
                    'amount': 900,
                    'fluid': 'the_bumblezone:sugar_water_still',
                    'nbt': {}
                }
            ],
            results: [{'item': 'supplementaries:sugar_cube'}],
            id: `${id_prefix}sugar_water_to_block`,
        },

        {
            ingredients: [
                {
                    'amount': 50,
                    'fluid': 'minecraft:water',
                    'nbt': {}
                },
                {'item': 'minecraft:vine'},
            ],
            results: [{'amount': 50, 'fluid': 'thermal:latex'}],
            id: `${id_prefix}latex_from_vines`,
            old_id: 'thermal:machines/press/press_vine_to_latex'
        },

        {
            ingredients: [
                {
                    'amount': 50,
                    'fluid': 'minecraft:water',
                    'nbt': {}
                },
                {'item': 'minecraft:dandelion'},
            ],
            results: [{'amount': 50, 'fluid': 'thermal:latex'}],
            id: `${id_prefix}latex_from_flowers`,
            old_id: 'thermal:machines/press/press_dandelion_to_latex'
        },

        {
            ingredients: [
                {
                    'amount': 50,
                    'fluid': 'minecraft:water',
                    'nbt': {}
                },
                {'tag': 'minecraft:logs'},
            ],
            results: [{'amount': 50, 'fluid': 'thermal:latex'}],
            id: `${id_prefix}latex_from_logs`
        },

        {
            ingredients: [
                {
                    'amount': 300,
                    'fluid': 'thermal:latex',
                    'nbt': {}
                }
            ],
            results: [{'count': 3, 'item': 'thermal:rubber'}],
            id: `${id_prefix}rubber_from_latex`,
            old_id: 'thermal:rubber_3',
        }
        
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:compacting',
            ingredients: recipe.ingredients,
            results: recipe.results
        })
        .id(recipe.id)
    });
});