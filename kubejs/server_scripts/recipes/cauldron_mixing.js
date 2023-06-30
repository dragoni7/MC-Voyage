ServerEvents.recipes(event => {
    const id_prefix = 'kubejs:/cauldron_mixing/';
    const recipes = [

      {
        liquid: {
            "fluid": "hexerei:blood_fluid"
          },

          ingredients: [
            {
              "item": "minecraft:blaze_powder"
            },
            {
              "item": "minecraft:blaze_powder"
            },
            {
              "item": "minecraft:blaze_powder"
            },
            {
              "item": "minecraft:blaze_powder"
            },
            {
              "item": "twilightforest:carminite"
            },
            {
              "item": "minecraft:blaze_powder"
            },
            {
              "item": "minecraft:blaze_powder"
            },
            {
              "item": "minecraft:blaze_powder"
            }
          ],
          output: {
            "item": "twilightforest:fiery_blood"
          },
        
          liquid_output: {
            "fluid": "minecraft:water"
          },
          fluidLevelsConsumed: 1000,
          id: `${id_prefix}fiery_blood`
    },

    {
      liquid: {
          "fluid": "minecraft:water"
        },

        ingredients: [
          {
            "item": "minecraft:sugar"
          },
          {
            "item": "create:dough"
          },
          {
            "item": "irons_spellbooks:arcane_essence"
          },
          {
            "item": "savage_and_ravage:creeper_spores"
          },
          {
            "item": "irons_spellbooks:arcane_essence"
          },
          {
            "item": "hexerei:moon_dust"
          },
          {
            "item": "minecraft:sugar"
          },
          {
            "item": "minecraft:sugar"
          }
        ],
        output: {
          "item": "gourmet:dream_roll"
        },
      
        liquid_output: {
          "fluid": "minecraft:water"
        },
        fluidLevelsConsumed: 250,
        id: `${id_prefix}dream_roll`
  },

        {
            liquid: {
                "fluid": "minecraft:water"
              },

              ingredients: [
                {
                  "item": "biomancy:withered_mob_marrow"
                },
                {
                  "item": "biomancy:mob_marrow"
                },
                {
                  "item": "biomancy:stone_powder"
                },
                {
                  "item": "minecraft:nether_wart"
                },
                {
                  "item": "biomancy:unstable_compound"
                },
                {
                  "item": "minecraft:nether_wart"
                },
                {
                  "item": "biomancy:stone_powder"
                },
                {
                  "item": "biomancy:mob_marrow"
                }
              ],
              output: {
                "item": "mutantmore:formula_y"
              },
            
              liquid_output: {
                "fluid": "minecraft:water"
              },
              fluidLevelsConsumed: 1000,
              id: `${id_prefix}formula_y`
        },

        {
            liquid: {
                "fluid": "minecraft:water"
              },

              ingredients: [
                {
                  "item": "biomancy:withered_mob_marrow"
                },
                {
                  "item": "biomancy:mob_marrow"
                },
                {
                  "item": "biomancy:stone_powder"
                },
                {
                  "item": "kubejs:boss_essence"
                },
                {
                  "item": "biomancy:unstable_compound"
                },
                {
                  "item": "kubejs:boss_essence"
                },
                {
                  "item": "biomancy:stone_powder"
                },
                {
                  "item": "biomancy:mob_marrow"
                }
              ],
              output: {
                "item": "mutantmore:compound_z"
              },
            
              liquid_output: {
                "fluid": "minecraft:water"
              },
              fluidLevelsConsumed: 1000,
              id: `${id_prefix}compound_z`
        },

        {
            liquid: {
                "fluid": "minecraft:water"
              },

              ingredients: [
                {
                  "item": "hexerei:blood_bottle"
                },
                {
                  "item": "hexerei:willow_log"
                },
                {
                  "item": "irons_spellbooks:magic_cloth"
                },
                {
                  "item": "minecraft:wheat"
                },
                {
                  "item": "hexerei:mandrake_root"
                },
                {
                  "item": "minecraft:wheat"
                },
                {
                  "item": "irons_spellbooks:magic_cloth"
                },
                {
                  "item": "hexerei:willow_log"
                }
              ],
              output: {
                "item": "hexerei:willow_broom"
              },
            
              liquid_output: {
                "fluid": "hexerei:blood_fluid"
              },
              fluidLevelsConsumed: 1000,
              id: `${id_prefix}willow_broom`,
              old_id: 'hexerei:willow_broom_from_mixing_cauldron'
        },

        {
            liquid: {
                "fluid": "minecraft:water"
              },

              ingredients: [
                {
                    "item": "undergarden:masticator_scales"
                },
                {
                    "item": "hexerei:witch_hazel_log"
                },
                {
                    "item": "hexerei:blood_bottle"
                },
                {
                    "item": "minecraft:wheat"
                },
                {
                    "item": "hexerei:mandrake_root"
                },
                {
                    "item": "minecraft:wheat"
                },
                {
                    "item": "hexerei:blood_bottle"
                },
                {
                    "item": "hexerei:witch_hazel_log"
                }
              ],
              output: {
                "item": "hexerei:witch_hazel_broom"
              },
            
              liquid_output: {
                "fluid": "hexerei:blood_fluid"
              },
              fluidLevelsConsumed: 1000,
              id: `${id_prefix}witch_hazel`,
              old_id: 'hexerei:witch_hazel_broom_from_mixing_cauldron'
        },

        {
            liquid: {
                "fluid": "minecraft:water"
              },

              ingredients: [
                {
                    "item": "botania:gaia_ingot"
                },
                {
                    "item": "hexerei:mahogany_log"
                },
                {
                    "item": "hexerei:blood_bottle"
                },
                {
                    "item": "minecraft:wheat"
                },
                {
                    "item": "hexerei:mandrake_root"
                },
                {
                    "item": "minecraft:wheat"
                },
                {
                    "item": "hexerei:blood_bottle"
                },
                {
                    "item": "hexerei:mahogany_log"
                }
              ],
              output: {
                "item": "hexerei:mahogany_broom"
              },
            
              liquid_output: {
                "fluid": "hexerei:blood_fluid"
              },
              fluidLevelsConsumed: 1000,
              id: `${id_prefix}mahogany`,
              old_id: 'hexerei:mahogany_broom_from_mixing_cauldron'
        }
        
    ]

    recipes.forEach((recipe) => {

        if (recipe.old_id) {
            event.remove({id: recipe.old_id})
        }

        event.custom({
            type: 'hexerei:mixingcauldron',
            liquid: recipe.liquid,
            ingredients: recipe.ingredients,
            liquidOutput: recipe.liquid_output,
            fluidLevelsConsumed: recipe.fluidLevelsConsumed,
            output: recipe.output
        })
        .id(recipe.id)
    });
});