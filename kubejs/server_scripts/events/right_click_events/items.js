ItemEvents.rightClicked(event => {
    // stage fixer
    if (event.item.id == 'kubejs:stage_repairer') {
        let player = event.player

        event.player.tell("\u00A7d" + "Fixing Stages...")

        PlayerSkills.skills.forEach(skill => {
            if (player.data.skills.can(skill.name)) {

                event.player.tell("\u00A7d" + `Reapplying ${skill.name}...`)
    
                // remove skill
                event.server.scheduleInTicks(100, (callback) => {
                    event.server.runCommand(
                      `skills set ${event.player.name.string} ` + skill.name + '  false'
                    )
                })
    
                // reapply skill
                event.server.scheduleInTicks(140, (callback) => {
                    event.server.runCommand(
                      `skills set ${event.player.name.string} ` + skill.name + ' true'
                    )
                })
            }
        })
    }

    if (event.item.id == 'kubejs:tier_1_arcanist_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:apprentice_robe_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:apprentice_hood_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:apprentice_boots_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:apprentice_leggings_upgrade_1'
        );
    }

    if (event.item.id == 'kubejs:tier_1_sorceror_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:novice_robe_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:novice_hood_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:novice_boots_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:novice_leggings_upgrade_1'
        );
    }

    if (event.item.id == 'kubejs:tier_1_battlemage_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:archmage_robe_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:archmage_hood_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:archmage_boots_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:archmage_leggings_upgrade_1'
        );
    }

    if (event.item.id == 'kubejs:tier_1_elementalist_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:elemental_robe_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:elemental_hood_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:elemental_boots_upgrade_1'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:elemental_leggings_upgrade_1'
        );
    }

    if (event.item.id == 'kubejs:tier_2_arcanist_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:apprentice_robe_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:apprentice_hood_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:apprentice_boots_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:apprentice_leggings_upgrade_2'
        );
    }

    if (event.item.id == 'kubejs:tier_2_sorceror_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:novice_robe_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:novice_hood_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:novice_boots_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:novice_leggings_upgrade_2'
        );
    }

    if (event.item.id == 'kubejs:tier_2_battlemage_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:archmage_robe_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:archmage_hood_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:archmage_boots_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:archmage_leggings_upgrade_2'
        );
    }

    if (event.item.id == 'kubejs:tier_2_elementalist_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:elemental_robe_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:elemental_hood_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:elemental_boots_upgrade_2'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:elemental_leggings_upgrade_2'
        );
    }

    if (event.item.id == 'kubejs:tier_3_arcanist_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:apprentice_robe_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:apprentice_hood_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:apprentice_boots_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:apprentice_leggings_upgrade_3'
        );
    }

    if (event.item.id == 'kubejs:tier_3_sorceror_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:novice_robe_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:novice_hood_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:novice_boots_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:novice_leggings_upgrade_3'
        );
    }

    if (event.item.id == 'kubejs:tier_3_battlemage_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:archmage_robe_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:archmage_hood_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:archmage_boots_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:archmage_leggings_upgrade_3'
        );
    }

    if (event.item.id == 'kubejs:tier_3_elementalist_upgrade') {
        event.player.getMainHandItem().count--;
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.chest kubejs:elemental_robe_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.head kubejs:elemental_hood_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.feet kubejs:elemental_boots_upgrade_3'
        );
        event.server.runCommand(
            'execute as ' + event.player.name.string + ' run item modify entity ' + event.player.name.string + ' armor.legs kubejs:elemental_leggings_upgrade_3'
        );
    }
});