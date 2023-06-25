ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/sequential_assembly/';
    const recipes = [

        {
            ingredient: [
                {'item': 'kubejs:stainless_casing'}
            ],
            loops: 4,
            results: [{'item': 'ae2:controller'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:stainless_casing'},
                    {'tag': 'forge:gems/fluix'}
                ],
                'results': [
                    {'item': 'kubejs:stainless_casing'}
                ]},
                {
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:stainless_casing'},
                    {'item': 'thermalendergy:prismalium_plate'}
                ],
                'results': [
                    {'item': 'kubejs:stainless_casing'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:stainless_casing'},
                        {'item': 'kubejs:infused_mechanism'}
                    ],
                    'results': [
                        {'item': 'kubejs:stainless_casing'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:stainless_casing'},
                        {'tag': 'forge:ingots/plasteel'}
                    ],
                    'results': [
                        {'item': 'kubejs:stainless_casing'}
                ]},
                ],
            transitionalItem: {'item': 'kubejs:stainless_casing'},
            old_id: 'ae2:network/blocks/controller',
            id: `${id_prefix}controller`
        },

        {
            ingredient: [
                {'item': 'kubejs:azure_casing'}
            ],
            loops: 3,
            results: [{'item': 'ad_astra:nasa_workbench'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:azure_casing'},
                    {'item': 'kubejs:redstone_mechanism'}
                ],
                'results': [
                    {'item': 'kubejs:azure_casing'}
                ]},
                {
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:azure_casing'},
                    {'item': 'kubejs:overclocked_mechanism'}
                ],
                'results': [
                    {'item': 'kubejs:azure_casing'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:azure_casing'},
                        {'item': 'kubejs:infused_mechanism'}
                    ],
                    'results': [
                        {'item': 'kubejs:azure_casing'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'kubejs:azure_casing'},
                        {'item': 'kubejs:stainless_mechanism'}
                    ],
                    'results': [
                        {'item': 'kubejs:azure_casing'}
                ]},
                ],
            transitionalItem: {'item': 'kubejs:azure_casing'},
            old_id: 'ad_astra:recipes/nasa_workbench',
            id: `${id_prefix}nasa_workbench`
        },

        {
            ingredient: [
                {'item': 'ad_astra:steel_block'}
            ],
            loops: 3,
            results: [{'item': 'ad_astra:rocket_nose_cone'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'ad_astra:steel_block'},
                    {'item': 'kubejs:redstone_mechanism'}
                ],
                'results': [
                    {'item': 'ad_astra:steel_block'}
                ]},
                {
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'ad_astra:steel_block'},
                    {'item': 'create:copper_sheet'}
                ],
                'results': [
                    {'item': 'ad_astra:steel_block'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'ad_astra:steel_block'},
                        {'item': 'kubejs:stainless_steel_ingot'}
                    ],
                    'results': [
                        {'item': 'ad_astra:steel_block'}
                ]},
                {
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'ad_astra:steel_block'},
                        {'item': 'kubejs:stainless_steel_ingot'}
                    ],
                    'results': [
                        {'item': 'ad_astra:steel_block'}
                ]},
                ],
            transitionalItem: {'item': 'ad_astra:steel_block'},
            old_id: 'ad_astra:recipes/rocket_nose_cone',
            id: `${id_prefix}rocket_nose_cone`
        },

        // NEW RECIPES
        {
            ingredient: [
                {'item': 'ae2:silicon'}
            ],
            loops: 1,
            results: [{'item': 'kubejs:control_circuit_base'}],
            sequence: [{ 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'ae2:silicon'},
                    {'tag': 'forge:ingots/osmium'}
                ],
                'results': [
                    {'item': 'ae2:silicon'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'ae2:silicon'},
                        {'item': 'minecraft:clay_ball'}
                    ],
                    'results': [
                        {'item': 'ae2:silicon'}
                ]},
                { 
                    'type': 'create:pressing',
                    'ingredients': [
                        {'item': 'ae2:silicon'},
                    ],
                    'results': [
                        {'item': 'ae2:silicon'}
                ]},
                ],
            transitionalItem: {'item': 'ae2:silicon'},
            id: `${id_prefix}control_circuit_base`
        },

        {
            ingredient: [
                {'item': 'minecraft:iron_nugget'}
            ],
            loops: 1,
            results: [{'item': 'thermal:redstone_servo'}],
            sequence: [
                { 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'minecraft:iron_nugget'},
                    {'item': 'thermal:bronze_gear'},
                ],
                'results': [
                    {'item': 'minecraft:iron_nugget'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'minecraft:iron_nugget'},
                        {'item': 'minecraft:redstone'}
                    ],
                    'results': [
                        {'item': 'minecraft:iron_nugget'}
                ]}
                ],
            transitionalItem: {'item': 'minecraft:iron_nugget'},
            id: `${id_prefix}redstone_servo`,
            old_id: 'thermal:redstone_servo'
        },

        {
            type: 'create:sequenced_assembly',
            ingredient: [
                {'item': 'create:sturdy_sheet'}
            ],
            loops: 1,
            results: [{'item': 'createteleporters:quantum_mechanism'}],
            sequence: [
                { 
                    'type': 'create:filling',
                    'ingredients': [
                        {'item': 'createteleporters:incomplete_q_mechanism'},
                        {
                            "amount": 250,
                            "fluid": "createteleporters:quantum_fluid",
                            "nbt": {}
                        }
                    ],
                    'results': [
                        {'item': 'createteleporters:incomplete_q_mechanism'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'createteleporters:incomplete_q_mechanism'},
                        {'item': 'createteleporters:advanced_part'}
                    ],
                    'results': [
                        {'item': 'createteleporters:incomplete_q_mechanism'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'createteleporters:incomplete_q_mechanism'},
                        {'item': 'kubejs:plasteel_mechanism'}
                    ],
                    'results': [
                        {'item': 'createteleporters:incomplete_q_mechanism'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'createteleporters:incomplete_q_mechanism'},
                        {'item': 'kubejs:overclocked_mechanism'}
                    ],
                    'results': [
                        {'item': 'createteleporters:incomplete_q_mechanism'}
                ]},
                { 
                    'type': 'create:deploying',
                    'ingredients': [
                        {'item': 'createteleporters:incomplete_q_mechanism'},
                        {'item': 'silentgear:tyrian_steel_ingot'}
                    ],
                    'results': [
                        {'item': 'createteleporters:incomplete_q_mechanism'}
                ]},
                { 
                    'type': 'create:pressing',
                    'ingredients': [
                        {'item': 'createteleporters:incomplete_q_mechanism'},
                    ],
                    'results': [
                        {'item': 'createteleporters:incomplete_q_mechanism'}
                ]},
                { 
                    'type': 'create:pressing',
                    'ingredients': [
                        {'item': 'createteleporters:incomplete_q_mechanism'},
                    ],
                    'results': [
                        {'item': 'createteleporters:incomplete_q_mechanism'}
                ]}
                ],
            transitionalItem: {'item': 'createteleporters:incomplete_q_mechanism'},
            id: `${id_prefix}quantum_mechanism`,
            old_id: 'createteleporters:quantum_mechanism_recipe'
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }
        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: recipe.ingredient,
            loops: recipe.loops,
            results: recipe.results,
            sequence: recipe.sequence,
            transitionalItem: recipe.transitionalItem
        })
        .id(recipe.id)
    });

    // GEARS

    function GearAssemblyRecipe(material) {

        let s = material.split(':')
        let material_name = s[1].replace('_ingot', '')
        let mod = s[0]
        if (mod == 'minecraft') {
            mod = 'thermal'
        }

        let result_id = mod + ':' + material_name + '_gear'

        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: [
                {'item': material}
            ],
            loops: 2,
            results: [{'item': result_id}],
            sequence: [
                { 
                'type': 'create:deploying',
                'ingredients': [
                    {'item': 'kubejs:incomplete_' + material_name + '_gear'},
                    {'item': material}
                ],
                'results': [
                    {'item': 'kubejs:incomplete_' + material_name + '_gear'},
                ]},
                { 
                'type': 'create:pressing',
                'ingredients': [
                    {'item': 'kubejs:incomplete_' + material_name + '_gear'}
                ],
                'results': [
                    {'item': 'kubejs:incomplete_' + material_name + '_gear'}
                ]}
                ],
            transitionalItem: {'item': 'kubejs:incomplete_' + material_name + '_gear'}
        })
        .id(`${id_prefix}` + material_name + '_gear')
    }

    const gear_materials = [
        'thermal:rose_gold_ingot',
        'minecraft:iron_ingot',
        'minecraft:gold_ingot',
        'minecraft:copper_ingot',
        'minecraft:netherite_ingot',
        'thermal:signalum_ingot',
        'thermal:lumium_ingot',
        'thermal:enderium_ingot',
        'thermal:tin_ingot',
        'thermal:lead_ingot',
        'thermal:silver_ingot',
        'thermal:nickel_ingot',
        'thermal:bronze_ingot',
        'thermal:electrum_ingot',
        'thermal:invar_ingot',
        'thermal:constantan_ingot',
        'minecraft:lapis_lazuli',
        'minecraft:diamond',
        'minecraft:emerald',
        'minecraft:quartz',
        'thermalendergy:prismalium_ingot',
        'thermalendergy:melodium_ingot',
        'thermalendergy:stellarium_ingot'
    ]

    event.remove({ mod: 'thermal', output: '#forge:gears'})
    event.remove({ mod: 'thermalendergy', output: '#forge:gears/prismalium'})
    event.remove({ mod: 'thermalendergy', output: '#forge:gears/melodium'})
    event.remove({ mod: 'thermalendergy', output: '#forge:gears/stellarium'})

    gear_materials.forEach((material) => {
        GearAssemblyRecipe(material)
    });

    // MECHANISMS

    function MechanismAssemblyRecipe(mechanism) {
        let input = mechanism.input_0
        event.custom(
            {
                type: 'create:sequenced_assembly',
                ingredient: [
                    {'item': input}
                ],
                loops: 5,
                results: [{'item': 'kubejs:' + mechanism.name + '_mechanism'}],
                sequence: [
                    { 
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'kubejs:incomplete_' + mechanism.name + '_mechanism'},
                            {'item': mechanism.input_1}
                        ],
                        'results': [
                            {'item': 'kubejs:incomplete_' + mechanism.name + '_mechanism'}
                    ]},
                    { 
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'kubejs:incomplete_' + mechanism.name + '_mechanism'},
                            {'item': mechanism.input_2}
                        ],
                        'results': [
                            {'item': 'kubejs:incomplete_' + mechanism.name + '_mechanism'}
                    ]},
                    { 
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': 'kubejs:incomplete_' + mechanism.name + '_mechanism'},
                            {'item': mechanism.input_3}
                        ],
                        'results': [
                            {'item': 'kubejs:incomplete_' + mechanism.name + '_mechanism'}
                    ]},
                    ],
                transitionalItem: {'item': 'kubejs:incomplete_' + mechanism.name + '_mechanism'},
            }
        ).id(`${id_prefix}${mechanism.name}_mechanism`)
    }

    const mechanisms = [
        {
            name: 'infused',
            input_0: 'kubejs:boss_essence',
            input_1: 'create:cogwheel',
            input_2: 'create:large_cogwheel',
            input_3: 'spirit:soul_steel_ingot'
        },

        {
            name: 'redstone',
            input_0: 'thermal:rf_coil',
            input_1: 'create:cogwheel',
            input_2: 'ad_astra:steel_ingot',
            input_3: 'thermal:cured_rubber'
        },

        {
            name: 'bio',
            input_0: 'biomancy:mob_marrow',
            input_1: 'create:cogwheel',
            input_2: 'minecraft:beef',
            input_3: 'minecraft:bone_meal'
        },

        {
            name: 'stainless',
            input_0: 'kubejs:stainless_steel_ingot',
            input_1: 'create:cogwheel',
            input_2: 'blue_skies:moonstone',
            input_3: 'thermal:invar_gear'
        },

        {
            name: 'plasteel',
            input_0: 'silentcompat:plasteel_ingot',
            input_1: 'create:cogwheel',
            input_2: 'undergarden:froststeel_ingot',
            input_3: 'thermal:enderium_gear'
        },

        {
            name: 'overclocked',
            input_0: 'ae2:engineering_processor',
            input_1: 'silentgear:azure_electrum_ingot',
            input_2: 'thermalendergy:prismalium_gear',
            input_3: 'thermalendergy:melodium_gear'
        }
    ]

    mechanisms.forEach((mechanism) => {
        MechanismAssemblyRecipe(mechanism)
    })

    // ENGINES

    function EngineAssemblyRecipe(engine) {
        let input = engine.input_0
        event.custom(
            {
                type: 'create:sequenced_assembly',
                ingredient: [
                    {'item': input}
                ],
                loops: 5,
                results: [{'item': 'ad_astra:' + engine.name + '_engine'}],
                sequence: [
                    { 
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': input},
                            {'item': engine.input_1}
                        ],
                        'results': [
                            {'item': input}
                    ]},
                    { 
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': input},
                            {'item': engine.input_2}
                        ],
                        'results': [
                            {'item': input}
                    ]},
                    { 
                        'type': 'create:deploying',
                        'ingredients': [
                            {'item': input},
                            {'item': engine.input_3}
                        ],
                        'results': [
                            {'item': input}
                    ]},
                    ],
                transitionalItem: {'item': 'kubejs:incomplete_' + engine.name + '_engine'},
            }
        ).id(`${id_prefix}${engine.name}_engine`)

        event.remove({id: 'ad_astra:recipes/' + engine.name + '_engine'})
    }

    const engines = [
        {
            name: 'steel',
            input_0: 'ad_astra:engine_frame',
            input_1: 'ad_astra:steel_plate',
            input_2: 'kubejs:overclocked_mechanism',
            input_3: 'silentcompat:voidmetal_ingot'
        },

        {
            name: 'desh',
            input_0: 'ad_astra:engine_frame',
            input_1: 'ad_astra:desh_plate',
            input_2: 'kubejs:overclocked_mechanism',
            input_3: 'silentgear:tyrian_steel_ingot'
        },

        {
            name: 'ostrum',
            input_0: 'ad_astra:engine_frame',
            input_1: 'ad_astra:ostrum_plate',
            input_2: 'kubejs:overclocked_mechanism',
            input_3: 'thermalendergy:stellarium_ingot'
        },

        {
            name: 'calorite',
            input_0: 'ad_astra:engine_frame',
            input_1: 'ad_astra:calorite_plate',
            input_2: 'kubejs:overclocked_mechanism',
            input_3: 'kubejs:impossible_compound'
        }
    ]

    engines.forEach((engine) => {
        EngineAssemblyRecipe(engine)
    })
});