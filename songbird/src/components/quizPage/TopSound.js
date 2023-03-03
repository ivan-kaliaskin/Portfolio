import elements from "../../constants/elements"
import birds from "../../constants/birds"
import Player from "../Player"

function TopSound(nLevel, nChosenBird) {
    const topSound = document.createElement('div')
    topSound.setAttribute('id', 'top-sound')

    const topTitle = document.createElement('div')
    topTitle.setAttribute('id', 'top-title')
    topTitle.innerText = (nChosenBird >= 0) ? birds[nLevel][nChosenBird]["name"] : ''

    const topPlaceholder = document.createElement('div')
    topPlaceholder.classList.add('top-sound-placeholder')

    const topSoundPlayer = new Player('secret-bird')

    elements.topTitle = topTitle
    elements.topSoundPlayer = topSoundPlayer

    topSound.append(topTitle, topPlaceholder, topSoundPlayer.element.player)

    return topSound
}
export default TopSound
