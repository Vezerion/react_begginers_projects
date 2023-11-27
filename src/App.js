import './index.scss';
import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounterOnClick = () => {
    setCounter(prev => prev + 1)
  }
  const decrementCounterOnClick = () => {
    setCounter(prev => prev - 1)
  }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button onClick={decrementCounterOnClick} className="minus">- Минус</button>
        <button onClick={incrementCounterOnClick} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
