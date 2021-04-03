import React from 'react'
import './head.css'
import Search from './Search'
import Nav from './Nav'

// import CarouselApp from './Carousel'

export default function Head() {
    return (
        <div className="head relative ">

            <div className="flex justify ">
                <Search />
            </div>

            <div className="  flex alignitems justify "
                style={{ height: '36vh' }}
            >


                <div className="logo flex">

                </div>
                <div className="font600">
                    <h1 style={{ color: "white" }}>Z/J INVESMENTS</h1>
                    <ul style={{
                        color: "#8B7619"
                        // color: "  #DEB887 "
                        // color: " #4AAE6E"
                    }}>Your Trusted Invesment Partner</ul>
                </div>


            </div>

            <div className=" flex justify absolutebottom">
                <Nav />
            </div>

            <div className="flex justify ">
                {/* <CarouselApp /> */}
            </div>
        </div>
    )
}
