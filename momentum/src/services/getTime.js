const oWeekdaysAsWord = {
    1: 'Monday',
    2: 'Teusday',
    3: 'Wednesday',
    4: 'Thirsday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday'
}
const oMounthAsWord = {
    0: 'January',
    1: 'Febuary',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

function getTime() {
    const oCurrentDate = new Date()
    const sMonth = oCurrentDate.getMonth()
    const sWeekday = oCurrentDate.getDay()
    const sDay = oCurrentDate.getDate()
    const sHour = `0${oCurrentDate.getHours()}`.slice(-2)
    const sMinutes = `0${oCurrentDate.getMinutes()}`.slice(-2)
    const sSeconds = `0${oCurrentDate.getSeconds()}`.slice(-2)
    let sDayPart = ''
    switch (Math.ceil(sHour / 6)) {
        case 1: sDayPart = 'night'; break
        case 2: sDayPart = 'morning'; break
        case 3: sDayPart = 'afternoon'; break
        case 4: sDayPart = 'evening'; break
        default: sDayPart = 'WrongDayTime'
    }
    const oResult = {
        sShowTime: `${sHour}:${sMinutes}:${sSeconds}`,
        sShowDate: `${oWeekdaysAsWord[sWeekday]}, ${oMounthAsWord[sMonth]} ${sDay}`,
        sDayPart: sDayPart
    }
    return oResult
}
export default getTime