ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/cooking/';
    
    const recipes = [

        {
            cookingtime: 100,
            exp: 0.35,
            result: {'item': 'dreamland:bowl_of_jelly'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                },
                {
                    'item': 'dreamland:hive_jelly',
                }],
            tab: 'meals',
            id: `${id_prefix}bowl_of_jelly`,
            old_id: 'dreamland:bowl_of_jelly'
        },

        {
            cookingtime: 200,
            exp: 1.0,
            result: {'item': 'aquaculture:turtle_soup'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'tag': 'aquaculture:turtle',
                },
                {
                    'tag': 'forge:crops/carrot',
                }],
            tab: 'meals',
            id: `${id_prefix}turtle_soup`,
            old_id: 'aquaculture:turtle_soup'
        },

        {
            cookingtime: 200,
            exp: 1.0,
            result: {'item': 'environmental:truffle_mash'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'minecraft:potato',
                },
                {
                    'item': 'minecraft:potato',
                },
                {
                    'item': 'minecraft:potato',
                },
                {
                    'item': 'environmental:truffle',
                },
                {
                    'item': 'gourmet:butter',
                },
            ],
            tab: 'meals',
            id: `${id_prefix}truffle_mash`,
            old_id: 'environmental:truffle_mash'
        },

        {
            cookingtime: 200,
            exp: 0.5,
            result: {'item': 'farmersrespite:tea_curry'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'farmersdelight:rice',
                },
                {
                    'tag': 'forge:crops/cabbage',
                },
                {
                    'tag': 'forge:crops/onion',
                },
                {
                    'tag': 'croptopia:chicken_replacements',
                },
                {
                    'tag': 'forge:tea_leaves/yellow',
                },
                {
                    'item': 'gourmet:butter',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}tea_curry`,
            old_id: 'farmersrespite:cooking/tea_curry'
        },

        {
            cookingtime: 200,
            exp: 0.5,
            result: {'item': 'aquamirae:sea_stew'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'farmersdelight:stuffed_potato',
                },
                {
                    'item': 'aquamirae:esca',
                },
                {
                    'item': 'aquamirae:cooked_spinefish',
                },
                {
                    'item': 'aquamirae:oxygelium',
                },
                {
                    'item': 'aquamirae:fin',
                },
                {
                    'item': 'minecraft:pufferfish',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}sea_stew`,
            old_id: 'aquamirae:sea_stew'
        },

        {
            cookingtime: 200,
            exp: 0.5,
            result: {'item': 'aquamirae:poseidons_breakfast'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'minecraft:ink_sac',
                },
                {
                    'item': 'aquamirae:sea_stew',
                },
                {
                    'item': 'minecraft:sea_pickle',
                },
                {
                    'item': 'minecraft:nautilus_shell',
                },
                {
                    'item': 'minecraft:tropical_fish',
                },
                {
                    'item': 'minecraft:enchanted_golden_apple',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}poseidons_breakfast`,
            old_id: 'aquamirae:poseidons_breakfast'
        },

        {
            cookingtime: 200,
            exp: 0.5,
            result: {'item': 'nethersdelight:stuffed_hoglin'},
            ingredients: [
                {
                    'item': 'farmersdelight:nether_salad',
                },
                {
                    'item': 'nethersdelight:raw_stuffed_hoglin',
                },
                {
                    'item': 'farmersdelight:nether_salad',
                },
                {
                    'item': 'farmersrespite:nether_wart_sourdough',
                },
            ],
            tab: 'meals',
            id: `${id_prefix}stuffed_hoglin`,
            old_id: 'nethersdelight:cooking/stuffed_hoglin'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'croptopia:cinnamon_roll'},
            ingredients: [
                {
                    'tag': 'forge:milks',
                },
                {
                    'tag': 'forge:doughs',
                },
                {
                    'tag': 'forge:eggs',
                },
                {
                    'tag': 'forge:butter',
                },
                {
                    'tag': 'forge:spices/groundcinnamon',
                },
                {
                    'item': 'minecraft:sugar',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}cinnamon_roll`,
            old_id: 'croptopia:cinnamon_roll'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'gourmet:cooked_fries'},
            ingredients: [
                {
                    'item': 'gourmet:raw_potato_fry',
                },
                {
                    'item': 'gourmet:raw_potato_fry',
                },
                {
                    'item': 'gourmet:raw_potato_fry',
                },
                {
                    'item': 'gourmet:raw_potato_fry',
                },
                {
                    'item': 'gourmet:seed_oil_bottle',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}cooked_fries`
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'farmersdelight:fish_stew'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'farmersdelight:tomato_sauce',
                },
                {
                    'item': 'farmersdelight:onion',
                },
                {
                    'item': 'aquaculture:fish_fillet_raw',
                },
                {
                    'item': 'aquaculture:fish_fillet_raw',
                },
                {
                    'item': 'aquaculture:fish_fillet_raw',
                },
            ],
            tab: 'meals',
            id: `${id_prefix}fish_stew`
        },

        {
            cookingtime: 200,
            exp: 0.1,
            result: {'item': 'croptopia:fish_and_chips'},
            ingredients: [
                {
                    'item': 'minecraft:potato',
                },
                {
                    'item': 'croptopia:salt',
                },
                {
                    'item': 'croptopia:pepper',
                },
                {
                    'tag': 'forge:flour',
                },
                {
                    'item': 'aquaculture:fish_fillet_raw',
                },
                {
                    'item': 'aquaculture:fish_fillet_raw',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}fish_and_chips`
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'hmag:bat_stew'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'hmag:bat_wing',
                },
                {
                    'item': 'minecraft:wheat',
                },
                {
                    'tag': 'forge:vegetables',
                }
            ],
            tab: 'meals',
            old_id: 'hmag:bat_stew',
            id: `${id_prefix}bat_stew`
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'hmag:swampy_stew'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'hmag:cooked_savagefang_meat',
                },
                {
                    'item': 'minecraft:seagrass',
                },
                {
                    'tag': 'forge:mushrooms',
                },
                {
                    'tag': 'forge:cooked_calamari',
                }
            ],
            tab: 'meals',
            old_id: 'hmag:swampy_stew',
            id: `${id_prefix}swampy_stew`
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'hmag:spectral_soup'},
            container: {'item': 'minecraft:bowl'},
            ingredients: [
                {
                    'item': 'minecraft:glowstone_dust',
                },
                {
                    'tag': 'forge:mushrooms',
                },
                {
                    'tag': 'forge:mushrooms',
                },
            ],
            tab: 'meals',
            old_id: 'hmag:spectral_soup',
            id: `${id_prefix}spectral_soup`
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'hmag:lightning_soup'},
            ingredients: [
                {
                    'item': 'hmag:spectral_soup',
                },
                {
                    'item': 'hmag:lightning_particle',
                },
                {
                    'item': 'hmag:lightning_particle',
                },
                {
                    'item': 'minecraft:glow_ink_sac',
                },
                {
                    'item': 'minecraft:glowstone_dust',
                },
                {
                    'item': 'minecraft:gunpowder',
                }
            ],
            tab: 'meals',
            old_id: 'hmag:lightning_soup',
            id: `${id_prefix}lightning_soup`
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'farmersdelight:melon_juice'},
            container: {'item': 'minecraft:glass_bottle'},
            ingredients: [
                {
                    'item': 'minecraft:melon_slice',
                },
                {
                    'item': 'minecraft:melon_slice',
                },
                {
                    'item': 'minecraft:melon_slice',
                },
                {
                    'item': 'minecraft:melon_slice',
                },
                {
                    'item': 'minecraft:sugar',
                }
            ],
            tab: 'drinks',
            id: `${id_prefix}melon_juice`,
            old_id: 'farmersdelight:melon_juice'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'windswept:wild_berry_juice'},
            container: {'item': 'minecraft:glass_bottle'},
            ingredients: [
                {
                    'tag': 'forge:fruits/wild_berries',
                },
                {
                    'tag': 'forge:fruits/wild_berries',
                },
                {
                    'tag': 'forge:fruits/wild_berries',
                },
                {
                    'item': 'minecraft:sugar',
                }
            ],
            tab: 'drinks',
            id: `${id_prefix}glow_berry_juice`,
            old_id: 'windswept:wild_berry_juice'
        }
    ]

    recipes.forEach((recipe) => {
        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        if (recipe.container) {
            event.custom({
                type: 'farmersdelight:cooking',
                container: recipe.container,
                cookingtime: recipe.cookingtime,
                experience: recipe.exp,
                ingredients: recipe.ingredients,
                recipe_book_tab: recipe.tab,
                result: recipe.result
            })
            .id(recipe.id)
        } else {
            event.custom({
                type: 'farmersdelight:cooking',
                cookingtime: recipe.cookingtime,
                experience: recipe.exp,
                ingredients: recipe.ingredients,
                recipe_book_tab: recipe.tab,
                result: recipe.result
            })
            .id(recipe.id)
        }
    });
});