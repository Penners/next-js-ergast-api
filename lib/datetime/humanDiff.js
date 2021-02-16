const humanDiff = (now, then) => {
    let diff = Math.floor( (+then - +now) / 1000)
    let days = Math.floor( diff / 60 / 60 / 24)
    diff = diff - days * 60 * 60 * 24
    let hours = Math.floor(diff / 60 / 60 )
    diff = diff - hours * 60 * 60
    let minutes = Math.floor(diff / 60)
    diff = diff - minutes * 60
    let seconds = Math.floor(diff)

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

export default humanDiff