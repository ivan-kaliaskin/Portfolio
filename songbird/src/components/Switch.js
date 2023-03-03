function Switch(sLabelOn, sLabelOff, sId, callbackOnClick) {
    const switchUnit = document.createElement('div')
    switchUnit.setAttribute('id', `switch-${sId}`)
    switchUnit.classList.add('switch')

    const labelOn = document.createElement('div')
    labelOn.classList.add('switch-label', 'switch-label-on')
    labelOn.innerText = sLabelOn

    const switchBody = document.createElement('div')
    switchBody.setAttribute('id', `switch-body-${sId}`)
    switchBody.classList.add('switch-body')

    const switchThumb = document.createElement('div')
    switchThumb.setAttribute('id', `switch-thumb-${sId}`)
    switchThumb.classList.add('switch-thumb')

    switchBody.append(switchThumb)

    const labelOff = document.createElement('div')
    labelOff.classList.add('switch-label', 'switch-label-off')
    labelOff.innerText = sLabelOff

    switchUnit.append(labelOn, switchBody, labelOff)

    switchBody.addEventListener('click', (event) => {
        switchThumb.classList.toggle('switch-off')
        const offState = switchThumb.classList.contains('switch-off')
        callbackOnClick(offState)
    })

    return switchUnit
}
export default Switch