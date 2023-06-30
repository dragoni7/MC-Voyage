//priority: 998
ServerEvents.recipes(event => {
	let recipes = [
		'silentgear:compounding/metal/custom_ingot.high_carbon_steel',
		'/silentgear:.+_template$/',
		'silentgear:iron_rod',
		'silentgear:crimson_iron_dust',
		'silentgear:crimson_steel_dust',
		'silentgear:blaze_gold_dust',
		'silentgear:azure_silver_dust',
		'silentgear:azure_electrum_dust',
		'silentgear:tyrian_steel_dust',
		'silentgear:glowing_dust',
		'silentgear:blazing_dust',
		'silentgear:glittery_dust',
		'silentgear:grip_blueprint_alt',
		'silentgear:binding_blueprint_alt',
		'silentgear:ring_blueprint_alt',
		'delightful:blasting/green_tea_leaf',
		'delightful:smelting/green_tea_leaf',
		'ae2:inscriber/certus_quartz_dust',
		'ae2:inscriber/ender_dust',
		'ae2:inscriber/fluix_dust',
		'ae2:inscriber/sky_stone_dust',
		'ae2:misc/tank_sky_stone',
		'productivebees:centrifuge/ingots/honeycomb_steel_dust',
		'productivebees:centrifuge/ingots/honeycomb_netherite',
		'productivebees:create/mixing/ingots/honeycomb_soulsteel',
		'productivebees:create/mixing/ingots/honeycomb_netherite',
		'productivebees:create/mixing/ae2/honeycomb_silicon',
		'productivebees:centrifuge/ae2/honeycomb_silicon',
		'explorerscompass:explorers_compass',
		'silentgear:bronze_ingot',
		'silentgear:blueprint_package',
		'ae2:blasting/silicon_from_certus_quartz_dust',
		'silentgear:bracelet_blueprint_alt',
		'create:crafting/materials/andesite_alloy_from_zinc',
		'create:mixing/andesite_alloy_from_zinc',
		'create:mixing/andesite_alloy',
		'thermal:compat/create/smelter_create_alloy_andesite_alloy',
		'majruszsdifficulty:bandage',
		'majruszsdifficulty:bandage_reversed',
		'majruszsdifficulty:golden_bandage',

		'endrem:undead_eye',
		'endrem:exotic_eye',
		'endrem:witch_eye',

		'undergarden:catalyst',

		'ad_astra:hammering/ostrum_plate',
		'ad_astra:hammering/iron_plate',
		'ad_astra:hammering/steel_plate',
		'ad_astra:hammering/calorite_plate',
		'ad_astra:hammering/desh_plate',
		'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',

		'architects_palette:blasting/nether_brass_ingot_from_nether_brass_blend_blasting',
		'architects_palette:smelting/nether_brass_ingot_from_nether_brass_blend_blasting',
		
		'thermal:rubber_from_vine',
		'thermal:rubber_from_dandelion',
		'thermal:signalum_dust_4',
		'thermal:lumium_dust_4',
		'thermal:enderium_dust_2',

		'create:crafting/kinetics/fluid_pipe_vertical',
		'createteleporters:tele_fluid_chorus',
		'create:crushing/obsidian',

		'irons_spellbooks:upgrade_orb',

		// force certain food recipes to use create
		'abnormals_delight:maple_glazed_bacon',
		'neapolitan:adzuki/magic_beans',
		'neapolitan:adzuki/adzuki_bun',
		'neapolitan:chocolate_strawberries',
		'neapolitan:mixed/vanilla_chocolate_fingers',
		'neapolitan:mixed/mint_chocolate',
		'seasonals:chocolate_pumpkin_muffin',
		'peculiars:yucca_fudge',
		'seasonals:pumpkin_bread',
		'abnormals_delight:autumnity/pumpkin_bread',
		'autumnity:pancake',
		'neapolitan:banana/banana_bread',
		'neapolitan:strawberry/strawberry_scones',
		'neapolitan:mixed/neapolitan_ice_cream_from_vanilla',
		'farmersdelight:wheat_dough_from_water',
		'farmersdelight:wheat_dough_from_eggs',
		'createcafe:crafting/oreo_dough_shapeless',
		'farmersdelight:bacon_sandwhich',
		'gourmet:cheese',
		'blue_skies:cake_compat',
		'neapolitan:cake',
		'minecraft:cake',
		'farmersdelight:cake_from_milk_bottle',
		'delightful:food/pumpkin_pie',
		'farmersdelight:pie_crust',
		'delightful:food/deluxe_cheeseburger_from_milk',
		'delightful:food/cheeseburger_from_milk',

		//'/.:.+_milkshake$/',
		'/neapolitan:.+ice_cream$/',
		'/seasonals:.+ice_cream$/',
		'/collectorsreap:.+ice_cream$/',
		'/peculiars:.+ice_cream$/',
		'/respiteful:.+ice_cream$/',

		'/neapolitan:.+cake$/',
		'/seasonals:.+cake$/',
		'/collectorsreap:.+cake$/',
		'/peculiars:.+cake$/',
		'/respiteful:.+cake$/',
		'/farmersrespite:.+cake$/'
	]

	event.remove({ mod: 'thermal', input: 'minecraft:fire_charge'})
	event.remove({ mod: 'thermal', input: 'thermal:earth_charge'})
	event.remove({ mod: 'genshinstrument'})

	recipes.forEach((recipe) => {
		event.remove({id: recipe})
	})
	
	blacklist.forEach((item) => {
		event.remove({output: item});
	})
})
