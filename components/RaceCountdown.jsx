import Link from 'next/link'
import getShortHandDate from 'lib/getShortHandDate'
import humanDiff from 'lib/datetime/humanDiff'
import { useState, useEffect } from 'react'
import Card from 'components/Card'

const RaceCountdown = ({
    season,
    round,
    raceName,
    Circuit: {
        circuitName,
        Location: {
            iso2Alpha
        }
    },
    date,
    time
}) => {

    const raceDate = new Date(`${date} ${time}`)

    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')

    useEffect(() => {
        const updatCountdownTick = setInterval(() => {
            updateCountdown()
        }, 1000)

        return () => {
            clearInterval(updatCountdownTick)
        }
    }, [])

    const updateCountdown = () => {

        const diff = humanDiff(new Date(), new Date(`${date} ${time}`))

        setDays(String(diff.days).padStart(2, '0'))
        setHours(String(diff.hours).padStart(2, '0'))
        setMinutes(String(diff.minutes).padStart(2, '0'))
        setSeconds(String(diff.seconds).padStart(2, '0'))

    }




    return (
        <>
            <Card>
                <div className="next-race">
                        <div className="countdown">
                            <div className="countdown-unit">
                                <span className="countdown-time">{days}</span>
                                <span className="countdown-label">Days</span>
                            </div>
                            <div className="countdown-unit">
                                <span className="countdown-time">{hours}</span>
                                <span className="countdown-label">Days</span>
                            </div>
                            <div className="countdown-unit">
                                <span className="countdown-time">{minutes}</span>
                                <span className="countdown-label">Minutes</span>
                            </div>
                            <div className="countdown-unit">
                                <span className="countdown-time">{seconds}</span>
                                <span className="countdown-label">Seconds</span>
                            </div>
                        </div>
                    </div>
                <div className="container">
                    <div className="headline">
                        <img className="flag" src={`https://flagcdn.com/w160/${iso2Alpha.toLowerCase()}.png`} />
                        <div className="info-container">
                            <p className="race-name">{raceName} {season}</p>
                            <p className="circuit-name">{circuitName}</p>
                            <time className="date" dateTime={raceDate}>{getShortHandDate(raceDate)} </time>
                        </div>

                    </div>
                    <Link href={`/schedule/${season}`}>
                        <a className="button">
                            View full {season} schedule
                        </a>
                    </Link>
                </div>
                
                
            </Card>

            <style jsx>
                {`

            h2 {
                margin: 10px;
                font-weight: 400;
            }

            .container {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                gap: 0px 0px;
                grid-template-areas:
                    ".";
            }

            @media (min-width: 768px){
                .container {
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    grid-template-areas:
                        ". .";
                }
            }

            .headline {
                display: flex;
                align-items: center;
                margin: 10px;
            }

            .race-name {
                margin: 0;
                font-weight: 500;
                font-size: 18px;
            }
            .circuit-name {
                margin: 0;
                font-weight: 400;
                font-size: 14px;
            }

            .info-container {
                margin: 0 10px;
            }
            .flag {
                box-shadow: 0px 2px 15px 2px rgba(186,186,186,0.73);
                object-fit: cover;
                object-position: center center;
                height: 40px;
                width: 60px;
                margin: 10px 0;
                border-radius: 10%;
            }

            .date {
            display: block;
            margin: 0;
            font-size: 12px;
            font-weight: 400;
            color: grey;
        }
            .next-race {
                
                display: block;
                padding: 10px;
                border-radius: 10px;
            }
            .countdown {
                display: flex;
                justify-content: space-evenly;
                color: white;
                font-family: monospace;
                
                padding: 0;
                border-radius: 10px;
                font-size: 18px;
            }

            .countdown-unit {
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                background-color: rgb(41, 41, 41);
                flex-basis: 100%;
                border-radius: 10px;
                margin: 10px;
                min-height: 100px;
                position: relative;
            }

            .countdown-time {
                font-size: 40px;
                margin: 30px 10px;
            }
            .countdown-label {
                font-size: 14px; 
                position: absolute;
                bottom: 0;
                margin: 10px;
            }

            .button {
                background-color: red;
                color: white;
                display: block;
                text-align: center;
                padding: 15px;
                margin: 10px;
                border-radius: 10px;
                align-self: center;
            }

            .button:hover {
                filter: brightness(0.9);
            }
        `}
        </style>
        </>
    )
}


export default RaceCountdown