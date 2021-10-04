import React from 'react'
import './head.css'
import Search from './Search'
import Nav from './Nav'
import { HeadNav } from './HeadNav'
import { HeadSlogan } from './HeadSlogan'
import Icon from '../pics/icon.svg'
// import CarouselApp from './Carousel'

export default function Head() {
    return (
        <div className="head relative ">

            <div className="flex justify">

                <div className="flexwrap justifybetween alignitems" style={{ width: "95vw" }}>

                    <div className="">
                        <HeadSlogan />
                    </div>
                    <div className="flex justifystart ">
                        <Search />
                    </div>

                    <div className="">
                        <HeadNav />
                    </div>
                </div>

            </div>

            <div className="flexwrap width100 justify alignitems " style={{ height: '34vh', lineHeight: '1.5' }}>



                <div className="logo flexwrap " style={{ float: '' }}>
                    <img src={Icon} alt='' style={{ width: "7rem", float: '' }} className=" " />
                </div>


                <div className="font600  padding2 textalign">
                    <h1 style={{ color: "white" }}> Z&J INVESMENTS LLC</h1>
                    <ul style={{
                        color: "#8B7619"
                        // color: "  #DEB887 "
                        // color: " #4AAE6E"
                    }}>Your Trusted Invesment Partner</ul>
                    <br />
                    <div className="">
                        <h3 style={{ color: "white" }}>  12757 Hezel Ln, St. Louis, MO 63141</h3>

                        <a href="tel:6368754054" style={{}} className="tel" >Call us at 636-875-4054 </a>
                    </div>
                </div>


            </div>

            <div className="">
                12756 Hezel Ln, St. Louis, MO 63141

            </div>
            <div className=" flex justify  " >
                <Nav />
            </div>


        </div>
    )
}
