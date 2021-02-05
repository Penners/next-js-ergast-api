import RaceList from 'components/RaceList'
import getRacesForSeaon from 'lib/data/getRacesForSeason'

const Schedule = (props) => {

    const { season, races } = props


  return (
    <>
        <RaceList raceList={races} {...{season}}/>
    </>
  )
}

export async function getServerSideProps(context){
    const year = new Date().getFullYear()
    const data = await getRacesForSeaon(year)


    
    return { props: data }
}


export default Schedule