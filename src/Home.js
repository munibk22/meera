import React from 'react'
import './head/head.css'
import './css/default.css'
import Body from './body/Body'
import './body/body.css'
import Head from './head/Head'
import Banner from './head/Banner'
import Footer from './footer/Footer'
import Search from './head/Search'
import PricePanel from './pricepanel/PricePanel'
// import './pricepanel/panel.css'

export default function Home() {
    return (
        <div>



            <div className="" id="home">
                <Head />
            </div>




            <div className="bod flex margin width75 relative max2000" style={{ maxWidth: '' }}>

                <div className="absolutetop width75 ">
                    <Banner />
                </div>

                <div className="margintop max2000 justify" style={{ maxWidth: '' }} >
                    <Body />
                </div>


            </div>

            <div className="margintop flex justify  ">
                <PricePanel />
            </div>

            <div className="margintop15">
                <Footer />
            </div>

        </div>
    )
}
