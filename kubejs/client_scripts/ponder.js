Ponder.tag(event => {

    event.createTag("kubejs:mod_tutorials", "minecraft:paper", "Extra Pondering.", "We ponder now!", [
        "silentgear:starlight_charger",
    ])
})


Ponder.registry(event => {
    event.create('silentgear:starlight_charger')
    .scene('starlight_charging', 'How to use the starlight charger', 'kubejs:starlight_charger_multiblock',
    (scene, util) => {
        scene.showStructure();
        scene.idleSeconds(2);
        scene
            .showControls(60, [3, 2, 3], "down")
        scene
            .text(60, "The Starlight charger is capable gaining charge while under moonlight.", [2.0, 2.5, 2.5])
            .colored(PonderPalette.RED)
            .placeNearTarget()

        scene.idleSeconds(3);
        scene.showControls(100, [0, 4, 6], "down")
        scene.showControls(100, [6, 4, 6], "down")
        scene.showControls(100, [6, 4, 0], "down")
        scene.showControls(100, [0, 4, 0], "down")
        scene
            .text(80, "Four pillars each 2 blocks away from the center must be built, with a certain block on top. The blocks under this can be any block", [0, 2, 6])
            .colored(PonderPalette.RED)

        scene.idleSeconds(4);
        scene.world.setBlock([0, 2, 6], "silentgear:azure_electrum_block", true);
        scene.world.setBlock([6, 2, 6], "silentgear:azure_electrum_block", true);
        scene.world.setBlock([6, 2, 0], "silentgear:azure_electrum_block", true);
        scene.world.setBlock([0, 2, 0], "silentgear:azure_electrum_block", true);

        scene
            .text(80, "Crimson Steel, Azure Electrum, and Tyrian Steel allow different level of star charge.", [0, 2, 6])
            .colored(PonderPalette.RED)
        scene.idleSeconds(4);
            scene.world.setBlock([0, 2, 6], "silentgear:tyrian_steel_block", true);
            scene.world.setBlock([6, 2, 6], "silentgear:tyrian_steel_block", true);
            scene.world.setBlock([6, 2, 0], "silentgear:tyrian_steel_block", true);
            scene.world.setBlock([0, 2, 0], "silentgear:tyrian_steel_block", true);

        scene
            .showControls(200, [3, 2, 3], "down")
            .withItem('#silentgear:starlight_charger_catalysts')
        scene
            .text(200, "Use a catalyst along with charge to add the starlight charged modifer to materials.", [2.0, 2.5, 2.5])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
    })
});