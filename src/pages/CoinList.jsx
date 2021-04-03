import React,{useEffect, useState,useContext} from 'react'
import CoinGecko from '../apis/CoinGecko'
import {WatchListContext} from './WatchListContext'

export default function CoinList() {
    const [coins,setCoins]= useState([])
const {watchList} = useContext(WatchListContext);
console.log(watchList)
    useEffect(() => {
       const fetchData= async () => {
         const response = await CoinGecko.get("/coins/markets",{
                params:{
                    vs_currency:"usd",
                    ids:"bitcoin,ethereum, litecoin"
                }
            })
            console.log(response.data)
        }

        fetchData()
    }, [])


    return (
        <div>
            
        </div>
    )
}
