const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherDescription = document.querySelector('.weather-description');

async function getWeather(url, city) {
    try {
        const sCurrentLanguage = localStorage.getItem("lang")
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.removeAttribute('class')
        weatherIcon.classList.add(`owf`);
        weatherIcon.classList.add(`weather-icon`);

        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        humidity.textContent = `${sCurrentLanguage === 'en' ? 'Humidity' : 'Влажность'}: ${data.main.humidity}%`;
        wind.textContent = `${sCurrentLanguage === 'en' ? 'Wind' : 'Ветер'}: ${Math.round(data.wind.speed)} m/s`;

        weatherDescription.textContent = data.weather[0].description;
        localStorage.setItem('city', city)
    } catch (err) {
        alert("There is no such city", err)
    }
}

document.addEventListener("change-language", (event) => {
    setQuote(nQuoteNumber, 9)
})

export default getWeather