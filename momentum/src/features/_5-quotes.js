import oRuQuotes from '../constants/ruQuotes'
import oEnQuotes from '../constants/enQuotes'

const oQuoteResetButton = document.querySelector('.change-quote')
const oQuoteText = document.querySelector('.quote')
const oQuoteAuthor = document.querySelector('.author')


let nQuoteNumber = localStorage.getItem('quote number')

document.addEventListener('DOMContentLoaded', () => {
    setQuote(nQuoteNumber, 9)
})

oQuoteResetButton.addEventListener('click', () => {
    setQuote(nQuoteNumber, 9)
})

function getAnotherNumber(prevNumber, amount) {
    let nNewNumber = Math.floor(Math.random() * amount)
    if (nNewNumber === prevNumber) {
        nNewNumber++
        nNewNumber = nNewNumber >= amount ? 0 : nNewNumber
    }
    return nNewNumber
}
function setQuote(nQuoteNumber, num) {
    const sCurrentLanguage = localStorage.getItem('lang')
    const nNumber = getAnotherNumber(nQuoteNumber, num)
    const oQuotes = sCurrentLanguage === 'en' ? oEnQuotes : oRuQuotes
    oQuoteText.textContent = `"${oQuotes[nNumber].text}"`
    oQuoteAuthor.textContent = oQuotes[nNumber].author
    nQuoteNumber = nNumber
    localStorage.setItem('quote number', nQuoteNumber)

}
document.addEventListener("change-language", (event) => {
    setQuote(nQuoteNumber, 9)
})
