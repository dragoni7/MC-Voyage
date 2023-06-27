ItemEvents.rightClicked(event => {
    // stage fixer
    if (event.item.id == 'kubejs:stage_repairer') {
        let player = event.player

        event.player.tell("\u00A7d" + "Fixing Stages...")

        event.server.runCommand('gamestage reload')

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
})