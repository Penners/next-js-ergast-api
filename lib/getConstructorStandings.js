const getConstructorStandings = async (season = 'current') => {
    const data = await fetch(`https://ergast.com/api/f1/${season}/constructorStandings.json`)
        .then(res => res.json())
        .then(resp => resp.MRData.StandingsTable.StandingsLists[0])
        .catch(error => false)
    
    return data
}

export default getConstructorStandings