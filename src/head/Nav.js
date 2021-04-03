import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar flex justifybetween  width75 font600" >

            <a href="/">Home</a>

            <div className="flex white navul">

                <div className="white">
                    <a href="#learnmore">Learn More</a>
                </div>
                <div className="">
                    <a href="#about">About</a>
                </div>

                <div className="">
                    <a href="#contact">Contact</a>
                </div>
            </div>

            <a href="/signup">Sign Up</a>
        </nav>
    )
}
