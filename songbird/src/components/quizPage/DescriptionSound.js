import elements from "../../constants/elements"
import birds from "../../constants/birds"
import Player from "../Player"

function DescriptionSound(nLevel, nChosenBird) {
    const descriptionSound = document.createElement('div')
    descriptionSound.setAttribute('id', 'description-sound')

    const descriptionSoundNormalTitle = document.createElement('div')
    descriptionSoundNormalTitle.setAttribute('id', 'description-sound-normal-title')
    descriptionSoundNormalTitle.innerText = (nChosenBird >= 0) ? birds[nLevel][nChosenBird]["name"] : ''

    const descriptionSoundLatinTitle = document.createElement('div')
    descriptionSoundLatinTitle.setAttribute('id', 'description-sound-latin-title')
    descriptionSoundLatinTitle.innerText = (nChosenBird >= 0) ? birds[nLevel][nChosenBird]["species"] : ''

    const descriptionSoundPlayer = new Player('bird')
    elements.descriptionSoundNormalTitle = descriptionSoundNormalTitle
    elements.descriptionSoundLatinTitle = descriptionSoundLatinTitle
    elements.descriptionSoundPlayer = descriptionSoundPlayer

    descriptionSound.append(descriptionSoundNormalTitle, descriptionSoundLatinTitle, descriptionSoundPlayer.element.player)

    return descriptionSound
}
export default DescriptionSound
