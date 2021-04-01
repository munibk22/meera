import React from 'react'
import './head/head.css'
import './css/default.css'
import Body from './body/Body'
import './body/body.css'
import Head from './head/Head'

export default function Home() {
    return (
        <div>
            <div className="head flex alignitems justify">
                <Head />
            </div>

            <div className="bod flex margin">

                <Body />

            </div>

            <div className="footer">

            </div>

        </div>
    )
}
