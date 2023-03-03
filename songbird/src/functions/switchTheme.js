import elements from "../constants/elements"

function switchTheme(bIsOff) {
    if (bIsOff) {
        elements.body.classList.add('theme-another')
        elements.body.classList.remove('theme-main')
    } else {
        elements.body.classList.remove('theme-another')
        elements.body.classList.add('theme-main')
    }
}
export default switchTheme