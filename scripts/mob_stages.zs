#priority 0

val expert_mobs = [
        'mutantmonsters:mutant_creeper',
        'mutantmonsters:mutant_zombie',
        'mutantmonsters:mutant_skeleton',
        'irons_spellbooks:cryomancer',
        'irons_spellbooks:necromancer',
        'irons_spellbooks:pyromancer',
        'irons_spellbooks:magehunter_vindicator',
        'alexsmobs:farseer',
        'undergarden:masticator',
        'whisperwoods:hidebehind',
        'whisperwoods:zotzpyre',
        'savage_and_ravage:iceologer',
        'quark:forgotten',
        'thermal:blizz',
        'thermal:blitz',
        'enderzoology:concussion_creeper',
        'enderzoology:dire_wolf',
        'enderzoology:enderminy',
        'enderzoology:fallen_knight',
        'enderzoology:fallen_mount',
        'enderzoology:infested_zombie',
        'enderzoology:wither_cat',
        'enderzoology:wither_witch',
        'mutantmore:mutant_blaze',
        'mutantmore:mutant_shulker',
        'mutantmore:mutant_wither_skeleton',
        'monsterplus:abyssologer',
        'monsterplus:crystal_zombie',
        'monsterplus:glow_skeleton',
        'monsterplus:lava_squid',
        'monsterplus:mother_lava_squid',
        'monsterplus:opalescent_eye',
        'monsterplus:overgrown_skeleton',
        'monsterplus:spectral_skeleton',
        'monsterplus:swamp_zombie',
        'rottencreatures:dead_beard',
        'rottencreatures:frostbitten',
        'rottencreatures:glacial_hunter',
        'rottencreatures:hunter_wolf',
        'rottencreatures:immortal',
        'rottencreatures:mummy',
        'rottencreatures:skeleton_lackey',
        'rottencreatures:swampy',
        'rottencreatures:undead_miner',
        'rottencreatures:zap',
        'rottencreatures:zombie_lackey',
        'lava_monster:lava_monster',
        'minecraft:vex',
        'tinyskeletons:baby_skeleton',
        'tinyskeletons:baby_stray',
        'tinyskeletons:baby_wither_skeleton'] as string[];

val master_mobs = [
        'mutantmonsters:mutant_enderman',
        'alexsmobs:void_worm',
        'morbid:morbid_harvester'] as string[];

for mob in expert_mobs {
    mods.MobStages.addStage("expert_mode", mob);
    mods.MobStages.toggleSpawner(mob, true);
}

for mob in master_mobs {
    mods.MobStages.addStage("master_mode", mob);
    mods.MobStages.toggleSpawner(mob, true);
}