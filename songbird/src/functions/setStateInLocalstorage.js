import state from "../state/state";

function setStateInLocalStorage() {
    const oStateToSave = {
        level: state.level,
        randomBirdId: state.randomBirdId,
        score: state.score
    }
    const sStateToSave = JSON.stringify(oStateToSave)
    localStorage.setItem('songBirdState', sStateToSave);
}

export default setStateInLocalStorage