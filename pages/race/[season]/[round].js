import fetchAll from 'lib/fetchAll'
import getCountryCode from 'lib/getCountryCode'
import { useRouter } from 'next/router'

const Race = (props) => {

    const { isFallback } = useRouter()




    return (
        <>
        <h1>{isFallback ? 'Loading Baby' : 'Loaded'}</h1>
        <pre>
            {JSON.stringify(props, null, 2)}
        </pre>
        </>
    )
}

export async function getStaticProps({ params }){

    const { season, round } = params

    console.log(season, round)

    if (season === undefined || round === undefined){
        return 
    }

    const requests = [
        {
            url: `https://ergast.com/api/f1/${season}/${round}.json`,
            name: 'info'
        },
        {
            url: `https://ergast.com/api/f1/${season}/${round}/qualifying.json`,
            name: 'qualifying'
        },
        {
            url: `https://ergast.com/api/f1/${season}/${round}/results.json`,
            name: 'results'
        }
    ]
    

    const results = await fetchAll(requests)

    results.info.data?.MRData?.RaceTable?.Races.map((race) => {
        race.Circuit.Location.iso2Alpha = getCountryCode(race.Circuit.Location)
        console.log(race.Circuit.Location);
        return race
    })

    return ({
        props: results,
        revalidate: 60 * 60 * 24
    })
}

export async function getStaticPaths(){



    return {
        paths: [],
        fallback: true
    }
}

export default Race