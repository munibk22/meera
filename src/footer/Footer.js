import React from 'react'
import Contact from './Contact'

import './footer.css'
import Social from './Social'
import ScriptTag from 'react-script-tag';



export default function Footer() {



    return (
        <div className="footer relative">

            <div className="flex justify top">
                <h3> Footer</h3>
            </div>


            <div className="flex " style={{ width: '100%' }}>
                {/* <hr /> */}
                <Social />
            </div>

            <div className=" flex">

                <div className="flex width20 padding1" >
                    dfsdafIrure irure ullamco minim reprehenderit ea fugiat ex sunt esse

    </div>
                <div className="">
                    <div className="padding2">
                        <Contact />
                    </div>

                </div>

                <div className="absolutebottom width20 padding1" style={{ color: 'burlywood', }}>
                    <div className="" id="">
                        &ldquo;Tell me and I forget, teach me and I may remember, involve me and I learn.&rdquo; &mdash;
                        <em>Benjamin Franklin
                            </em>

                    </div>
                    <br></br>
                    <div id="app">
                    </div>
                    <a href="https://munibkhanresume.tk/" target="blank" className="anchor">
                        @Munib Khan </a>
                </div>
            </div>

        </div>
    )
}
