
import './App.css';
import Home from './Home'
import CoinDetailPage from './pages/CoinDetailPage'
import CoinList from './pages/CoinList'
import { BrowserRouter, Route } from 'react-router-dom'
import { WatchListContextProvider } from './pages/WatchListContext'

import CoinGecko from 'coingecko-api';
const coinGeckoClient = new CoinGecko();


export default function App(props) {
  // var apikey = { key: "73f07cc8-c4d7-4bb8-b8c3-8ad96e4b4854" }

  // request("GET",
  //   "https://pro-api.coinmarketcap.com/v1/fiat/map?CMC_PRO_API_KEY=" + apikey.key)
  //   .then((r1) => {
  //     let x1 = JSON.parse(r1.target.responseText)
  //     // let x2 = JSON.parse(r1.data)
  //     console.log(x1);
  //   }
  //   ).catch()

  // function request(method, url) {
  //   return new Promise(function (resolve, reject) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.open(method, url);
  //     xhr.onload = resolve;
  //     xhr.onerror = reject;
  //     xhr.send();

  //   });

  // }

  // var apikey = {
  //   key: '73f07cc8-c4d7-4bb8-b8c3-8ad96e4b4854'
  // }

  // request('GET', 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apikey.key)
  //   .then((r1) => {
  //     var x1 = JSON.parse(r1.target.responseText);
  //     console.log(x1.data.quote.USD.total_market_cap);
  //   }).catch(err => {
  //     console.log(err);
  //   })

  // function request(method, url) {
  //   return new Promise(function (resolve, reject) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.open(method, url);
  //     xhr.onload = resolve;
  //     xhr.onerror = reject;
  //     xhr.send();
  //   });
  // }

  const { data } = props;
  // console.log(props);
  return (
    <div className="">

      <Home />

      <WatchListContextProvider>
        <BrowserRouter>
          <Route path='/' exact component={CoinList} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}



export async function getServerSideProps(context) {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC
  };
  const result = await coinGeckoClient.coins.markets({ params });
  return {
    props: {
      result
    },
  }
}
