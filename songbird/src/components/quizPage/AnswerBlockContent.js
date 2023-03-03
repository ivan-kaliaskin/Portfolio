import elements from "../../constants/elements"
import birds from "../../constants/birds"

function AnswerBlockContent(level) {
    const answerBlockContent = document.createElement('ul')
    answerBlockContent.setAttribute('id', 'answer-block-content')

    if (!level) {
        answerBlockContent.innerText = 'В хедере есть переключатель темы. Это + 10 баллов)'
        answerBlockContent.classList.add('answer-block-content-initial')
    } else {
        answerBlockContent.innerText = null
        answerBlockContent.classList.remove('answer-block-content-initial')
        const aBirdsForCurrentLevel = birds[level]
        const aBirdsList = []

        aBirdsForCurrentLevel.forEach((bird, index) => {
            const li = document.createElement('li')
            li.classList.add('answer-item')
            li.setAttribute('id', `answer-item-${index}`)

            const iconBlock = document.createElement('div')
            iconBlock.classList.add('answer-item__icon-block')

            const nameBlock = document.createElement('div')
            nameBlock.classList.add('answer-item__name-block')
            nameBlock.innerText = bird.name

            li.append(iconBlock, nameBlock)

            answerBlockContent.append(li)
            aBirdsList.push(li)
        })
        elements.birdsList = aBirdsList
    }

    return answerBlockContent
}
export default AnswerBlockContent
