JEIEvents.hideItems(event => {

	const hidden = [
    // aquaculture
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',

    // ae2
    'ae2:vibration_chamber',
    'ae2:sky_stone_tank',

    // neapolitan
    'neapolitan:chocolate_bar',
    'neapolitan:milk_bottle',

    // bees
    'productivebees:milk_bottle',

    // silentgear
    'silentgear:blueprint_package',
    'silentgear:paxel_blueprint',
    'silentgear:paxel_head',
    'silentgear:paxel',
    'silentgear:saw_blueprint',
    'silentgear:saw_blade',
    'silentgear:saw',
    'silentcompat:source_steel_ingot',

    // endrem
    'endrem:cold_eye',
    'endrem:nether_eye',
    'endrem:black_eye',

    // scalinghealth
    /*'scalinghealth:heart_crystal_ore',
    'scalinghealth:power_crystal_ore',
    'scalinghealth:deepslate_heart_crystal_ore',
    'scalinghealth:deepslate_power_crystal_ore',
    'scalinghealth:power_crystal',
    'scalinghealth:power_crystal_shard',
    'scalinghealth:cursed_heart',
    'scalinghealth:enchanted_heart',
    'scalinghealth:chance_heart',*/

    // twilightforest
    'twilightforest:uncrafting_table',

    // nethersdelight
    'nethersdelight:iron_machete',
    'nethersdelight:golden_machete',
    'nethersdelight:diamond_machete',
    'nethersdelight:netherite_machete',
    
    // progressive bosses
    'progressivebosses:nether_star_shard',

    // meetyourfight
    'meetyourfight:fossil_bait',
    'meetyourfight:haunted_bell',
    'meetyourfight:devils_ante',
    'meetyourfight:dusk_key',
    
    // ad astra
    'ad_astra:coal_generator',
    'ad_astra:compressor',
    'ad_astra:desh_fluid_pipe',
    'ad_astra:ostrum_fluid_pipe',
    'ad_astra:fluid_pipe_duct',
    'ad_astra:water_pump',
    'ad_astra:fuel_refinery',

    // thermal
    'thermal:machine_furnace',
    'thermal:machine_sawmill',
    'thermal:machine_bottler',
    'thermal:machine_brewer',
    'thermal:machine_crafter',
    'thermal:fluid_duct',
    'thermal:fluid_duct_windowed',
    'thermal:machine_frame',
    'thermal:fluid_cell_frame',
    'thermal:fluid_cell',

    // supp
    'supplementaries:pancake',

    // whisper woods
    'whisperwoods:hand_of_fate',

    // pams
    'pamhc2trees:avocadoitem',
    'pamhc2trees:pamavocado',
    'pamhc2trees:avocado_sapling',
    'pamhc2trees:pomegranateitem',
    'pamhc2trees:pampomegranate',
    'pamhc2trees:pomegranate_sapling',
    'pamhc2trees:limeitem',
    'pamhc2trees:pamlime',
    'pamhc2trees:lime_sapling',
    'pamhc2trees:bananaitem',
    'pamhc2trees:pambanana',
    'pamhc2trees:banana_sapling',
    'pamhc2trees:vanillabeanitem',
    'pamhc2trees:pamvanillabean',
    'pamhc2trees:vanillabean_sapling',
    'pamhc2trees:passionfruititem',
    'pamhc2trees:pampassionfruit',
    'pamhc2trees:passionfruit_sapling',

    // gourmet
    'gourmet:neapolitan_ice_cream_cone',
    'gourmet:ice_cream_scoop',
    'gourmet:chocolate_ice_cream_scoop',
    'gourmet:sweet_berry_ice_cream_scoop',

    // pamhc
    'pamhc2foodcore:butteritem',
    'pamhc2foodcore:pastaitem',
    'pamhc2foodcore:cheeseitem',
    'pamhc2foodcore:friesitem',
    'pamhc2foodcore:friedchickenitem',
    'pamhc2foodcore:icecreamitem',
    'pamhc2foodcore:chocolateicecreamitem',
    'pamhc2foodcore:caramelicecreamitem',
    'pamhc2foodextended:cherryicecreamitem',
    'pamhc2foodextended:mintchocolatechipicecreamitem',
    'pamhc2foodextended:mochaicecreamitem',
    'pamhc2foodextended:neapolitanicecreamitem',
    'pamhc2foodextended:nuttoppedicecreamitem',
    'pamhc2foodextended:vanillaicecreamitem',
    'pamhc2foodcore:doughitem',
    'pamhc2crops:hotteaitem',
    'pamhc2crops:hotcoffeeitem',
    'pamhc2crops:hotnettleteaitem',
    'pamhc2foodcore:chocolatepuddingitem',
    'pamhc2foodcore:chocolatebaritem',
    'pamhc2foodextended:chocolatestrawberryitem',
    'pamhc2foodextended:vanillaitem',
    'pamhc2foodcore:pumpkinbreaditem',
    'pamhc2foodcore:basicchickensandwichitem',
    'pamhc2foodcore:basichamburgeritem',
    'pamhc2foodcore:basiccheeseburgeritem',
    'pamhc2foodcore:baconcheeseburgeritem',
    'pamhc2foodextended:deluxecheeseburgeritem',
    'pamhc2foodcore:groundbeefitem',
    'pamhc2foodextended:gourmetbeefburgeritem',
    'pamhc2foodextended:gourmetporkburgeritem',
    'pamhc2foodextended:gourmetmuttonburgeritem',
    'pamhc2foodextended:gourmetbeefburgeritem',
    'pamhc2foodextended:onionhamburgeritem',
    'pamhc2foodextended:jalapenoburgeritem',
    'pamhc2foodextended:paradiseburgeritem',
    'pamhc2foodextended:coleslawburgeritem',
    'pamhc2foodextended:cookoutmealitem',
    'pamhc2foodcore:grinder',
    'pamhc2foodextended:picklesitem',
    'pamhc2crops:cucumberitem',
    'pamhc2foodextended:kimchiitem',
    'pamhc2foodcore:potitem',
    'pamhc2foodextended:cevicheitem',
    'pamhc2foodextended:espressoitem',
    'pamhc2foodextended:pumpkinspicelatteitem',
    'pamhc2foodextended:coffeeconlecheitem',
    'pamhc2crops:coffeebeanitem',
    'pamhc2foodextended:sweetteaitem',
    'pamhc2foodextended:greenteaitem',
    'pamhc2crops:tealeafitem',
    'pamhc2foodcore:hotchocolateitem',
    'pamhc2crops:eggplantitem',
    'pamhc2foodcore:rolleritem',
    'pamhc2crops:strawberryseeditem',
    'pamhc2foodextended:figbaritem',
    'pamhc2foodcore:applepieitem',
    'pamhc2foodcore:sweetberrypieitem',
    'pamhc2foodextended:bananapieitem',
    'pamhc2foodextended:limepieitem',
    'pamhc2foodextended:pineapplepieitem',
    'pamhc2foodextended:mulberrypieitem',
    'pamhc2foodextended:croissantitem',
    'pamhc2foodcore:chocolatecakeitem',
    'pamhc2extended:wafflesitem',
    'pamhc2extended:maplesyrupwafflesitem',
    'pamhc2extended:chickenandwafflesitem',

    // pamhc extended
    'pamhc2foodextended:groundcinnamonitem'
	]

	hidden.forEach((item) => {
		event.hide(item)
	})
})