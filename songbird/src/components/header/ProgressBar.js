import levels from "../../constants/leves"
import getLevelName from "./LevelName";
import state from "../../state/state"
import elements from "../../constants/elements"

function getProgressBar(sId) {
    const lang = state.getLanguage()
    const ul = document.createElement('ul')
    const levelLabels = []

    for (let index = 1; index < levels.length; index++) {
        const li = getLevelName(`level-${index}`, ['level'], levels[index][`name-${lang}`])
        ul.append(li)
        levelLabels.push(li)
    }
    elements.setLevelLabels(levelLabels)
    ul.setAttribute('id', sId)
    return ul
}
export default getProgressBar
