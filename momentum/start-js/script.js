const oTimeElement = document.querySelector('.time');
const oDateElement = document.querySelector('.date');
const oGreetingElement = document.querySelector('.greeting');
const oNameInputElement = document.querySelector('.name');

let sNameInputValue = ''

const aWeekdays =
    function showTime() {

        setInterval(() => {
            const oCurrentTime = getTime()
            const sShowTime = oCurrentTime['sShowTime']
            const sShowDate = oCurrentTime['sShowDate']
            const sDayPart = oCurrentTime['sDayPart']
            oTimeElement.textContent = sShowTime
            oDateElement.textContent = sShowDate
            oGreetingElement.textContent = `Good ${sDayPart} `
        }, 1000);

    }
aWeekdays();

oNameInputElement.addEventListener("input", (event) => {
    sNameInputValue = event.target.value
    oNameInputElement.value = sNameInputValue
})
window.addEventListener('beforeunload', (event) => {
    // event.preventDefault()
    // event.returnValue = ''
    localStorage.setItem('name', oNameInputElement.value);
})
window.addEventListener('DOMContentLoaded', () => {
    oNameInputElement.value = 'no name';
    if (localStorage.getItem('name')) {
        oNameInputElement.value = localStorage.getItem('name');
    }
})
const body = getElementsByTagName('body')
body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";