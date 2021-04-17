import React from 'react'
import { Link } from 'react-router-dom'

export default function Coin({ coin }) {
    return (
        <div className="flex justifybetween alignitems max2000"

            style={{
                // width: "55rem",
            }}>


            <img className="coinimg marginright1" src={coin.image} alt='' />
            <div className="marginright2">
                {coin.name}
            </div>

            <div className="marginright2 flex">
                CurrentPrice:
                <div className="" style={{ marginLeft: '3%', color: "#97d451" }}>
                    {coin.current_price}
                </div>

            </div>

            <div className="">
                {/* {coin.price_change_24h} */}
            </div>
        </div>
    )
}
