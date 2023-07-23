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
            "item": "silentgear:nether_banana"
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
          "item": "majruszsdifficulty:recall_potion"
        },
      
        liquid_output: {
          "fluid": "minecraft:water"
        },
        fluidLevelsConsumed: 250,
        id: `${id_prefix}recall_potion`
    },

    {
      liquid: {
          "fluid": "minecraft:water"
        },

        ingredients: [
          {
            "item": "minecraft:ancient_debris"
          },
          {
            "item": "kubejs:boss_essence"
          },
          {
            "item": "irons_spellbooks:arcane_ingot"
          },
          {
            "item": "silentgear:blazing_dust"
          },
          {
            "item": "irons_spellbooks:arcane_ingot"
          },
          {
            "item": "hexerei:moon_dust"
          },
          {
            "item": "twilightforest:carminite_block"
          },
          {
            "item": "irons_spellbooks:upgrade_orb"
          },
        ],
        output: {
          "item": "irons_spellbooks:arcane_debris"
        },
      
        liquid_output: {
          "fluid": "minecraft:lava"
        },
        fluidLevelsConsumed: 1000,
        id: `${id_prefix}arcane_debris`
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
                  "item": "nourished_nether:soul_quartz"
                },
                {
                  "item": "biomancy:unstable_compound"
                },
                {
                  "item": "nourished_nether:soul_quartz"
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
        },

        {
          liquid: {
              "fluid": "thermal:ender"
            },

            ingredients: [
              {
                  "item": "hmag:dyssomnia_skin"
              },
              {
                  "item": "hmag:dyssomnia_skin"
              },
              {
                  "item": "hmag:soul_apple"
              },
              {
                  "item": "minecraft:amethyst_block"
              },
              {
                  "item": "hmag:evil_crystal_block"
              },
              {
                  "item": "minecraft:amethyst_block"
              },
              {
                  "item": "hmag:dyssomnia_skin"
              },
              {
                  "item": "hmag:dyssomnia_skin"
              },
            ],
            output: {
              "item": "hmag:insomnia_fruit"
            },
          
            liquid_output: {
              "fluid": "minecraft:water"
            },
            fluidLevelsConsumed: 500,
            id: `${id_prefix}insomnia_fruit`,
            old_id: 'hmag:insomnia_fruit'
      },

      {
        liquid: {
            "fluid": "minecraft:lava"
          },

          ingredients: [
            {
              "tag": "hmag:reinforcing_chain_crafting_materials"
            },
            {
              "tag": "hmag:reinforcing_chain_crafting_materials"
            },
            {
              "item": "minecraft:chain"
            },
            {
              "item": "minecraft:chain"
            },
            {
              "item": "minecraft:chain"
            },
            {
              "item": "minecraft:chain"
            },
            {
              "item": "minecraft:obsidian"
            },
            {
              "item": "hmag:evil_crystal_fragment"
            },
          ],
          output: {
            "item": "hmag:reinforcing_chain"
          },
        
          liquid_output: {
            "fluid": "minecraft:water"
          },
          fluidLevelsConsumed: 1000,
          id: `${id_prefix}reinforcing_chain`,
          old_id: 'hmag:reinforcing_chain'
      },

    {
      liquid: {
          "fluid": "create_enchantment_industry:experience"
        },

        ingredients: [
          {
            "tag": "hmag:lucky_materials"
          },
          {
            "tag": "minecraft:music_discs"
          },
          {
            "tag": "forge:storage_blocks/fluix"
          },
          {
            "tag": "forge:storage_blocks/fluix"
          },
          {
            "tag": "forge:storage_blocks/steeleaf"
          },
          {
            "tag": "forge:storage_blocks/fluix"
          },
          {
            "item": "minecraft:netherite_ingot"
          },
          {
            "item": "hmag:evil_crystal_block"
          }
        ],
        output: {
          "item": "hmag:greedy_crystal"
        },
      
        liquid_output: {
          "fluid": "minecraft:water"
        },
        fluidLevelsConsumed: 1000,
        id: `${id_prefix}greedy_crystal`,
        old_id: 'hmag:greedy_crystal'
    },

    {
      liquid: {
          "fluid": "create_enchantment_industry:experience"
        },

        ingredients: [
          {
            "tag": "hmag:lucky_materials"
          },
          {
            "tag": "minecraft:music_discs"
          },
          {
            "tag": "forge:storage_blocks/fluix"
          },
          {
            "tag": "forge:storage_blocks/fluix"
          },
          {
            "tag": "blue_skies:storage_blocks/charoite"
          },
          {
            "tag": "forge:storage_blocks/fluix"
          },
          {
            "item": "minecraft:netherite_ingot"
          },
          {
            "item": "hmag:evil_crystal_block"
          }
        ],
        output: {
          "item": "hmag:fortune_crystal"
        },
      
        liquid_output: {
          "fluid": "minecraft:water"
        },
        fluidLevelsConsumed: 1000,
        id: `${id_prefix}fortune_crystal`,
        old_id: 'hmag:fortune_crystal'
    },

    {
      liquid: {
          "fluid": "create_enchantment_industry:experience"
        },

        ingredients: [
          {
            "item": "minecraft:end_crystal"
          },
          {
            "item": "hmag:ender_plasm"
          },
          {
            "item": "hmag:ender_plasm"
          },
          {
            "item": "minecraft:end_crystal"
          },
          {
            "item": "hmag:ender_plasm"
          },
          {
            "item": "hmag:ender_plasm"
          },
          {
            "item": "minecraft:end_crystal"
          },
          {
            "item": "minecraft:echo_shard"
          }
        ],
        output: {
          "item": "hmag:endless_pearl"
        },
      
        liquid_output: {
          "fluid": "minecraft:water"
        },
        fluidLevelsConsumed: 1000,
        id: `${id_prefix}endless_pearl`,
        old_id: 'hmag:endless_pearl'
    },
        
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