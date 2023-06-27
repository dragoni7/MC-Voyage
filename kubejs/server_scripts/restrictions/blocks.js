BlockSkillEvents.register(event => {

  let expert_blocks = [
    {
      id: 'thermal:cinnabar_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'thermal:apatite_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'thermal:deepslate_cinnabar_ore',
      mask: 'minecraft:deepslate'
    },
    {
      id: 'thermal:niter_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'thermal:deepslate_niter_ore',
      mask: 'minecraft:deepslate'
    },
    {
      id: 'thermal:sulfur_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'thermal:deepslate_sulfur_ore',
      mask: 'minecraft:deepslate'
    },
    {
      id: 'thermal:tin_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'thermal:deepslate_tin_ore',
      mask: 'minecraft:deepslate'
    },
    {
      id: 'thermal:lead_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'thermal:deepslate_lead_ore',
      mask: 'minecraft:deepslate'
    },
    {
      id: 'thermal:silver_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'thermal:deepslate_silver_ore',
      mask: 'minecraft:deepslate'
    },
    {
      id: 'thermal:nickel_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'thermal:deepslate_nickel_ore',
      mask: 'minecraft:deepslate'
    }

  ]

  let master_blocks = [
    {
      id: 'kubejs:prismasand',
      mask: 'minecraft:sand'
    },
    {
      id: 'silentcompat:arcmetal_ore',
      mask: 'minecraft:stone'
    },
    {
      id: 'silentcompat:voidmetal_ore',
      mask: 'minecraft:deepslate'
    },
    {
      id: 'silentcompat:plasteel_ore',
      mask: 'minecraft:deepslate'
    },
    {
      id: 'silentcompat:solarmetal_ore',
      mask: 'minecraft:smooth_basalt'
    }
  ]
  
  expert_blocks.forEach((block) => {
    event.restrict(
      block.id,
      r => r.replaceWithBlock(block.mask).unless(player => player.can('skills:expert_mode'))
    )
  })

  master_blocks.forEach((block) => {
    event.restrict(
      block.id,
      r => r.replaceWithBlock(block.mask).unless(player => player.can('skills:master_mode'))
    )
  })

})