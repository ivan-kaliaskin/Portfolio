import getTime from "../services/getTime"

let nCounter = Math.ceil(Math.random() * 20)

const oBody = document.querySelector('#body')
const sInitialUrl = getUrl()
setBg(sInitialUrl)

function getUrl() {
    const timeOfDay = getTime()['sDayPart']
    const nRandomNum = nCounter
    const nCorrectNumber = `${nRandomNum}`.padStart(2, '0')
    return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${nCorrectNumber}.jpg`
}

const oNextButton = document.querySelector(".slide-next")
const oPrevButton = document.querySelector(".slide-prev")

oNextButton.addEventListener('click', () => {
    nCounter = nCounter % 20 + 1
    const oUrl = getUrl()
    setBg(oUrl)
})
oPrevButton.addEventListener('click', () => {
    nCounter = (nCounter - 1) === 0 ? 20 : (nCounter - 1)
    const oUrl = getUrl()
    setBg(oUrl)
})

function setBg(url) {
    const img = new Image();
    img.src = url
    img.onload = () => {
        oBody.style.backgroundImage = `url(${url})`
    };
}