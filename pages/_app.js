import 'style.css'
import React from "react"
import Nav from "components/Nav"
import Head from 'next/head'

export default function myApp({ Component, pageProps }){

    return(
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}

