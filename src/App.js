import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_P17a5VRf3ZlHA55OTmq7nyWsyiDNrvkUy2AwMq0U&currencies=');
      const dataJson = await response.json()
      setCurrencies(dataJson.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Block value={0} currencies={currencies} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currencies={currencies} currency="USD" />
    </div>
  );
}

export default App;
