import Main from 'components/Main'
import RaceList from 'components/RaceList'
import getRacesForSeaon from 'lib/data/getRacesForSeason'


const Schedule = (props) => {
   
    const { races = [], season } = props
    return (
    <>
        <Main>
            <RaceList raceList={races} {...{season}}/>
        </Main>
        
    </>
  )
}

export async function getStaticProps({ params }){

    const { season } = params

    const data = await getRacesForSeaon(season)

    return ({
        props: data,
        revalidate: 60
    })
}

export async function getStaticPaths(){
    return {
        paths: [
            '/schedule/2020'
        ],
        fallback: true
    }
}

export default Schedule