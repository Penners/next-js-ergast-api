import getCountryCode from "lib/getCountryCode"

const getPreviousRace = async () => {
    const data = await fetch(`https://ergast.com/api/f1/current/last/results.json`)
        .then(res => res.json())
        .then(resp => resp.MRData.RaceTable.Races[0])
        .catch(error => false)
    
    if (data){
        const { lat, long } = data.Circuit.Location 
        data.Circuit.Location.iso2Alpha = getCountryCode({lat, long})
        data.Results = data.Results.slice(0, 3)
    }

    return data
}

export default getPreviousRace