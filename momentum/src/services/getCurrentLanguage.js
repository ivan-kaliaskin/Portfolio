const enButton = document.querySelector('.btn-en')
enButton.addEventListener('click', () => {
    localStorage.setItem('lang', 'en')
    enButton.dispatchEvent(new CustomEvent("change-language", {
        bubbles: true,
        detail: { name: "en" }
    }));
})

const ruButton = document.querySelector('.btn-ru')
ruButton.addEventListener('click', () => {
    localStorage.setItem('lang', 'ru')
    enButton.dispatchEvent(new CustomEvent("change-language", {
        bubbles: true,
        detail: { name: "ru" }
    }));
})

export default { enButton, ruButton }