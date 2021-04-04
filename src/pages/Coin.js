import React from 'react'
import { Link } from 'react-router-dom'

export default function Coin({ coin }) {
    return (
        <Link to='/coindetail'>
            <li className="flex justifyaround alignitems coinlist-item
           list-group-item   ist-group-item-action       ">

                <img className="coinlist-image" src={coin.img} alt="" />
                <span className="">{coin.current_price}</span>

                <span className="text-success mr-2">
                    <i className="fas fa-short-down align-middle mr-1"></i>
                    {coin.price_change_percentage_24h}

                </span>
            </li>

        </Link>
    )
}
