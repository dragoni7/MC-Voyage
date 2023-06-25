ServerEvents.tags('fluid', event => { 

    event.add('forge:crude_oil', 'ad_astra:oil')
    event.add('createdieselgenerators:diesel_engine_fuel_fast_weak', 'thermal:tree_oil')
    event.add('createdieselgenerators:diesel_engine_fuel_fast_strong', 'thermal:light_oil')
    event.add('createdieselgenerators:diesel_engine_fuel_slow_strong', 'thermal:refined_fuel')
})