import state from "../state/state";
import elements from "../constants/elements";
import setNextButtonContent from "./setContent/setNextButtonContent";
import DescriptionBlockContent from "../components/quizPage/DescriptionBlockContent";
// import changePageTo from "./changePageTo";
// import setPageContent from "../functions/setPageContent"


function onAnswerBlockClick(oEvent) {
    const nChosenBirdId = +oEvent.target.closest('li').id.split('-').reverse()[0]
    const sadPilik = new Audio()
    sadPilik.src = './assets/sounds/mixkit-click-error-1110.mp3'
    const happyPilik = new Audio()
    happyPilik.src = './assets/sounds/mixkit-select-click-1109.mp3'

    if (!elements.descriptionBlockContent) elements.descriptionBlock.append(DescriptionBlockContent())
    elements.descriptionBlockContent.setContent(state.level, nChosenBirdId)
    elements.descriptionSoundPlayer.resetPlayer()


    if (nChosenBirdId === state.randomBirdId) {
        state.levelPassed = true
        happyPilik.play()
        elements.topBlockContent.setContent(state.level, true)
        setNextButtonContent()
        elements.birdsList[nChosenBirdId].classList.add('right-answer')
        // TODO if guessed
        // scoreElement.innerText = `Score: ${score}`
        // начисляются очки
        // блокируется счётчик
        // добавляется класс к иконке птицы
    }
    else {
        sadPilik.play()
        if (!state.levelPassed) {
            elements.birdsList[nChosenBirdId].classList.add('wrong-answer')
            const score = state.score
            state.score = score - 1
        }
    }
}
export default onAnswerBlockClick