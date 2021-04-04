import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer ">

            <div className="flex justify top">
                Footer    <div>

                    <i className="fab fa-facebook-square" style={{ backgroundColor: "green", color: 'white', }}

                    ></i>
                    <i className="fab fa-twitter-square" style={{ backgroundColor: "lightblue", color: ' white' }}></i>
                </div>

                {/* <CoinList /> */}
            </div>


            <div className="flex" style={{ width: '100%', zIndex: "1" }}>
                {/* <hr /> */}
            </div>
        </div>
    )
}
