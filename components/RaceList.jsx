import Link from 'next/link'
import Head from 'next/head'
import getShortHandDate from 'lib/getShortHandDate'
import getSeasonList from 'lib/getSeasonList'
import { useRouter } from 'next/router'
import Race from 'components/Race'

const RaceList = ({ raceList, season }) => {


    const router = useRouter()
    // const { schedule: { MRData: { RaceTable: { season, Races: races = [] }}}} = raceList
    const years = getSeasonList()
    
    const handleYearChange = (e) => {
        const newSeason = e.target.value
        router.push(newSeason)
    }


    return(
        <>
        <Head>
            <title>Formula 1 {season} Schedule</title>
        </Head>
        <div className="header">
            <h1 className="title">
                Formula 1 {` `} 
            <select className="select" onChange={handleYearChange} defaultValue={`/schedule/${season}`}>
                {years.map((year) => {
                    return(
                        <option key={`season-${year}`} className="option" value={`/schedule/${year}`}>{year}</option>
                    )
                })}
                
            </select>
            {` `} Schedule
            </h1>
        </div>
        
        <div className="race-list">
        
            {raceList.map((race, index)=> {
                return <Race key={`racelist-${index}`} {...race}/>                
            })}
        </div>
        <style jsx>{`

            .header {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                margin: 10px;
            }

            .title {
                margin: 0;
                font-weight: 400;
                font-size: 20px;
            }

            .select {
                border: 0;
                font-size: inherit;
            }
            .select:hover {
                cursor: pointer; 
            }
            .select:focus {
                border: red;
            }

            .option {
                font-size: initial;
            }

            .race-list {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-areas:
                ".";
                margin-bottom: 20px;
            }
            @media(min-width: 768px){
                .race-list {
                    grid-template-columns: 1fr 1fr;
                    grid-template-areas: ". .";
                }
            }
        `}</style>
        </>
    )
}

export default RaceList