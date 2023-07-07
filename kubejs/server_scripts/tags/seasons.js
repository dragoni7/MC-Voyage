//priority: 997
ServerEvents.tags('item', event => {

    event.add('sereneseasons:autumn_crops', [
        "culturaldelights:corn_kernels",
        "neapolitan:mint_sprout",
        "neapolitan:vanilla_pods"
    ])

    event.add('sereneseasons:winter_crops',[
        "neapolitan:mint_sprout"
    ])

    event.add('sereneseasons:spring_crops', [
        "createcafe:cassava_seeds",
        "createcafe:coffee_beans",
        "environmental:cattail_seeds",
        "supplementaries:flax_seeds",
        "silentgear:flax_seeds",
        "silentgear:fluffy_seeds",
        "neapolitan:strawberry_pips",
        "neapolitan:vanilla_pods"
    ])

    event.add('sereneseasons:summer_crops', [
        "culturaldelights:corn_kernels",
        "createcafe:cassava_seeds",
        "createcafe:coffee_beans",
        "environmental:cattail_seeds",
        "atmospheric:yucca_sapling",
        "supplementaries:flax_seeds",
        "silentgear:flax_seeds",
        "silentgear:fluffy_seeds",
        "culturaldelights:cucumber_seeds",
        "culturaldelights:eggplant_seeds",
        "culturaldelights:avocado_sapling",
        "culturaldelights:avocado_pit",
        "neapolitan:strawberry_pips",
        "neapolitan:adzuki_beans",
        "atmospheric:passion_vine"
    ])
})

ServerEvents.tags('block', event => {

    event.add('sereneseasons:autumn_crops', [
        "culturaldelights:corn",
        "culturaldelights:corn_upper",
        "neapolitan:mint",
        "neapolitan:vanilla_vine",
        "neapolitan:vanilla_vine_plant"
    ])

    event.add('sereneseasons:winter_crops', [
        "neapolitan:mint"
    ])

    event.add('sereneseasons:spring_crops', [
        "createcafe:cassava_crop",
        "createcafe:coffee_crop",
        "environmental:cattail",
        "environmental:tall_cattail",
        "supplementaries:flax",
        "silentgear:flax_plant",
        "silentgear:fluffy_plant",
        "neapolitan:strawberry_bush",
        "neapolitan:vanilla_vine",
        "neapolitan:vanilla_vine_plant"
    ])

    event.add('sereneseasons:summer_crops', [
        "culturaldelights:corn",
        "culturaldelights:corn_upper",
        "createcafe:cassava_crop",
        "createcafe:coffee_crop",
        "environmental:cattail",
        "environmental:tall_cattail",
        "atmospheric:yucca_sapling",
        "atmospheric:yucca_flower",
        "supplementaries:flax",
        "silentgear:flax_plant",
        "silentgear:fluffy_plant",
        "culturaldelights:cucumbers",
        "culturaldelights:eggplants",
        "culturaldelights:avocado_sapling",
        "culturaldelights:avocado_pit",
        "neapolitan:strawberry_bush",
        "neapolitan:adzuki_sprouts",
        "atmospheric:passion_vine"
    ])
})