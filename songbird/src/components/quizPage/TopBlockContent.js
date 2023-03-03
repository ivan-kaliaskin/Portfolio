import elements from "../../constants/elements"
import birds from "../../constants/birds"
import state from "../../state/state"
import TopSound from "../quizPage/TopSound"
import birdFly from "../../assets/icons/bird-fly-logo.svg"

function TopBlockContent() {
    const topBlockContent = document.createElement('article')
    topBlockContent.setAttribute('id', 'top-block-content')

    const topPicture = document.createElement('img')
    topPicture.setAttribute('id', 'top-picture')
    topPicture.setAttribute('src', 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg')
    topPicture.setAttribute('alt', 'bird you have to guess')

    const topSound = TopSound()

    topBlockContent.append(topPicture, topSound)

    topBlockContent.setContent = (nLevel, bIsGuessed) => {
        const bird = state.randomBirdId

        if (nLevel > 0 && bIsGuessed) {
            topPicture.setAttribute('src', `${birds[nLevel][bird]["image"]}`)
            topPicture.setAttribute('alt', `${birds[nLevel][bird]["name"]}`)
            elements.topTitle.innerText = birds[nLevel][bird]["name"]
            elements.topSoundPlayer.setVisibility(true)
            elements.topSoundPlayer.resetPlayer()
            elements.topSoundPlayer.setSource(birds[nLevel][bird]["audio"])

        } else if (nLevel > 0 && !bIsGuessed) {
            topPicture.setAttribute('src', birdFly)
            topPicture.setAttribute('alt', 'the bird you have to guess')
            elements.topTitle.innerText = '*****'
            elements.topSoundPlayer.setVisibility(true)
            elements.topSoundPlayer.resetPlayer()
            elements.topSoundPlayer.setSource(birds[nLevel][bird]["audio"])

        } else {
            topPicture.setAttribute('src', birdFly)
            topPicture.setAttribute('alt', 'the bird you have to guess')
            elements.topTitle.innerText = 'the world best game'
            elements.topSoundPlayer.setVisibility(false)
        }
    }

    elements.topBlockContent = topBlockContent
    elements.topPicture = topPicture
    elements.topSound = topSound

    return topBlockContent
}
export default TopBlockContent
