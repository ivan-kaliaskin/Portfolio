import track0 from "../../assets/sounds/Aqua Caelestis.mp3"
import track1 from "../../assets/sounds/Ennio Morricone.mp3"
import track2 from "../../assets/sounds/River Flows In You.mp3"
import track3 from "../../assets/sounds/Summer Wind.mp3"

const aTracks = [
    { no: 0, src: track0, trackName: 'Aqua Caelestis' },
    { no: 1, src: track1, trackName: 'Ennio Morricone' },
    { no: 2, src: track2, trackName: 'River Flows In You' },
    { no: 3, src: track3, trackName: 'Summer Wind' }
]
const oPlayButton = document.querySelector('.play')
const oNextButton = document.querySelector('.play-next')
const oPrevButton = document.querySelector('.play-prev')

let isPlay = false;
let playNum = 0

const audio = new Audio();

function playAudio(x) {
    audio.src = aTracks[x].src;
    audio.currentTime = 0;
    audio.play();
}
function pauseAudio() {
    audio.pause();
}

function fTrackStatus() {
    aTracks.forEach(track => {
        const currentTrack = document.querySelector(`#track-${track.no}`)
        if (track.no === playNum) {
            currentTrack.classList.remove('play-list-grey')
            currentTrack.classList.add('play-list-lime')
        } else {
            currentTrack.classList.remove('play-list-lime')
            currentTrack.classList.add('play-list-grey')
        }
    })
}

function fChangeTrack() {
    playAudio(playNum)
    isPlay = true
    oPlayButton.classList.add('pause')
    fTrackStatus()
}

oPlayButton.addEventListener('click', () => {
    oPlayButton.classList.toggle('pause');
    isPlay = !isPlay;
    if (!isPlay) {
        pauseAudio()
    } else {
        playAudio(0)
    }
    fTrackStatus()
})
oNextButton.addEventListener('click', () => {
    playNum = playNum === 3 ? 0 : playNum + 1
    fChangeTrack()
})

oPrevButton.addEventListener('click', () => {
    playNum = playNum === 0 ? 3 : playNum - 1
    fChangeTrack()
})

const oPlayList = document.querySelector('.play-list')

aTracks.forEach((track, index) => {
    const oTrackLine = document.createElement('li')
    oTrackLine.style.marginBottom = "4px"
    oTrackLine.textContent = track.trackName
    oTrackLine.setAttribute("id", `track-${index}`)
    oTrackLine.classList.add('play-list-grey')
    oPlayList.append(oTrackLine)
})