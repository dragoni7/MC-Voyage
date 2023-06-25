// priority: 0
StartupEvents.registry('block', event => {

	const casing = [
		'steel_casing',
        'stainless_casing',
        'azure_casing'
	]

	casing.forEach((block) => {
		event.create(block)
		.material('metal')
		.hardness(1.0)
		.tagBlock('create:casing')
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
	})

	event.create('prismasand', 'falling')
	.material('sand')
	.hardness('0.5')
	.tagBlock('minecraft:mineable/shovel')
	.tagBlock('forge:needs_netherite_tool')
	.requiresTool(true)
})