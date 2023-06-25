ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/extruding/';
    
    const recipes = [
        {
            output: {'item': 'minecraft:andesite'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'minecraft:diorite'
            },
            id: `${id_prefix}andesite`
        },

        {
            output: {'item': 'minecraft:diorite'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'minecraft:quartz_block'
            },
            id: `${id_prefix}diorite`
        },

        {
            output: {'item': 'minecraft:granite'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'minecraft:terracotta'
            },
            id: `${id_prefix}granite`
        },

        {
            output: {'item': 'quark:jasper'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'quark:jasper'
            },
            id: `${id_prefix}jasper`
        },

        {
            output: {'item': 'quark:myalite'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'quark:myalite'
            },
            id: `${id_prefix}myalite`
        },

        {
            output: {'item': 'quark:shale'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'quark:shale'
            },
            id: `${id_prefix}shale`
        },

        {
            output: {'item': 'quark:permafrost'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'item': 'minecraft:blue_ice'
                }],
            catalyst: {
                'item': 'minecraft:snow_block'
            },
            id: `${id_prefix}permafrost`
        },

        {
            output: {'item': 'create:limestone'},
            input: [
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'create:limestone'
            },
            id: `${id_prefix}limestone`
        },

        {
            output: {'item': 'dreamland:tar_mud'},
            input: [
                {
                    'fluid': 'dreamland:tar_fluid',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:water',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'dreamland:tar_mud'
            },
            id: `${id_prefix}tar_mud`
        },

        {
            output: {'item': 'dreamland:dried_tar'},
            input: [
                {
                    'fluid': 'dreamland:tar_fluid',
                    'amount': 1000
                },
                {
                    'fluid': 'minecraft:lava',
                    'amount': 1000
                }],
            catalyst: {
                'item': 'dreamland:dried_tar'
            },
            id: `${id_prefix}dried_tar`
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.catalyst) {
            event.custom({
                type: 'create_mechanical_extruder:extruding',
                ingredients: recipe.input,
                catalyst: recipe.catalyst,
                result: recipe.output
            })
            .id(recipe.id)
        }
    });
});