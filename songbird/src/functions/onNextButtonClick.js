import state from "../state/state";
import changePageTo from "./changePageTo";
import setPageContent from "../functions/setContent/setPageContent"
import changeLabelForLevel from "./changeLabelForLevel";


function onNextButtonClick() {
    const currentLevel = state.level
    if (currentLevel === 6) {
        changePageTo('results-page')
        changeLabelForLevel(currentLevel + 1)
    } else (
        setPageContent(currentLevel + 1)
    )
    state.level = currentLevel + 1
    state.levelPassed = false
}

export default onNextButtonClick