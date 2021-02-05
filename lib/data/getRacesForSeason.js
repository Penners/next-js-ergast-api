import getCountryCode from 'lib/getCountryCode'


const getRacesForSeaon = async (year) => {

    const data = await fetch(`https://ergast.com/api/f1/${year}.json`).then((res) => {
        return res.json();
    }).then((resp) => {
        return resp
    }).catch((error) => {
        console.log(error)
        return false
    })

    const races = data.MRData?.RaceTable?.Races ?? []
    const season = data.MRData?.RaceTable?.season ?? null

    races.map((race) => {
        race.Circuit.Location.isoAlpha2 = getCountryCode(race.Circuit.Location)
        return race
    })

    return {
        season,
        races,
        loaded: races.length ? true : false
    }
}


export default getRacesForSeaon