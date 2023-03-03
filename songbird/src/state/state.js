import setStateInLocalStorage from "../functions/setStateInLocalstorage"

const state = {
    language: 'ru',
    _level: 0,
    _randomBirdId: null,
    _score: 0,
    _levelPassed: false,

    getLanguage() {
        return this.language
    },
    setLanguage(lang) {
        this.language = lang
    },
    get level() {
        return this._level
    },
    set level(number) {
        this._level = number
    },
    get randomBirdId() {
        return this._randomBirdId
    },
    set randomBirdId(number) {
        this._randomBirdId = number
    },
    get score() {
        return this._score
    },
    set score(a) {
        this._score = a
    },
    get levelPassed() {
        return this._levelPassed
    },
    set levelPassed(bIsPassed) {
        this._levelPassed = bIsPassed
    },
    resetLevel() {
        this._level = 1
    }

}
export default state