
function initStageSkill(event, name, description) {

    event.add(name, 'basic', skill => {
        skill.initialValue(false)
        .description(description)
    })
}

SkillEvents.registration(event => {
    
    initStageSkill(event, 'expert_mode', 'expert difficulty')
    initStageSkill(event, 'master_mode', 'master difficulty')
})