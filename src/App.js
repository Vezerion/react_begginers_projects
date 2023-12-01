import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [convertFrom, setConvertFrom] = useState('RUB');
  const [convertTo, setConvertTo] = useState('USD');
  const [conversionCoeff, setConversionCoeff] = useState(0);
  const [fromValue, setFormValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  useEffect(()=>{
    async function fetchData() {
      const response = await fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_P17a5VRf3ZlHA55OTmq7nyWsyiDNrvkUy2AwMq0U&currencies=');
      const dataJson = await response.json()
      setCurrencies(Object.keys(dataJson.data));
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchConvertationData() {
      const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_P17a5VRf3ZlHA55OTmq7nyWsyiDNrvkUy2AwMq0U&currencies=${convertTo}&base_currency=${convertFrom}`);
      const dataJson = await response.json();
      setConversionCoeff(dataJson.data[convertTo])
    }
    fetchConvertationData()
  }, [convertFrom, convertTo])
  function handleSetCurrency(cur, setConvert, setDef) {
    setConvert(cur);
    setDef(['RUB', 'USD', 'EUR', cur])
  }
  function convertMoney(conversionCoeff, fromValue, setToValue, flag) {
    setToValue(flag ? (fromValue * conversionCoeff).toFixed(4) : (fromValue / conversionCoeff).toFixed(4))
  }
  function handleOnChangeInputValue(e, setFunc) {
    setFunc(e.target.value);
  }
  return (
    <div className="App">
      <Block 
      handleSetCurrency={handleSetCurrency} 
      currencies={currencies} 
      convert={convertFrom}
      setConvert={setConvertFrom}
      value={fromValue}
      handleOnChangeInputValue={handleOnChangeInputValue}
      setValue={setFormValue}
      blur = {() => convertMoney(conversionCoeff, fromValue, setToValue, true)}
      />
      <Block 
      handleSetCurrency={handleSetCurrency} 
      currencies={currencies}
      convert={convertTo}
      setConvert={setConvertTo}
      value={toValue}
      handleOnChangeInputValue={handleOnChangeInputValue}
      setValue={setToValue}
      blur = {() => convertMoney(conversionCoeff, toValue, setFormValue, false)}
      />
    </div>
  );
}

export default App;
