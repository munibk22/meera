
import './App.css';
import Home from './Home'

function App() {
  var apikey = { key: "73f07cc8-c4d7-4bb8-b8c3-8ad96e4b4854" }

  request("GET",
    "https://pro-api.coinmarketcap.com/v1/fiat/map?CMC_PRO_API_KEY=" + apikey.key)
    .then((r1) => {
      let x1 = JSON.parse(r1.target.responseText.name)
      // let x2 = JSON.parse(r1.data)
      console.log(x1);
    }
    ).catch()

  function request(method, url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = resolve;
      xhr.onerror = reject;
      xhr.send();

    });

  }


  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
