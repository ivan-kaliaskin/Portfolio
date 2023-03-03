import getTime from "../services/getTime"

const oTimeElement = document.querySelector('.time');
const oDateElement = document.querySelector('.date');
const oGreetingElement = document.querySelector('.greeting');

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
showTime();
