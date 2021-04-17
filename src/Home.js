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
import Header2 from './body/Header2'
import Team from './body/Team'
// import './pricepanel/panel.css'

export default function Home() {
    return (
        <div>



            <div className="" id="home">
                <Head />
            </div>




            <div className="bod flex margin  relative " style={{ maxWidth: '' }}>




                <div className=" justify width70" style={{ maxWidth: '1250px' }} >
                    <Body />
                </div>


            </div>

            <div className='width100 margintop10 cardcontainer ' style={{ backgroundColor: '' }}>

                <Team />
            </div>

            <div className="flex justify margintop10">
                <h1>Pricing Plan </h1>
            </div>



            <div className=" flex justify margintop ">
                <PricePanel />
            </div>

            <div className="margintop15">
                <Footer />
            </div>

        </div>
    )
}
