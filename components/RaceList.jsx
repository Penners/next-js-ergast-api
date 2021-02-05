import Link from 'next/link'
import getShortHandDate from 'lib/getShortHandDate'
import getSeasonList from 'lib/getSeasonList'
import { useRouter } from 'next/router'


const RaceList = ({ raceList, season }) => {


    const router = useRouter()
    // const { schedule: { MRData: { RaceTable: { season, Races: races = [] }}}} = raceList
    const years = getSeasonList()
    
    const handleYearChange = (e) => {
        const newSeason = e.target.value
        router.push(newSeason)
    }

    console.log(raceList)
 
    return(
        <>
        {router.isFallback ? 'Loading....' : 'Loaded'}
        <h1>{season} Calander</h1>
        <select onChange={handleYearChange} defaultValue={season}>
            {years.map((year) => {
                return(
                    <option value={year} key={year}>{year}</option>
                )
            })}
        </select>
        <div className="race-list">
            {raceList.map(({raceName, round, date, time = null, season, Circuit: {url, circuitName, Location: { isoAlpha2, country }}})=> {
                const cc = isoAlpha2.toLowerCase()
                const datetime = new Date(Date.parse((date && time) ? `${date} ${time}` : date))
                return (
                    <Link key={raceName} href={`/race/${season}/${round}`}>
                        <a className="race">
                            <div className="round">
                                {`R${round}`}
                            </div>
                            <img className="flag" src={`https://flagcdn.com/w160/${cc}.png`} />
                            <img className="circuit" src={`/api/image?wiki=${url}`} />
                            <div className="meta">
                                <time className="date" dateTime={datetime}>{getShortHandDate(datetime)}</time>
                                <h2 className="name">{raceName}</h2>
                                <h3 className="circuit">{circuitName}</h3>
                            </div>
                        </a>
                    </Link>
                )
            })}
        </div>
        <style jsx>{`
            .race-list {
                max-width: 600px;
                margin: auto;
            }
            .race {
                display: flex;
                align-items: center; 
                background-color: white; 
                border: 1px solid black;
                margin: 10px;
                border-radius: 5px;
                overflow: hidden;
            }  

            .round {
                background-color: red;
                color: white;
                display: flex;
                align-self: stretch;
                justify-content: center;
                align-items: center;
                min-width: 50px;
                font-size: 20px;
            }

            .flag {
                border: 1px solid black;
                object-fit: cover;
                object-position: center center;

                height: 50px;
                width: 50px;
                margin: 10px;
                border-radius: 50%;

            }

            .meta {
                margin: 10px;
            }

            .date {
                margin: 0;
                font-size: 12px;
            }

            .name {
                margin: 0;
                font-size: 16px;
            }
            .circuit {
                margin: 0; 
                font-size: 14px;
            }
        `}</style>
        </>
    )
}

export default RaceList