import elements from "../constants/elements"
import setScoreIndication from "./setContent/setScoreIndication"
import state from "../state/state"

function changePageTo(sId) {
    setScoreIndication()
    switch (sId) {
        case 'quiz-page':
            elements.quizPage.classList.add('visible')
            elements.resultsPage.classList.remove('visible')
            elements.descriptionSoundPlayer.resetPlayer()
            break;
        case 'results-page':
            elements.quizPage.classList.remove('visible')
            elements.resultsPage.classList.add('visible')
            elements.resultsPage.setContent(state.score)
            break;

        default:
            console.log('404 page not found')
    }
}

export default changePageTo