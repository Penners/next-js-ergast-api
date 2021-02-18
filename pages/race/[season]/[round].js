import fetchAll from 'lib/fetchAll'
import getCountryCode from 'lib/getCountryCode'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Race = ({ results = {}, info = {} }) => {

    const { isFallback } = useRouter()

    const TopDrivers = ({ results = [] }) => {

        return (
            <>
                <div className="podium">
                    {results?.data.MRData.RaceTable.Races[0].Results.slice(0, 3).map((driver) => {
                        const { Driver: { givenName, familyName, url } } = driver
                        return (
                            <DriverHeadshot className="headshot" url={url} name={familyName} size={250} />
                        )
                    })}
                </div>
                <style jsx>{`
                .podium {
                    display: flex;
                }

                .podium .headshot {
                    margin-top: 50px;
                }
            `}</style>
            </>
        )
    }

    const DriverHeadshot = ({ name, url, size = 250 }) => {

        return (
            <>
                <div className="headshot">
                    <div className="name">
                        {name}
                    </div>
                </div>
                <style jsx>{`
                    .headshot {
                        width: 150px;
                        height: 250px;
                        background-color: grey;
                        display: flex;
                        justify-content: flex-end; 
                        flex-direction: column;
                        align-items: center;
                        border-radius: 10px;
                        border: 2px solid red;
                        background-size: cover;
                        background-position: center center; 
                        background-image: url(${`/api/wiki-image?wiki=${url}&size=${size}`});
                        overflow: hidden;
                    }

                    .name {
                        background-color: rgba(0, 0, 0, 0.7);
                        color: white;
                        text-align: center; 
                        width: 100%;
                        display: block;
                    }

                    .gradient {
                        animation-duration: 1.8s;
                        animation-fill-mode: forwards;
                        animation-iteration-count: infinite;
                        animation-name: placeHolderShimmer;
                        animation-timing-function: linear;
                        background: #f6f7f8;
                        background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
                        background-size: 1000px 640px;
                        
                        position: relative;
                        
                    }

                    @keyframes placeHolderShimmer{
                        0%{
                            background-position: -468px 0
                        }
                        100%{
                            background-position: 468px 0
                        }
                    }
                `}</style>
            </>
        )

    }

    return (
        <>
            {!isFallback && results.data &&
                <div>
                    {/* <TopDrivers results={results} /> */}
                    <span>Test</span>
                    <pre>
                        {JSON.stringify(info, null, 2)}
                    </pre>
                </div>


            }

            {isFallback &&
                <h1>Loading</h1>
            }

            <div>
                test
            </div>
        </>

    )
}

export async function getStaticProps({ params }) {

    const { season, round } = params

    if (!season || !round) {
        return {
            props: {
                success: false,
                message: 'missing parameters'
            }
        }
    }

    const requests = [
        {
            url: `https://ergast.com/api/f1/${season}/${round}.json`,
            name: 'info'
        },
        {
            url: `https://ergast.com/api/f1/${season}/${round}/qualifying.json`,
            name: 'qualifying'
        },
        {
            url: `https://ergast.com/api/f1/${season}/${round}/results.json`,
            name: 'results'
        }
    ]


    const results = await fetchAll(requests)

    results.info.data?.MRData?.RaceTable?.Races.map((race) => {
        race.Circuit.Location.iso2Alpha = getCountryCode(race.Circuit.Location)
        return race
    })

    return ({
        props: { ...results, success: true },
        revalidate: 60 * 60 * 24
    })
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export default Race