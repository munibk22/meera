import React,{useEffect, useState,useContext} from 'react'
import CoinGecko from '../apis/CoinGecko'
import {WatchListContext} from './WatchListContext'
import Coin from './Coin'

export default function CoinList() {
    const [coins,setCoins]= useState([])
const {watchList} = useContext(WatchListContext);
const [isLoading,setIsLoading]=useState(false);


    useEffect(() => {
       const fetchData= async () => {
        setIsLoading(true);

         const response = await CoinGecko.get("/coins/markets",{
                params:{
                    vs_currency:"usd",
                    ids: watchList.join(","),
                }
            })
            setCoins(response.data);

            setIsLoading(false);

            console.log(response.data)
        };


        fetchData();

    }, []);

const renderCoins=()=>{
if(isLoading){
    return <div>Loading...</div>
}
return(

    <div>
    <ul className="coinlist list-group mt-2">
{coins.map(coin =>{
    return <Coin key={coin.id} coin={coin} />

})}


    </ul>
    </div>
)
    }

}


