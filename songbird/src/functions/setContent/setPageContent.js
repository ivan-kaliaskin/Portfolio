import state from '../../state/state'
import elements from "../../constants/elements"
import AnswerBlockContent from '../../components/quizPage/AnswerBlockContent'
import setNextButtonContent from './setNextButtonContent'
import changeLabelForLevel from '../changeLabelForLevel'
import setScoreIndication from '../../functions/setContent/setScoreIndication'

function setPageContent(nLevel) {
    if (nLevel === 1) {
        state.score = 0
    }

    const nRandomBirdId = Math.floor(Math.random() * 6)
    state.randomBirdId = nRandomBirdId
    setScoreIndication()

    const lastScore = state.score
    state.score = lastScore + 5
    // levelLabenls content
    changeLabelForLevel(nLevel)

    // topBlock content
    elements.topBlockContent.setContent(nLevel, false)

    // answerBlock content
    elements.answerBlock.innerHTML = null
    elements.answerBlock.append(AnswerBlockContent(nLevel))
    // descriptionBlock content
    elements.descriptionBlockContent.setContent(nLevel)
    // nextButton appearance
    setNextButtonContent(nLevel)
}

export default setPageContent