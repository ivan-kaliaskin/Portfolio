// import state from '../state/state'
// import levels from '../constants/leves'
import elements from "../../constants/elements"
// import AnswerBlockContent from '../components/quizPage/AnswerBlockContent'
// import birds from '../constants/birds'

function setNextButtonContent(nLevel = 1000) {
    if (nLevel === 1000) {
        elements.nextButton.classList.remove('non-clickable')
        elements.nextButton.classList.add('clickable')
        return
    }

    if (nLevel === 0) {
        elements.nextButton.innerText = 'Начать игру'
        elements.nextButton.classList.remove('non-clickable')
        elements.nextButton.classList.add('clickable')
    } else {
        elements.nextButton.innerText = 'Следующий уровень'
        elements.nextButton.classList.remove('clickable')
        elements.nextButton.classList.add('non-clickable')
    }
}

export default setNextButtonContent