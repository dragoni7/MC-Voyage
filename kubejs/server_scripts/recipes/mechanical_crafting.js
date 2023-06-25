ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/mechanicalcrafting/';
    const recipes = [
        {
            mirrored: false,
            key: {
                'B': {
                    'tag': 'forge:buckets/honey',
                },
                'P': {
                    'item': 'create:precision_mechanism',
                },
                'I': {
                    'tag': 'forge:ingots/cast_iron',
                },
                'F': {
                    'item': 'minecraft:furnace',
                }
            },
            pattern: [
                'IBI',
                'IPI',
                'IFI'
            ],
            result: {'item': 'productivebees:honey_generator'},
            old_id: 'productivebees:honey_generator',
            id: `${id_prefix}honey_generator`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'create:mechanical_crafting',
            acceptMirrored: recipe.mirrored,
            key: recipe.key,
            pattern: recipe.pattern,
            result: recipe.result
        })
        .id(recipe.id)
    });
});