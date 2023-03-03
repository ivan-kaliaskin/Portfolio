import en from "../constants/enVersion"
import ru from "../constants/ruVersion"

let sCurrentLanguage = localStorage.getItem('lang')
if (!(sCurrentLanguage === 'en' || sCurrentLanguage === 'ru')) {
    localStorage.setItem('lang', 'en')
    sCurrentLanguage = 'en'
}

let oCurrentLanguage = sCurrentLanguage === 'en' ? en : ru

const oSettingsButton = document.querySelector('.gear')
const oSettingsSection = document.querySelector('.settings')
oSettingsButton.addEventListener('click', () => {
    oSettingsSection.classList.toggle('settings-visible')
})
// -- block language
const oLanguageName = document.querySelector('.lang-name')
oLanguageName.textContent = oCurrentLanguage.lang

const oTimeName = document.querySelector('.time-name')
oTimeName.textContent = oCurrentLanguage.time

const oDateName = document.querySelector('.date-name')
oDateName.textContent = oCurrentLanguage.date

const oGreetingName = document.querySelector('.greeting-name')
oGreetingName.textContent = oCurrentLanguage.greeting

const oQuotesName = document.querySelector('.quotes-name')
oQuotesName.textContent = oCurrentLanguage.quotes

const oWeatherName = document.querySelector('.weather-name')
oWeatherName.textContent = oCurrentLanguage.weather

const oAudioplayerName = document.querySelector('.audioplayer-name')
oAudioplayerName.textContent = oCurrentLanguage.audioplayer

const oShowName = document.querySelector('.show-name')
oShowName.textContent = oCurrentLanguage.show

// -- block time visibility managment
const oTime = document.querySelector('.time')
const oTimeVisibleButton = document.querySelector('.btn-time-visibility')
oTimeVisibleButton.addEventListener('click', () => {
    oTime.classList.toggle('hidden')
    oTimeVisibleButton.classList.toggle('off-button')
})
// -- block date visivility managment
const oDate = document.querySelector('.date')
const oDateVisibleButton = document.querySelector('.btn-date-visibility')
oDateVisibleButton.addEventListener('click', () => {
    oDate.classList.toggle('hidden')
    oDateVisibleButton.classList.toggle('off-button')
})
// -- block greeting visivility managment
const oGreeting = document.querySelector('.greeting-container')
const oGreetingVisibleButton = document.querySelector('.btn-greeting-visibility')
oGreetingVisibleButton.addEventListener('click', () => {
    oGreeting.classList.toggle('hidden')
    oGreetingVisibleButton.classList.toggle('off-button')
})
// -- block quotes visivility managment
const oQuotes = document.querySelector('.quotes')
const oQuotesVisibleButton = document.querySelector('.btn-quotes-visibility')
oQuotesVisibleButton.addEventListener('click', () => {
    oQuotes.classList.toggle('hidden')
    oQuotesVisibleButton.classList.toggle('off-button')
})
// -- block weather visivility managment
const oWeather = document.querySelector('.weather')
const oWeatherVisibleButton = document.querySelector('.btn-weather-visibility')
oWeatherVisibleButton.addEventListener('click', () => {
    oWeather.classList.toggle('hidden')
    oWeatherVisibleButton.classList.toggle('off-button')
})
// -- block audioplayer visivility managment
const oAudioplayer = document.querySelector('.player')
const oAudioplayerVisibleButton = document.querySelector('.btn-audioplayer-visibility')
oAudioplayerVisibleButton.addEventListener('click', () => {
    oAudioplayer.classList.toggle('hidden')
    oAudioplayerVisibleButton.classList.toggle('off-button')
})

// -- we change language
document.addEventListener("change-language", (event) => {
    oCurrentLanguage = event.detail.name === 'en' ? en : ru
    oLanguageName.textContent = oCurrentLanguage.lang
    oTimeName.textContent = oCurrentLanguage.time
    oDateName.textContent = oCurrentLanguage.date
    oGreetingName.textContent = oCurrentLanguage.greeting
    oQuotesName.textContent = oCurrentLanguage.quotes
    oWeatherName.textContent = oCurrentLanguage.weather
    oAudioplayerName.textContent = oCurrentLanguage.audioplayer
    oShowName.textContent = oCurrentLanguage.show
})
