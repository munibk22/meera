import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar sticky font600 flex justify" style={{ width: "70vw", maxWidth: '1250px' }} >

            <div className="flexwrap justifyaround width60">


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
            </div>
        </nav>
    )
}
