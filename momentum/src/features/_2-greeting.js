const oNameInputElement = document.querySelector('.name');

let sNameInputValue = ''

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
    oNameInputElement.value = '';
    if (localStorage.getItem('name')) {
        oNameInputElement.value = localStorage.getItem('name');
    }
})