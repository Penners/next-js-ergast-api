import Main from 'components/Main'
import getNextRace from 'lib/getNextRace'
import getPreviousRace from 'lib/getPreviousRace'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import humanDiff from 'lib/datetime/humanDiff'
import Card from 'components/Card'

const Schedule = (props) => {

    const { nextRace, previousRace } = props

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

        const [days,    setDays]    = useState('00')
        const [hours,   setHours]   = useState('00')
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

        return(
            <>
            <Card>
                <div className="headline">
                    <img className="flag" src={`https://flagcdn.com/w160/${iso2Alpha.toLowerCase()}.png`} />
                    <div>
                    <h1 className="race-name">{raceName} {season}</h1>
                    <p className="circuit-name">{circuitName}</p>
                    </div>
                    
                </div>
                
                <div className="next-race">
                    <div className="countdown">
                        <div>{days} Days</div>
                        <div>{hours} Hours</div>
                        <div>{minutes} Minutes</div>
                        <div>{seconds} Seconds</div>
                    </div>
                </div>
                <Link href={`/schedule/${season}`}>
                    <a className="button">
                        View full {season} schedule
                    </a>
                </Link>
            </Card>
            
            <style jsx>
                {`


                .headline {
                    display: flex;
                    margin: 10px;
                    align-items: center;
                }

                .race-name {
                    margin: 0;
                }
                .circuit-name {
                    margin: 0;
                }
                    .flag {
                        
                        height: 50px;
                        border-radius: 10px;
                        border: 1px solid black;
                        margin-right: 10px;
                    }
                    .next-race {
                        
                        display: block;
                        padding: 10px;
                        border-radius: 10px;
                        margin: 10px 0;
                    }
                    .countdown {
                        display: flex;
                        justify-content: space-evenly;
                        color: white;
                        font-family: monospace;
                        background-color: darkgrey;
                        padding: 10px;
                        border-radius: 10px;
                    }

                    .button {
                        background-color: red;
                        color: white;
                        display: block;
                        text-align: center;
                        padding: 15px;
                    }

                    .button:hover {
                        filter: brightness(0.9);
                    }
                `}
            </style>
            </>
        )
    }
    

  return (
    <>
    <Main>
    <RaceCountdown {...nextRace}/>
    {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    <h2>Current Standings</h2>
    </Main>
        
    </>
  )
}

export async function getServerSideProps(context){
    

    const data = await Promise.all([
        getNextRace(), 
        getPreviousRace()
    ])

    const [nextRace, previousRace] = data
    
    return { props: { nextRace, previousRace } }
}


export default Schedule