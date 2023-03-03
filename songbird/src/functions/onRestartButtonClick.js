import state from '../state/state'
import changePageTo from './changePageTo'
import setPageContent from '../functions/setContent/setPageContent'

function onRestartButtonClick() {
    state.score = 0
    state.resetLevel()
    changePageTo('quiz-page')
    setPageContent(1)
}

export default onRestartButtonClick