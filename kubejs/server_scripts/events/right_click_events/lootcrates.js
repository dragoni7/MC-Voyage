ItemEvents.rightClicked(event => {
    if (event.item.id == 'kubejs:generic_lootcrate') {
        event.player.getMainHandItem().count--
       
        event.server.runCommand(
            '/loot give ' + event.player.name.string + ' loot kubejs:chests/generic_lootcrate'
        )
    }

    if (event.item.id == 'kubejs:unique_lootcrate') {
        event.player.getMainHandItem().count--
        event.server.runCommand(
            '/loot give ' + event.player.name.string + ' loot kubejs:chests/unique_lootcrate'
        )
    }

    if (event.item.id == 'kubejs:premium_lootcrate') {
        event.player.getMainHandItem().count--
        event.server.runCommand(
            '/loot give ' + event.player.name.string + ' loot kubejs:chests/premium_lootcrate'
        )
    }
})