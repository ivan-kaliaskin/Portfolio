import state from '../../state/state'
import elements from "../../constants/elements"

function setScoreIndication() {
    elements.scoreCounter.innerText = `Score: ${state.score}`
}

export default setScoreIndication