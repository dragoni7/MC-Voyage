ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/pressing/';
    const recipes = [
        {
            ingredients: [
                {'item': 'ae2:silicon'},
                {'item': 'silentgear:bort'},
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
                {'item': 'pamhc2crops:canolaitem'},
                {'item': 'pamhc2crops:canolaitem'},
                {'item': 'pamhc2crops:canolaitem'}
            ],
            results: [{'count': 2, 'item': 'pamhc2foodcore:cookingoilitem'}],
            id: `${id_prefix}cookingoilitem`,
            old_id: 'pamhc2crops:cookingoil_x4_canola_x2',
        },

        {
            ingredients: [
                {'tag': 'forge:mushrooms'},
                {'tag': 'forge:mushrooms'},
                {'tag': 'forge:mushrooms'}
            ],
            results: [{'item': 'pamhc2foodextended:mushroomoilitem'}],
            id: `${id_prefix}mushroomoilitem`,
            old_id: 'pamhc2foodextended:mushroomoilitem',
        },

        {
            ingredients: [
                {'tag': 'forge:crops/sesameseeds'},
                {'tag': 'forge:crops/sesameseeds'},
                {'tag': 'forge:crops/sesameseeds'},
            ],
            results: [{'item': 'pamhc2foodextended:sesameoilitem'}],
            id: `${id_prefix}sesameoilitem`,
            old_id: 'pamhc2foodextended:sesameoilitem',
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
        
    ]

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
    })
})