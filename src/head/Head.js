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

            <div className="flexwrap width100 alignitems" style={{ height: '36vh' }}>




                <div className="flexwrap alignitems justify width100">

                    {/* <div className=" width10 alignitems " style={{}}>
                        <HeadSlogan />
                    </div> */}


                    <div className="logo ">
                        <img src={Icon} alt='' style={{ width: "7rem" }} className=" " />
                    </div>
                    <div className="font600  padding2">
                        <h1 style={{ color: "white" }}> Z&J INVESMENTS LLC</h1>
                        <ul style={{
                            color: "#8B7619"
                            // color: "  #DEB887 "
                            // color: " #4AAE6E"
                        }}>Your Trusted Invesment Partner</ul>
                    </div>
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
