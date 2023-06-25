WorldgenEvents.add(event => {
    // use the anchors helper from the event
    const { anchors } = event
  
    event.addOre(ore => {
      ore.id = 'kubejs:prismasand'
      ore.biomes = {
        not: '#minecraft:is_ocean'
      }

      ore.addTarget([
        'minecraft:gravel',     // replace gravel...
        'minecraft:sand'   // replace sand
      ], 'kubejs:prismasand')
  
      ore.count([20, 50])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
        .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
          anchors.aboveBottom(25),
          anchors.absolute(20)	      
        )								              
  
      // more, optional parameters (default values are shown here)
      ore.size = 9                            // max. vein size
      ore.noSurface = 1.0                    // chance to discard if the ore would be exposed to air
      ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
      ore.chance = 0					            // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
    })
  })