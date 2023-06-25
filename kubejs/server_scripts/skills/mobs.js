MobSkillEvents.register(event => {

    const expert_mobs = [
        'mutantmonsters:mutant_creeper',
        'mutantmonsters:mutant_zombie',
        'mutantmonsters:mutant_skeleton',
        'irons_spellbooks:cryomancer',
        'irons_spellbooks:necromancer',
        'irons_spellbooks:pyromancer',
        'irons_spellbooks:magehunter_vindicator',
        'alexsmobs:farseer',
        'alexsmobs:void_worm', 
        'undergarden:masticator',
        'whisperwoods:hidebehind',
        'whisperwoods:zotzpyre',
        'savage_and_ravage:iceologer',
        'quark:forgotten',
        'thermal:blizz',
        'thermal:blitz'
    ]

    const master_mobs = [
        'mutantmonsters:mutant_enderman',
        'alexsmobs:void_worm'
    ]

    expert_mobs.forEach(mob => {
        event.restrict(mob, is => is.spawnable().fromSpawner("natural").if(player => player.can('skills:expert_mode')))
    })

    master_mobs.forEach(mob => {
        event.restrict(mob, is => is.spawnable().fromSpawner("natural").if(player => player.can('skills:master_mode')))
    })
    
    event.restrict('@enderzoology', is => is.spawnable().fromSpawner("natural").if(player => player.can('skills:expert_mode')))
    event.restrict('@mutantmore', is => is.spawnable().fromSpawner("natural").if(player => player.can('skills:expert_mode')))
    event.restrict('@monsterplus', is => is.spawnable().fromSpawner("natural").if(player => player.can('skills:expert_mode')))
    event.restrict('@rottencreatures', is => is.spawnable().fromSpawner("natural").if(player => player.can('skills:expert_mode')))
    event.restrict('@lava_monster', is => is.spawnable().fromSpawner("natural").if(player => player.can('skills:expert_mode')))
  })
  