export const getShortHandDate = (date, withTime = true) => {

    if (!(date instanceof Date)){
        throw 'Invalid Date Object'
    }

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]

    const getOrdinal = (day) => {
        day = parseInt(day)
        if (day > 3 && day < 21) return 'th'
        switch (day % 10) {
          case 1:  return "st"
          case 2:  return "nd"
          case 3:  return "rd"
          default: return "th"
        }
    }

    const month = months[date.getMonth()]    
    const day = date.getDate()
    const ordinal = getOrdinal(day)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const time = withTime ? `${hours}:${minutes}` : '';

    return `${day}${ordinal} ${month} ${time}`

}

export default getShortHandDate