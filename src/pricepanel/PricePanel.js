import React from 'react'
import './panel.css'
import icon1 from "./icons/icon1.png"
import icon2 from "./icons/icon2.png"
import icon3 from "./icons/icon3.png"


import "../css/default.css"

export default function PricePanel() {
    return (
        <div className="alignitem max2000 flex justify" style={{ width: '77vw' }}>

            <div className="panel  justifybetween alignitems  ">

                <div className="pricing-plan threedhover">
                    <img src={icon1} alt="" className="pricing-img" />
                    <h2 className="pricing-header">Personal</h2>
                    <ul className="pricing-features">
                        <li className="pricing-features-item">Start As Low As</li>
                        <li className="pricing-features-item">
                            $100 - $500</li>
                    </ul>
                    <span className="pricing-price">$100</span>
                    <a href="#/" className="pricing-button">Sign up</a>
                </div>

                <div className="pricing-plan threedhover">
                    <img src={icon2} alt="" className="pricing-img" />
                    <h2 className="pricing-header"
                        style={{ color: "blue" }}
                    >Medium</h2>
                    <ul className="pricing-features">
                        <li className="pricing-features-item">Never sleeps</li>
                        <li className="pricing-features-item">Multiple  for more powerful apps</li>
                    </ul>
                    <span className="pricing-price">$5000</span>
                    <a href="#/" className="pricing-button is-featured">Sign up</a>
                </div>

                <div className="pricing-plan threedhover">
                    <img src={icon3} alt="" className="pricing-img" />
                    <h2 className="pricing-header"
                        style={{ color: "#027002" }}
                    >Enterprise</h2>
                    <ul className="pricing-features">
                        <li className="pricing-features-item">Dedicated</li>
                        <li className="pricing-features-item">Simple horizontal scalability</li>
                    </ul>
                    <span className="pricing-price">$10,000+</span>
                    <a href="#/" className="pricing-button"
                        style={{ backgroundColor: "green", color: 'white' }}
                    >Sign up</a>
                </div>

            </div>

        </div>
    )
}
