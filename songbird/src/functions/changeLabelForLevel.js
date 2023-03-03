import elements from "../constants/elements"

function changeLabelForLevel(nLevel) {
    elements.levelLabels.forEach((label, index) => {
        if ((index + 1) === nLevel) {
            label.classList.add('current-level-label')
        } else {
            label.classList.remove('current-level-label')
        }
    })
}
export default changeLabelForLevel
