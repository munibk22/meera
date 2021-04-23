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

            <div className=" flexwrap ">

                <div className="width30  flexwrap padding1" >

                    <div className="padding1 ">
                        dfsdafIrure irure ullamco minim reprehenderit ea fugiat ex sunt esse
                        </div>
                    <div className="flexcol justifyend  padding1" style={{ color: 'burlywood', }}>
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

                <div className=" width40">
                    <Contact />
                </div>



                {/* 
                <iframe title="stlouis"

                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.48684898255!2d-90.38388875470163!3d38.653016509678444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1619128150811!5m2!1sen!2sus" width="320" height="350" style="border:0;" allowfullscreen="" loading="lazy'>
                    <div className="textalign padding1" style={{ marginTop: '3%' }}>
                        <h2>Visit Us:</h2>
                    </div>
                </iframe> */}


                <div className="">
                    <div className="textalign padding1" style={{ marginTop: '3%' }}>
                        <h2>Visit Us:</h2>
                    </div>
                    <div className="flex justify margintop " style={{ width: "20vw", height: "250px" }}>
                        <iframe title="stlouis"

                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.48684898255!2d-90.38388875470163!3d38.653016509678444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1619128150811!5m2!1sen!2sus" width="320" height="250" style="border:0;" allowfullscreen="" loading="lazy'>

                        </iframe>
                    </div>


                </div>


            </div>

        </div>
    )
}
