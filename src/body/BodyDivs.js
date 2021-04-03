import React from 'react'
import Invest from '../pics/invest.jpg'
import Phone from '../pics/phone.png'
import Time from '../pics/time.jpg'

export default function BodyDivs() {
    return (
        <div>
            <div className="relative flex " style={{ maxWidth: "" }}>

                <fieldset className="p1 ">
                    <legend><h2>Sample Text </h2></legend>
                </fieldset>

                <div className="flex absolute img1div ">
                    <img alt='' src={Invest} className="img1"
                        style={{ maxWidth: "35vw" }}
                    />

                </div>
            </div>

            <div className="relative flex p2 margintop">

                <fieldset className="p1">
                    <legend><h2>Sample Text </h2></legend>
                </fieldset>

                <div className="flex absolute img2div ">
                    <img alt='' src={Time} className="img2" />

                </div>
            </div>

            <div className="relative flex margintop">

                <fieldset className="p1" style={{ maxWidth: "66vw" }}>
                    <legend><h2>Sample Text </h2> </legend>
                </fieldset>

                <div className="flex absolute img3div ">
                    <img alt='' src={Phone} className="img3"
                        style={{ maxWidth: "35vw" }}
                    />

                </div>
            </div>
        </div>
    )
}
