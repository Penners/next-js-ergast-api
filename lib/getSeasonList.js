const getSeasonList = () => {

    const start = new Date().getUTCFullYear()
    const end = 1950

    const years = []

    for(let i = start; i > end; i--){
        years.push(i)
    }

    return years
}

export default getSeasonList