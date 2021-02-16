
import 'nprogress/nprogress.css'
import 'style.css'

import React from "react"
import Nav from "components/Nav"
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'


Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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

