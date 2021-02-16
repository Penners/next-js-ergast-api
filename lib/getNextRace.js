import getCountryCode from "lib/getCountryCode"

const getNextRace = async () => {
    const data = await fetch(`https://ergast.com/api/f1/current/next.json`)
        .then(res => res.json())
        .then(resp => resp.MRData.RaceTable.Races[0])
        .catch(error => false)
    
    if (data){
        const { lat, long } = data.Circuit.Location 
        data.Circuit.Location.iso2Alpha = getCountryCode({lat, long})
    }

    return data
}

export default getNextRace