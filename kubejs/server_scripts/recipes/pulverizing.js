ServerEvents.recipes(event => {

    event.recipes.thermal.pulverizer(Item.of('create:powdered_obsidian').withChance(1.1), 'minecraft:obsidian')
    event.recipes.thermal.pulverizer(Item.of('silentgear:crushed_shulker_shell').withChance(1.05), 'minecraft:shulker_shell')

    // catalysts
    event.recipes.thermal.pulverizer_catalyst('botania:pixie_dust').primaryMod(1.3).secondaryMod(1.5).energyMod(0.5).minChance(0.0).useChance(0.5)
    event.recipes.thermal.pulverizer_catalyst('enlightened_end:radium_dust').primaryMod(1.6).secondaryMod(1.6).energyMod(0.1).minChance(0.0).useChance(0.3)
    event.recipes.thermal.pulverizer_catalyst('silentgear:blaze_gold_dust').primaryMod(1.2).secondaryMod(3.2).energyMod(0.5).minChance(0.0).useChance(0.9)
    event.recipes.thermal.pulverizer_catalyst('blue_skies:moonstone').primaryMod(1.1).secondaryMod(2.0).energyMod(0.5).minChance(0.0).useChance(0.25)

    let JAO_CRUSHED = (name) => 'jaopca:create_crushed_ores.' + name
    let JAO_DUST = (name) => 'jaopca:dusts.' + name

    // crushed ore to dust
    let materials = [
        {
            crushed_ore: JAO_CRUSHED('arcmetal'),
            dust: JAO_DUST('arcmetal')
        },
        {
            crushed_ore: JAO_CRUSHED('azure_silver'),
            dust: 'silentgear:azure_silver_dust'
        },
        {
            crushed_ore: JAO_CRUSHED('calorite'),
            dust: JAO_DUST('calorite')
        },
        {
            crushed_ore: JAO_CRUSHED('cloggrum'),
            dust: JAO_DUST('cloggrum')
        },
        {
            crushed_ore: JAO_CRUSHED('crimson_iron'),
            dust: 'silentgear:crimson_iron_dust'
        },
        {
            crushed_ore: JAO_CRUSHED('desh'),
            dust: JAO_DUST('desh')
        },
        {
            crushed_ore: JAO_CRUSHED('froststeel'),
            dust: JAO_DUST('froststeel')
        },
        {
            crushed_ore: JAO_CRUSHED('ironwood'),
            dust: JAO_DUST('ironwood')
        },
        {
            crushed_ore: JAO_CRUSHED('ostrum'),
            dust: JAO_DUST('ostrum')
        },
        {
            crushed_ore: JAO_CRUSHED('plasteel'),
            dust: JAO_DUST('plasteel')
        },
        {
            crushed_ore: JAO_CRUSHED('regalium'),
            dust: JAO_DUST('regalium')
        },
        {
            crushed_ore: JAO_CRUSHED('solarmetal'),
            dust: JAO_DUST('solarmetal')
        },
        {
            crushed_ore: JAO_CRUSHED('utherium'),
            dust: JAO_DUST('utherium')
        },
        {
            crushed_ore: JAO_CRUSHED('voidmetal'),
            dust: JAO_DUST('voidmetal')
        },
        {
            crushed_ore: 'create:crushed_raw_iron',
            dust: 'thermal:iron_dust'
        },
        {
            crushed_ore: 'create:crushed_raw_gold',
            dust: 'thermal:gold_dust'
        },
        {
            crushed_ore: 'create:crushed_raw_copper',
            dust: 'thermal:copper_dust'
        },
        {
            crushed_ore: 'create:crushed_raw_silver',
            dust: 'thermal:silver_dust'
        },
        {
            crushed_ore: 'create:crushed_raw_tin',
            dust: 'thermal:tin_dust'
        },
        {
            crushed_ore: 'create:crushed_raw_lead',
            dust: 'thermal:lead_dust'
        },
        {
            crushed_ore: 'create:crushed_raw_nickel',
            dust: 'thermal:nickel_dust'
        }
    ]

    materials.forEach((material) => {
        event.recipes.thermal.pulverizer(Item.of(material.dust).withChance(1.15), material.crushed_ore)
    })
})