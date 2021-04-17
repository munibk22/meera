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

            <div className="absolute width100">
                <HeadNav />
            </div>

            <div className="flex justify width100 ">
                <Search />
            </div>

            {/* <div className="absolute flexwrap alignitems " style={{ zIndex: '2', bottom: '0px', top: '0px', left: '16%' }}>
                <HeadSlogan />
            </div> */}
            <div className="  flexwrap alignitems justify "
                style={{ height: '36vh' }}
            >
                <div className="absolute flexwrap alignitems justifystart" style={{ zIndex: '2', bottom: '0px', top: '0px', left: '16%' }}>
                    <HeadSlogan />
                </div>

                <div className="logo flexwrap">
                    <img src={Icon} alt='' style={{ width: "7rem" }} className=" " />
                </div>
                <div className="font600 ">
                    <h1 style={{ color: "white" }}>Z/J INVESMENTS</h1>
                    <ul style={{
                        color: "#8B7619"
                        // color: "  #DEB887 "
                        // color: " #4AAE6E"
                    }}>Your Trusted Invesment Partner</ul>
                </div>


            </div>


            <div className=" flex justify absolutebottom " >
                <Nav />
            </div>

            <div className="flex justify ">
                {/* <CarouselApp /> */}
            </div>
        </div>
    )
}
