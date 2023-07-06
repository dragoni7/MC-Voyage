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
                    'tag': 'forge:raw_chicken',
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
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:succotashitem'},
            ingredients: [
                {
                    'tag': 'forge:crops/bean',
                },
                {
                    'tag': 'forge:crops/corn',
                },
                {
                    'tag': 'forge:crops/onion',
                },
                {
                    'tag': 'forge:crops/spiceleaf',
                },
                {
                    'tag': 'forge:crops/tomato',
                },
                {
                    'tag': 'forge:butter',
                },
            ],
            tab: 'meals',
            id: `${id_prefix}succotashitem`,
            old_id: 'pamhc2foodextended:succotashitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:potroastitem'},
            ingredients: [
                {
                    'tag': 'forge:crops/potato',
                },
                {
                    'item': 'gourmet:carrot_slices',
                },
                {
                    'item': 'gourmet:carrot_slices',
                },
                {
                    'tag': 'forge:rawbeef',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}potroastitem`,
            old_id: 'pamhc2foodcore:potroastitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:dhalitem'},
            ingredients: [
                {
                    'tag': 'forge:crops/pea',
                },
                {
                    'tag': 'forge:spices/garammasala',
                },
                {
                    'tag': 'forge:crops/mustardseeds',
                },
                {
                    'tag': 'forge:crops/onion',
                },
                {
                    'tag': 'forge:crops/tomato',
                },
                {
                    'tag': 'forge:crops/garlic',
                },
            ],
            tab: 'meals',
            id: `${id_prefix}dhalitem`,
            old_id: 'pamhc2foodextended:dhalitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:guisoitem'},
            ingredients: [
                {
                    'tag': 'forge:crops/pea',
                },
                {
                    'tag': 'forge:pasta',
                },
                {
                    'tag': 'forge:rawbeef',
                },
                {
                    'tag': 'forge:crops/sweet_potato',
                },
                {
                    'tag': 'forge:crops/spiceleaf',
                },
                {
                    'tag': 'forge:pasta',
                },
            ],
            tab: 'meals',
            id: `${id_prefix}guisoitem`,
            old_id: 'pamhc2foodextended:guisoitem'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:potatosoupitem'},
            ingredients: [
                {
                    'tag': 'forge:crops/potato',
                },
                {
                    'tag': 'forge:stock',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}potatosoupitem`,
            old_id: 'pamhc2foodcore:potatosoupitem'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:donutitem'},
            ingredients: [
                {
                    'tag': 'forge:batter',
                },
                {
                    'tag': 'forge:cookingoil',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}donutitem`,
            old_id: 'pamhc2foodcore:donutitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:haggisitem'},
            ingredients: [
                {
                    'tag': 'silentcompat:rotten_flesh',
                },
                {
                    'item': 'minecraft:spider_eye',
                },
                {
                    'tag': 'forge:crops/onion',
                },
                {
                    'tag': 'forge:crops/oats',
                },
                {
                    'tag': 'forge:spices/saltandpepper',
                },
                {
                    'tag': 'forge:crops/spiceleaf',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}haggisitem`,
            old_id: 'pamhc2foodextended:haggisitem'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:macncheeseitem'},
            ingredients: [
                {
                    'tag': 'forge:pasta',
                },
                {
                    'tag': 'forge:cheese',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}macncheeseitem`,
            old_id: 'pamhc2foodcore:macncheeseitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:cornedbeefitem'},
            ingredients: [
                {
                    'tag': 'forge:rawbeef',
                },
                {
                    'tag': 'forge:spices/saltandpepper',
                },
                {
                    'tag': 'forge:sugar',
                },
                {
                    'tag': 'forge:spices/groundcinnamon',
                },
                {
                    'tag': 'forge:crops/mustardseeds',
                },
                {
                    'tag': 'forge:crops/ginger',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}cornedbeefitem`,
            old_id: 'pamhc2foodextended:cornedbeefitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:chickencurryitem'},
            ingredients: [
                {
                    'tag': 'forge:rawchicken',
                },
                {
                    'tag': 'forge:spices/currypowder',
                },
                {
                    'tag': 'forge:crops/rice',
                },
                {
                    'tag': 'forge:crops/chilipepper',
                },
                {
                    'tag': 'forge:crops/coconut',
                },
                {
                    'item': 'pamhc2foodcore:yogurtitem',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}chickencurryitem`,
            old_id: 'pamhc2foodextended:chickencurryitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:chimichangaitem'},
            ingredients: [
                {
                    'tag': 'forge:rawbeef',
                },
                {
                    'tag': 'forge:salad_ingredients',
                },
                {
                    'tag': 'forge:crops/rice',
                },
                {
                    'tag': 'forge:tortilla',
                },
                {
                    'tag': 'forge:salsa',
                },
                {
                    'tag': 'forge:cream',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}chimichangaitem`,
            old_id: 'pamhc2foodextended:chimichangaitem'
        },

        {
            cookingtime: 100,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:vinegaritem'},
            ingredients: [
                {
                    'tag': 'forge:vinegar_ingredients',
                }
            ],
            tab: 'misc',
            id: `${id_prefix}vinegaritem`,
            old_id: 'pamhc2foodcore:vinegaritem_x1_vinegar_ingredients'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:jambalayaitem'},
            ingredients: [
                {
                    'tag': 'forge:rawchicken',
                },
                {
                    'tag': 'forge:spices/saltandpepper',
                },
                {
                    'tag': 'forge:sausage',
                },
                {
                    'tag': 'forge:stock',
                },
                {
                    'tag': 'forge:crops/onion',
                },
                {
                    'tag': 'forge:crops/bellpepper',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}jambalayaitem`,
            old_id: 'pamhc2foodextended:jambalayaitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:chiliitem'},
            ingredients: [
                {
                    'tag': 'forge:rawmeats',
                },
                {
                    'tag': 'forge:spices/saltandpepper',
                },
                {
                    'tag': 'forge:crops/chilipepper',
                },
                {
                    'tag': 'forge:crops/tomato',
                },
                {
                    'tag': 'forge:crops/scallion',
                },
                {
                    'tag': 'forge:crops/bean',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}chiliitem`,
            old_id: 'pamhc2foodextended:chiliitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:stewitem'},
            ingredients: [
                {
                    'tag': 'forge:rawmeats',
                },
                {
                    'tag': 'forge:vegetables',
                },
                {
                    'tag': 'forge:vegetables',
                },
                {
                    'tag': 'forge:vegetables',
                },
                {
                    'tag': 'forge:flour',
                },
                {
                    'tag': 'forge:spices/saltandpepper',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}stewitem`,
            old_id: 'pamhc2foodcore:stewitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:pizzasoupitem'},
            ingredients: [
                {
                    'item': 'pamhc2foodextended:tomatosoupitem',
                },
                {
                    'item': 'brewinandchewin:pizza_slice',
                },
                {
                    'item': 'brewinandchewin:pizza_slice',
                },
                {
                    'item': 'brewinandchewin:pizza_slice',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}pizzasoupitem`,
            old_id: 'pamhc2foodextended:pizzasoupitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:potatoandleeksoupitem'},
            ingredients: [
                {
                    'tag': 'forge:stock',
                },
                {
                    'tag': 'forge:crops/potato',
                },
                {
                    'tag': 'forge:crops/leek',
                },
                {
                    'tag': 'forge:cream',
                },
                {
                    'tag': 'forge:spices/saltandpepper',
                },
                {
                    'tag': 'forge:spices/spiceleaf',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}potatoandleeksoupitem`,
            old_id: 'pamhc2foodextended:potatoandleeksoupitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:chickengumboitem'},
            ingredients: [
                {
                    'tag': 'forge:stock',
                },
                {
                    'tag': 'forge:crops/okra',
                },
                {
                    'tag': 'forge:crops/celery',
                },
                {
                    'tag': 'forge:rawchicken',
                },
                {
                    'tag': 'forge:crops/onion',
                },
                {
                    'tag': 'forge:crops/bellpepper',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}chickengumboitem`,
            old_id: 'pamhc2foodextended:chickengumboitem'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:jellydonutitem'},
            ingredients: [
                {
                    'tag': 'forge:cookingoil',
                },
                {
                    'tag': 'forge:jellies',
                },
                {
                    'tag': 'forge:batter',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}jellydonutitem`,
            old_id: 'pamhc2foodcore:jellydonutitem'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:chocolatedonutitem'},
            ingredients: [
                {
                    'tag': 'forge:cookingoil',
                },
                {
                    'tag': 'forge:cocoapowder',
                },
                {
                    'tag': 'forge:batter',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}chocolatedonutitem`,
            old_id: 'pamhc2foodcore:chocolatedonutitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:peaandhamsoupitem'},
            ingredients: [
                {
                    'tag': 'forge:rawpork',
                },
                {
                    'tag': 'forge:crops/peas',
                },
                {
                    'tag': 'forge:crops/onion',
                },
                {
                    'tag': 'forge:crops/carrot',
                },
                {
                    'tag': 'forge:crops/celery',
                },
                {
                    'tag': 'forge:spices/saltandpepper',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}peaandhamsoupitem`,
            old_id: 'pamhc2foodextended:peaandhamsoupitem'
        },

        {
            cookingtime: 200,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:boiledeggitem'},
            ingredients: [
                {
                    'item': 'minecraft:egg',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}boiledeggitem`,
            old_id: 'pamhc2foodcore:boiledeggitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:pumpkinsoupitem'},
            ingredients: [
                {
                    'item': 'farmersdelight:pumpkin_slice',
                },
                {
                    'item': 'farmersdelight:pumpkin_slice',
                },
                {
                    'item': 'farmersdelight:pumpkin_slice',
                },
                {
                    'item': 'farmersdelight:pumpkin_slice',
                },
                {
                    'item': 'farmersdelight:pumpkin_slice',
                },
                {
                    'tag': 'forge:stock',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}pumpkinsoupitem`,
            old_id: 'pamhc2foodcore:pumpkinsoupitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:chickennuggetitem'},
            ingredients: [
                {
                    'item': 'pamhc2foodcore:groundchickenitem',
                },
                {
                    'tag': 'forge:flour',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}chickennuggetitem`,
            old_id: 'pamhc2foodcore:chickennuggetitem_x4'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodextended:porklomeinitem'},
            ingredients: [
                {
                    'tag': 'forge:rawpork',
                },
                {
                    'tag': 'forge:pasta',
                },
                {
                    'tag': 'forge:crops/onion',
                },
                {
                    'tag': 'forge:crops/cabbage',
                },
                {
                    'tag': 'forge:crops/garlic',
                },
                {
                    'tag': 'forge:soysauce',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}porklomeinitem`,
            old_id: 'pamhc2foodextended:porklomeinitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:pickledbeetsitem'},
            ingredients: [
                {
                    'item': 'minecraft:beetroot',
                },
                {
                    'item': 'minecraft:beetroot',
                },
                {
                    'item': 'minecraft:beetroot',
                },
                {
                    'tag': 'forge:vinegar',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}pickledbeetsitem`,
            old_id: 'pamhc2foodcore:pickledbeetsitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:carrotsoupitem'},
            ingredients: [
                {
                    'item': 'gourmet:carrot_slices',
                },
                {
                    'item': 'gourmet:carrot_slices',
                },
                {
                    'item': 'gourmet:carrot_slices',
                },
                {
                    'item': 'gourmet:carrot_slices',
                },
                {
                    'item': 'gourmet:carrot_slices',
                },
                {
                    'tag': 'forge:stock',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}carrotsoupitem`,
            old_id: 'pamhc2foodcore:carrotsoupitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:noodlesoupitem'},
            ingredients: [
                {
                    'tag': 'forge:pasta',
                },
                {
                    'tag': 'forge:pasta',
                },
                {
                    'tag': 'forge:pasta',
                },
                {
                    'tag': 'forge:pasta',
                },
                {
                    'tag': 'forge:stock',
                },
                {
                    'tag': 'forge:spices/saltandpepper',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}noodlesoupitem`,
            old_id: 'pamhc2foodcore:noodlesoupitem'
        },

        {
            cookingtime: 300,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:cottoncandyitem'},
            ingredients: [
                {
                    'tag': 'forge:sugar',
                },
                {
                    'tag': 'forge:sugar',
                },
                {
                    'tag': 'forge:sugar',
                },
                {
                    'tag': 'forge:dyes/pink',
                },
                {
                    'tag': 'forge:dyes/pink',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}cottoncandyitem`,
            old_id: 'pamhc2foodcore:cottoncandyitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:fishandchipsitem'},
            ingredients: [
                {
                    'tag': 'forge:fries',
                },
                {
                    'tag': 'forge:fries',
                },
                {
                    'tag': 'forge:rawfish',
                },
                {
                    'tag': 'forge:flour',
                },
                {
                    'tag': 'forge:cookingoil',
                }
            ],
            tab: 'meals',
            id: `${id_prefix}fishandchipsitem`,
            old_id: 'pamhc2foodcore:fishandchipsitem'
        },

        {
            cookingtime: 400,
            exp: 0.35,
            result: {'item': 'pamhc2foodcore:stockitem'},
            ingredients: [
                {
                    'tag': 'forge:stock_ingredients',
                },
                {
                    'tag': 'forge:bones',
                },
                {
                    'tag': 'forge:bones',
                },
            ],
            tab: 'meals',
            id: `${id_prefix}stockitem`,
            old_id: 'pamhc2foodcore:stockitem_x2_stock_ingredients'
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