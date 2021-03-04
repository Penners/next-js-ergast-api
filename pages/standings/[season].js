import Main from 'components/Main'
import getDriverStandings from 'lib/getDriverStandings'
import ResultsTable from 'components/ResultsTable'

const Standings = (props) => {

    const {
        driverStandings: {
            DriverStandings,
            season: driverSeason
        } = false
    } = props

    if (!driverSeason) return '....loading'

    const driverStandingsProps = {
        header: {
            position: 'Pos',
            name: 'Name',
            constructorName: 'Team',
            wins: 'Wins',
            points: 'Pts'

        },
        values: DriverStandings.map(({ 
            positionText: position,
            points,
            wins,
            Driver: { 
                givenName,
                familyName,
                permanentNumber = null
            }, 
            Constructors: [{ 
                name: constructorName,
            } = {}] = null
        }) => {
            return {
                position,
                points,
                wins,
                permanentNumber,
                constructorName,
                name: `${givenName} ${familyName}`
            }
        })
    }
   
    return (
    <>
        <Main>
            <ResultsTable {...driverStandingsProps} />
        </Main>
        
    </>
  )
}

export async function getStaticProps({ params }){

    const { season } = params

    const driverStandings = await getDriverStandings(season)

    return ({
        props: { driverStandings },
        revalidate: 60
    })
}

export async function getStaticPaths(){
    return {
        paths: [
            '/standings/2021'
        ],
        fallback: true
    }
}

export default Standings