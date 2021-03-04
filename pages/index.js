import Main from 'components/Main'
import getNextRace from 'lib/getNextRace'
import getPreviousRace from 'lib/getPreviousRace'
import getDriverStandings from 'lib/getDriverStandings'
import getConstructorStandings from 'lib/getConstructorStandings'
import RaceCountdown from 'components/RaceCountdown'
import ResultsTable from 'components/ResultsTable'

const Index = (props) => {

    const {
        nextRace,
        driverStandings: {
            DriverStandings,
            season: driverSeason
        },
        constructorStandings: {
            ConstructorStandings,
            season: constructorSeason
        }
    } = props


    const driverStandingsProps = {
        title: `${driverSeason} Driver Standings`,
        link: {
            href: `/standings/${driverSeason}`,
            label: `View full ${driverSeason} Standings`
        },
        header: {
            position: 'Pos',
            name: 'Name',
            wins: 'Wins',
            points: 'Pts'

        },
        values: DriverStandings.slice(0, 5).map(({ positionText: position, points, wins, Driver: { givenName, familyName } }) => {
            return {
                position,
                points,
                wins,
                name: `${givenName[0]}. ${familyName}`
            }
        })
    }

    const constructorStandingsProps = {
        title: `${driverSeason} Constructor Standings`,
        link: {
            href: `/standings/${constructorSeason}`,
            label: `View full ${constructorSeason} Standings`
        },
        header: {
            position: 'Pos',
            name: 'Name',
            wins: 'Wins',
            points: 'Pts'

        },
        values: ConstructorStandings.slice(0, 5).map(({ positionText: position, points, wins, Constructor: { name } }) => {
            return {
                position,
                points,
                wins,
                name
            }
        })
    }






    return (
        <>
            <Main>
                <RaceCountdown {...nextRace} />
                <div className="container">
                    <ResultsTable {...driverStandingsProps} />
                    <ResultsTable {...constructorStandingsProps} />
                </div>

                <style jsx>{`
                    .container {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr;
                        gap: 0px 0px;
                        grid-template-areas: ".";
                    }

                    @media (min-width: 768px){
                        .container {
                            grid-template-columns: 1fr 1fr;
                            grid-template-rows: 1fr;
                            grid-template-areas:
                                ". .";
                        }
                    }                              
                `}
                </style>
            </Main>
        </>
    )
}

export async function getStaticProps() {


    const data = await Promise.all([
        getNextRace(),
        getPreviousRace(),
        getDriverStandings(),
        getConstructorStandings()
    ])

    const [nextRace, previousRace, driverStandings, constructorStandings] = data

    return { props: { nextRace, previousRace, driverStandings, constructorStandings }, revalidate: 60 }
}


export default Index