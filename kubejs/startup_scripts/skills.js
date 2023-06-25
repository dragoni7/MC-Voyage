
function initStageSkill(event, name, description) {

    event.add(name, 'basic', skill => {
        skill.initialValue(false)
        .description(description)
    })
}

SkillEvents.registration(event => {
    
    initStageSkill(event, 'expert_mode', 'expert difficulty')
    initStageSkill(event, 'master_mode', 'master difficulty')

    initStageSkill(event, 'bumblezone_access', 'bumblezone accessible')
    initStageSkill(event, 'nether_access', 'nether accessible')
    initStageSkill(event, 'twilight_access', 'twilight forest accessible')
    initStageSkill(event, 'undergarden_access', 'undergarden accessible')
})