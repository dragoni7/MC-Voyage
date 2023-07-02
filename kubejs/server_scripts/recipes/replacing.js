//priority: 999
ServerEvents.recipes(event => {
    event.replaceInput({mod: 'ad_astra'}, 'ad_astra:iron_rod', 'kubejs:stainless_steel_ingot')
    event.replaceInput({mod: 'toms_storage'}, 'minecraft:chest', 'create:andesite_casing')
    event.replaceInput({mod: 'productivebees'}, 'minecraft:iron_ingot', 'the_bumblezone:honey_crystal_shards')
    event.replaceInput({mod: 'gourmet'}, 'gourmet:cheese', 'brewinandchewin:flaxen_cheese_wedge')
    event.replaceInput({mod: 'scalinghealth'}, 'scalinghealth:heart_dust', 'minecraft:glistering_melon_slice')
})
