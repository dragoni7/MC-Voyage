// priority: 0
StartupEvents.registry('item', event => {

	let items = [
		'boss_essence',
		'impossible_compound',
		'generic_lootcrate',
		'unique_lootcrate',
		'premium_lootcrate',
		'masticator_bait',
		'inert_nether_portal_key',
		'nether_portal_key',
		'inert_everdawn_portal_key',
		'everdawn_portal_key',
		'inert_everbright_portal_key',
		'everbright_portal_key',
		'chromium_nugget',
		'chromium_ingot',
		'pearlescent_nugget',
		'stainless_steel_ingot',
		'stage_repairer',
		'stasis_larva'
	]

	items.forEach((item) => {
		event.create(item).group('KubeJS').texture(`kubejs:item/${item}`).fireResistant(true)
	})

	let mechanisms = [
		{
			name: 'infused',
			rarity: 'rare'
		},

		{
			name: 'bio',
			rarity: 'biomancy_uncommon'
		},

		{
			name: 'redstone',
			rarity: 'epic'
		},

		{
			name: 'stainless',
			rarity: 'biomancy_very_rare'
		},

		{
			name: 'plasteel',
			rarity: 'biomancy_very_rare'
		},

		{
			name: 'overclocked',
			rarity: 'biomancy_ultra_rare'
		},
	]

	mechanisms.forEach((item) => {
		event.create(`${item.name}_mechanism`).texture(`kubejs:item/${item.name}_mechanism`).rarity(item.rarity)
		event.create(`incomplete_${item.name}_mechanism`).texture(`kubejs:item/incomplete_${item.name}_mechanism`).rarity(item.rarity)
	})

	let gear_materials = [
        'rose_gold',
        'iron',
        'gold',
        'copper',
        'netherite',
        'signalum',
        'lumium',
        'enderium',
        'tin',
        'lead',
        'silver',
        'nickel',
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'lapis_lazuli',
        'diamond',
        'emerald',
        'quartz',
        'prismalium',
        'melodium',
        'stellarium'
    ]

	gear_materials.forEach((material) => {
		event.create(`incomplete_${material}_gear`).texture('kubejs:item/incomplete_gear')
	})

	let engine_materials = [
		'steel',
		'desh',
		'ostrum',
		'calorite'
    ]

	engine_materials.forEach((material) => {
		event.create(`incomplete_${material}_engine`).texture('kubejs:item/incomplete_engine')
	})
})

