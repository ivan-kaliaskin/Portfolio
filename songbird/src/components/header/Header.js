import elements from "../../constants/elements"
import switchTheme from "../../functions/switchTheme"
import Switch from "../Switch"
import getProgressBar from "./ProgressBar"

const getHeader = () => {
    const header = document.createElement('header')
    header.setAttribute('id', 'header')

    const headerTop = document.createElement('div')
    headerTop.classList.add('header-top')

    const logo = document.createElement('div')
    logo.setAttribute('id', 'logo')
    logo.innerText = 'SongBird'

    const headerSwitchBlock = Switch('theme one', 'theme two', 'theme', switchTheme)

    const headerPlaceholder = document.createElement('div')
    headerPlaceholder.setAttribute('id', 'header-placeholder')

    const scoreCounter = document.createElement('div')
    scoreCounter.setAttribute('id', 'score-counter')
    scoreCounter.innerText = `Score: `

    headerTop.append(logo, headerSwitchBlock, headerPlaceholder, scoreCounter)

    const progressBar = getProgressBar('progress-bar')

    header.append(headerTop, progressBar)

    elements.scoreCounter = scoreCounter
    return header
}

export default getHeader
