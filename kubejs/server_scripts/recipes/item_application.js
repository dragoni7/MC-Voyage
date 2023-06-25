ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/applying/';

    function CasingRecipe(name, block, itemTag) {

        let id = name.split(':')

        event.custom({
            type: 'create:item_application',
            ingredients: [
                {'item': block},
                {'tag': itemTag}
            ],
            results: [{'item': name}],
        }).id(`${id_prefix}${id[1]}`)
    }

    CasingRecipe('kubejs:steel_casing', 'create:brass_casing', "forge:ingots/steel")
    CasingRecipe('kubejs:stainless_casing', 'create:brass_casing', "forge:ingots/stainless_steel")
    CasingRecipe('kubejs:azure_casing', 'create:brass_casing', "forge:ingots/azure_electrum")
})