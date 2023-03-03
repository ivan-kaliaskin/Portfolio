function getLevelName(sId, aClasses, sInnerText) {
    const li = document.createElement('li')
    li.setAttribute('id', sId)
    aClasses.forEach(function (cl) {
        li.classList.add(cl)
    });
    li.innerText = sInnerText
    return li
}
export default getLevelName
