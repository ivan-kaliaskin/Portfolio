import elements from "../../constants/elements"
import birds from "../../constants/birds"
import birdFly from "../../assets/icons/bird-fly-logo.svg"
import DescriptionSound from "../quizPage/DescriptionSound"

function DescriptionBlockContent() {
    const descriptionBlockContent = document.createElement('article')
    descriptionBlockContent.setAttribute('id', 'description-block-content')

    const descriptionPicture = document.createElement('img')
    descriptionPicture.setAttribute('id', 'description-picture')

    const descriptionSound = DescriptionSound()

    const descriptionText = document.createElement('p')
    descriptionText.setAttribute('id', 'description-text')
    descriptionBlockContent.append(descriptionPicture, descriptionSound, descriptionText)

    descriptionBlockContent.setContent = (nLevel, nChosenBird = -1) => {
        console.log(nLevel, nChosenBird)
        elements.descriptionSoundPlayer.resetPlayer()

        if (!nLevel) {
            descriptionPicture.style.display = 'none'
            descriptionSound.style.display = 'none'
            elements.descriptionSoundNormalTitle.style.display = 'none'
            elements.descriptionSoundLatinTitle.style.display = 'none'
            descriptionText.innerText = 'Для старта нажмите кнопку "Начать игру"'
            descriptionText.classList.add('expanded-text')
            elements.descriptionSoundPlayer.setVisibility(false)

        } else if (nChosenBird >= 0 && nLevel) {
            descriptionPicture.style.display = 'block'
            descriptionSound.style.display = 'block'
            descriptionPicture.setAttribute('src', `${birds[nLevel][nChosenBird]["image"]}`)
            descriptionPicture.setAttribute('alt', `${birds[nLevel][nChosenBird]["name"]}`)
            elements.descriptionSoundNormalTitle.style.display = 'block'
            elements.descriptionSoundLatinTitle.style.display = 'block'
            elements.descriptionSoundNormalTitle.innerText = birds[nLevel][nChosenBird]["name"]
            elements.descriptionSoundLatinTitle.innerText = birds[nLevel][nChosenBird]["species"]
            elements.descriptionSoundPlayer.setSource(birds[nLevel][nChosenBird]["audio"])
            elements.descriptionSoundPlayer.setVisibility(true)
            descriptionText.innerText = birds[nLevel][nChosenBird]["description"]
            descriptionText.classList.remove('expanded-text')
        } else {
            descriptionPicture.style.display = 'block'
            descriptionSound.style.display = 'block'
            descriptionPicture.setAttribute('src', birdFly)
            descriptionPicture.setAttribute('alt', 'the bird you have to guess')
            elements.descriptionSoundNormalTitle.style.display = 'block'
            elements.descriptionSoundLatinTitle.style.display = 'block'
            elements.descriptionSoundNormalTitle.innerText = 'Послушайте плеер'
            elements.descriptionSoundLatinTitle.innerText = 'Выберите птицу из списка'
            descriptionText.innerText = ''
            descriptionText.classList.remove('expanded-text')
            elements.descriptionSoundPlayer.setVisibility(false)
        }
    }

    elements.descriptionPicture = descriptionPicture
    elements.descriptionSound = descriptionSound
    elements.descriptionText = descriptionText

    return descriptionBlockContent
}
export default DescriptionBlockContent
