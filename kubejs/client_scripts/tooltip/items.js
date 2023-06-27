ItemEvents.tooltip((event) => {

    let items = [
        {
            items: [
                'kubejs:boss_essence'
            ],
            text: [Text.of('Defeated Soul of a Boss').lightPurple()]
        },

        {
            items: [
                'kubejs:impossible_compound'
            ],
            text: [Text.of('Paradoxal Molecule').yellow()]
        },

        {
            items: [
                'undergarden:catalyst'
            ],
            text: [Text.of('Powerful enough to open a portal from a stonebrick frame...').green()]
        },

        {
            items: [
                'twilightforest:borer_essence'
            ],
            text: [Text.of('Dropped by tower borer and ghastguards').yellow()]
        },

        {
            items: [
                'silentgear:glowing_dust',
                'silentgear:blazing_dust',
                'silentgear:glittery_dust'
            ],
            text: [Text.of('Found in chests and mobs').green()]
        },

        {
            items: [
                'endrem:rogue_eye'
            ],
            text: [Text.of('Rumored to be lost in temples in a deep dark dimension...').green()]
        },

        {
            items: [
                'endrem:corrupted_eye'
            ],
            text: [Text.of('Held by the Harbinger').green()]
        },

        {
            items: [
                'endrem:lost_eye'
            ],
            text: [Text.of('Held by the ghost of Captain Cornelia').green()]
        },

        {
            items: [
                'endrem:cursed_eye'
            ],
            text: [Text.of('The Ignis draws power from this eye').green()]
        },

        {
            items: [
                'endrem:old_eye'
            ],
            text: [Text.of('Rosalyne, Blade of Dusk possesses this eye').green()]
        },
    ]

    items.forEach((toolTip) => {
        event.add(toolTip.items, toolTip.text)
    })
})