import getWeather from "../services/getWeather";

const oCityInput = document.querySelector('.city');
const sSavedCity = localStorage.getItem('city');
const sCurrentCity = sSavedCity ? sSavedCity : 'Minsk'
const sCurrentLanguage = localStorage.getItem('lang')

oCityInput.value = sCurrentCity
const sUrlDefault = `https://api.openweathermap.org/data/2.5/weather?q=${sCurrentCity}&lang=${sCurrentLanguage}&appid=84ad93b3be56b7ab213337369f0ff6ba&units=metric`
getWeather(sUrlDefault, sCurrentCity)

oCityInput.addEventListener('change', (event) => {
    const sSelectedCity = event.target.value
    const sCurrentLanguage = localStorage.getItem('lang')
    const sUrl = `https://api.openweathermap.org/data/2.5/weather?q=${sSelectedCity}&lang=${sCurrentLanguage}&appid=84ad93b3be56b7ab213337369f0ff6ba&units=metric`;
    getWeather(sUrl, sSelectedCity)
})

document.addEventListener("change-language", (event) => {
    const oCityInput = document.querySelector('.city')
    const sSelectedCity = oCityInput.value
    const sCurrentLanguage = localStorage.getItem('lang')
    const sUrl = `https://api.openweathermap.org/data/2.5/weather?q=${sSelectedCity}&lang=${sCurrentLanguage}&appid=84ad93b3be56b7ab213337369f0ff6ba&units=metric`;
    getWeather(sUrl, sSelectedCity)
})
