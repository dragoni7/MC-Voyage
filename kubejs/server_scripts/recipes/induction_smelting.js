ServerEvents.recipes(event => {

    event.recipes.thermal.smelter(Item.of('architects_palette:oracle_jelly').withCount(4), ['minecraft:amethyst_shard', 'minecraft:chorus_fruit', 'minecraft:sugar'])
    event.recipes.thermal.smelter(Item.of('architects_palette:cerebral_plate').withCount(4), ['minecraft:quartz', 'minecraft:tuff', 'minecraft:charcoal'])
    event.recipes.thermal.smelter(Item.of('infernalexp:glowcoal').withCount(1), ['infernalexp:glownuggets', 'thermal:coal_coke'])

    event.remove({id: 'architects_palette:oracle_jelly'})
    event.remove({id: 'architects_palette:cerebral_plate'})

})