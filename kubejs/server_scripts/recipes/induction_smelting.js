ServerEvents.recipes(event => {

    event.recipes.thermal.smelter('kubejs:chromium_ingot', [Item.of('kubejs:chromium_nugget').withCount(7), Item.of('thermal:invar_nugget').withCount(2)]).energy(3600)
    event.recipes.thermal.smelter(Item.of('architects_palette:oracle_jelly').withCount(4), ['minecraft:amethyst_shard', 'minecraft:chorus_fruit', 'minecraft:sugar'])
    event.recipes.thermal.smelter(Item.of('architects_palette:cerebral_plate').withCount(4), ['minecraft:quartz', 'minecraft:tuff', 'minecraft:charcoal'])

    event.remove({id: 'architects_palette:oracle_jelly'})
    event.remove({id: 'architects_palette:cerebral_plate'})

})