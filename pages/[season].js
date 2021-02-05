import getCountryCode from 'lib/getCountryCode'
import getSeasonList from 'lib/getSeasonList'
import { useRouter } from 'next/router'
import RaceList from 'components/RaceList'
import getRacesForSeaon from 'lib/data/getRacesForSeason'


const Schedule = (props) => {

    const router = useRouter()

    if (router.isFallback){
        return (
            <h1>Loading</h1>
        )
    }
   
    const { races = [], season } = props



    return (
    <>
        <RaceList raceList={races} {...{season}}/>
    </>
  )
}

export async function getStaticProps({ params }){

    const { season } = params

    const data = await getRacesForSeaon(season)

    return ({
        props: data,
        revalidate: 1
    })
}

export async function getStaticPaths(){
    return {
        paths: [
            '/2020'
        ],
        fallback: true
    }
}

export default Schedule