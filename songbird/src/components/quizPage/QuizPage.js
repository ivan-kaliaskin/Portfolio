import onNextButtonClick from "../../functions/onNextButtonClick"
import elements from "../../constants/elements"
import onAnswerBlockClick from "../../functions/onAnswerBlockClick"
import TopBlockContent from "./TopBlockContent"
import DescriptionBlockContent from "./DescriptionBlockContent"

function getQuizPage() {
    const main = document.createElement('main')
    main.classList.add('page')
    main.setAttribute('id', 'quiz-page')

    const topBlock = document.createElement('section')
    topBlock.setAttribute('id', 'top-block')
    const topBlockContent = TopBlockContent()
    topBlock.append(topBlockContent)

    const answerBlock = document.createElement('section')
    answerBlock.setAttribute('id', 'answer-block')
    answerBlock.addEventListener('click', onAnswerBlockClick)

    const descriptionBlock = document.createElement('section')
    descriptionBlock.setAttribute('id', 'description-block')
    const descriptionBlockContent = DescriptionBlockContent()
    descriptionBlockContent.setContent(0, 0)
    elements.descriptionBlockContent = descriptionBlockContent
    descriptionBlock.append(descriptionBlockContent)

    const nextButton = document.createElement('button')
    nextButton.setAttribute('id', 'next-button')
    nextButton.addEventListener('click', onNextButtonClick)

    main.append(topBlock, answerBlock, descriptionBlock, nextButton)

    elements.setQuizPage(main)
    elements.topBlock = topBlock
    elements.answerBlock = answerBlock
    elements.descriptionBlock = descriptionBlock
    elements.nextButton = nextButton

    return main
}
export default getQuizPage
