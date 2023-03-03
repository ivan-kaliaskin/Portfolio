// import onRestartButtonClick from '../functions/onRestartButtonClick'
// import elements from "../constants/elements"


function getPlayer(sPlayerId, playFunction, changeVolume) {
    const player = document.createElement('div')
    player.setAttribute('id', `player-${sPlayerId}`)
    player.classList.add('player-visible')
    player.classList.add('player')

    const audio = document.createElement('audio')
    audio.setAttribute('id', `player-audio-${sPlayerId}`)
    audio.setAttribute('type', 'audio/mpeg')
    audio.setAttribute('preload', 'metadata')
    audio.setAttribute('src', null)
    audio.setAttribute('hidden', 'true')

    const controls = document.createElement('div')
    controls.classList.add('player-controls')

    const playButton = document.createElement('div')
    playButton.classList.add('player-button')
    playButton.addEventListener('click', playFunction)

    const slider = document.createElement('input')
    slider.setAttribute('type', 'range')
    slider.setAttribute('min', 0)
    slider.setAttribute('max', 60)
    slider.setAttribute('value', 0)
    slider.setAttribute('step', 1)
    slider.setAttribute('id', `player-slider-${sPlayerId}`)
    slider.classList.add('player-slider', 'time-range')

    const indicatorStart = document.createElement('div')
    indicatorStart.setAttribute('id', `player-indicator-start-${sPlayerId}`)
    indicatorStart.classList.add('player-indicator', 'player-indicator-start')
    indicatorStart.innerText = '00:00'

    const indicatorEnd = document.createElement('div')
    indicatorEnd.setAttribute('id', `player-indicator-end-${sPlayerId}`)
    indicatorEnd.classList.add('player-indicator', 'player-indicator-end')
    indicatorEnd.innerText = '00:00'

    // const volumeIcon = document.createElement('div')
    // volumeIcon.setAttribute('id', 'volume-icon')

    const placeholder = document.createElement('div')
    placeholder.classList.add('player-placeholder')

    const volumeSlider = document.createElement('input')
    volumeSlider.setAttribute('type', 'range')
    volumeSlider.setAttribute('min', 0)
    volumeSlider.setAttribute('max', 10)
    volumeSlider.setAttribute('value', 5)
    volumeSlider.setAttribute('step', 1)
    volumeSlider.setAttribute('id', `volume-slider-${sPlayerId}`)
    volumeSlider.classList.add('player-slider', 'volume')
    volumeSlider.addEventListener('input', () => changeVolume(volumeSlider.value))

    const indicatorContainer = document.createElement('div')
    indicatorContainer.classList.add('player-indicator-container')
    indicatorContainer.append(indicatorStart, volumeSlider, placeholder, indicatorEnd)
    // indicatorContainer.append(indicatorStart, volumeSlider, volumeIcon, placeholder, indicatorEnd)

    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('player-slider-container')
    sliderContainer.append(slider, indicatorContainer)

    controls.append(playButton, sliderContainer)
    player.append(audio, controls)

    return { player, audio, playButton, indicatorStart, indicatorEnd, slider, volumeSlider }
}

class Player {
    constructor(sPlayerId) {
        this.element = getPlayer(sPlayerId, this.onPlayClick, this.changeVolume)
        this.state = {
            mode: 'pause',
            duration: 0,
            currentTime: 0,
            volume: 5
        }
    }
    resetPlayer = () => {
        const au = this.element.audio
        const btn = this.element.playButton
        this.state.mode = 'init'
        this.state.currentTime = 0
        this.setCounter(0, 'start')
        this.setTimeSliderValue(0)
        btn.classList.remove('paused')
        au.pause()
    }
    onPlayClick = () => {
        const au = this.element.audio
        const btn = this.element.playButton
        if (this.state.mode === 'playing') {
            this.state.mode = 'pause'
            au.pause()
            btn.classList.remove('paused')
        } else {
            this.state.mode = 'playing'
            this.launchPlay()
            btn.classList.add('paused')
        }
    }
    setSource = (src) => {
        const au = this.element.audio
        au.setAttribute('src', src)
        au.onloadedmetadata = () => {
            this.state.duration = au.duration
            this.setCounter(au.duration, 'end')
        };
    }
    setCounter(number, startOrEnd) {
        const indEnd = Math.round(number)
        const min = `0${Math.floor(indEnd / 60)}`.slice(-2)
        const sec = `0${indEnd % 60}`.slice(-2)
        if (startOrEnd === 'start') {
            this.element.indicatorStart.innerText = `${min}:${sec}`
        } else {
            this.element.indicatorEnd.innerText = `${min}:${sec}`
        }
    }
    setCurrentTime = (time) => {
        this.state.currentTime = time
    }
    setTimeSliderValue = () => {
        const slider = this.element.slider
        slider.value = !this.state.duration ? 0 : Math.ceil(this.state.currentTime * 60 / this.state.duration)

    }
    setVisibility = (bIsVisibe) => {
        const player = this.element.player
        if (bIsVisibe) {
            player.classList.add('player-visible')
        } else {
            player.classList.remove('player-visible')
        }
    }
    launchPause = (time) => {
        const au = this.element.audio
        const btn = this.element.playButton

        this.state.mode = 'pause'
        this.state.currentTime = time
        btn.classList.remove('paused')
        au.pause()
    }
    launchPlay = () => {
        const au = this.element.audio
        let current = this.state.currentTime;
        const duration = this.state.duration
        let mode = function () { return this.state.mode }.bind(this)

        const setCurrentTime = this.setCurrentTime.bind(this)
        const resetPlayer = this.resetPlayer.bind(this)
        const setCounter = this.setCounter.bind(this)
        const launchPause = this.launchPause.bind(this)
        const setTimeSliderValue = this.setTimeSliderValue.bind(this)

        au.play()
        let timer = setTimeout(function go() {
            setCounter(current, 'start');
            current++;
            const m = mode()
            setCurrentTime(current)
            setTimeSliderValue()
            if (current < duration && m === 'playing') {
                setTimeout(go, 1000);
            } else if (m === 'init') {
                resetPlayer()
            } else if (m === 'pause') {
                launchPause(current)
            } else {
                resetPlayer()
            }
            clearTimeout(timer)
        }, 1000);

    }
    changeVolume = (value) => {
        this.state.volume = value
        this.setVolume()
    }
    setVolume = () => {
        this.element.audio.volume = this.state.volume / 10
        this.element.volumeSlider.value = this.state.volume
    }
}

export default Player