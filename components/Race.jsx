import Card from 'components/Card'
import Link from 'next/link'
import getShortHandDate from 'lib/getShortHandDate'

const Race = ({ raceName, round, date, time = null, season, Circuit: { url, circuitName, Location: { isoAlpha2, country } } }) => {
    const cc = isoAlpha2.toLowerCase()
    const datetime = new Date(Date.parse((date && time) ? `${date} ${time}` : date))
    return (
        <Card>
            <Link href={`/race/${season}/${round}`}>
                <a className="race">
                    <div className="round">
                        {`R${round}`}
                    </div>
                    <img className="flag" src={`https://flagcdn.com/w160/${cc}.png`} />
                    <div className="meta">
                        <h2 className="name">{raceName}</h2>
                        <h3 className="circuit">{circuitName}</h3>
                        <time className="date" dateTime={datetime}>{getShortHandDate(datetime)} </time>
                    </div>
                </a>
            </Link>
            <style jsx>{`
        .race {
            display: flex;
            align-items: center; 
            background-color: white; 
            height: 100%;
        }  

        .race:only-child {
            grid-column: 1/-1;
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
            font-weight: 500;

        }

        .flag {
            box-shadow: 0px 2px 15px 2px rgba(186,186,186,0.73);
            object-fit: cover;
            object-position: center center;

            height: 40px;
            width: 60px;
            margin: 10px 0 10px 10px;
            border-radius: 10%;

        }

        .meta {
            margin: 10px;
        }

        .date {
            display: block;
            margin: 0;
            font-size: 12px;
            font-weight: 400;
            color: grey;
        }

        .name {
            margin: 0;
            font-size: 16px;
            font-weight: 500;
        }
        .circuit {
            margin: 0; 
            font-size: 14px;
            font-weight: 400;
        }    
        `}</style>
        </Card>
    )
}

export default Race