import onRestartButtonClick from '../functions/onRestartButtonClick'
import elements from "../constants/elements"
import state from '../state/state'

function getResultsPage() {
    const resultsPage = document.createElement('main')
    resultsPage.classList.add('page')
    resultsPage.setAttribute('id', 'results-page')

    const resultsMessage = document.createElement('div')
    resultsMessage.setAttribute('id', 'absolute-win-message')
    resultsMessage.innerText = `Поздравлем, вы набрали ??? баллов из 30!`

    const restartButton = document.createElement('button')
    restartButton.setAttribute('id', 'restart-button')
    restartButton.addEventListener('click', onRestartButtonClick)
    restartButton.innerText = 'Попробовать ещё раз'

    resultsPage.append(resultsMessage, restartButton)
    elements.resultsPage = resultsPage

    resultsPage.setContent = function (score) {
        resultsMessage.innerText = `Поздравлем!\nВы набрали ${score} из возможных 30 баллов!`
    }

    return resultsPage
}

export default getResultsPage