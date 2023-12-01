import { useState } from 'react';
import { DropDown } from './DropDown';

export const Block = ({ currencies, handleSetCurrency, convert, setConvert, value, handleOnChangeInputValue, setValue, blur  }) => {
  const [defaultCurrencies, setDefaultCurrencies] = useState(['RUB', 'USD', 'EUR', 'GBP']);
  // const [value, SetValue] = useState(0);
  return (
    <div className="block">
      <ul className="currencies">

        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => setConvert(cur)}
            className={cur === convert ? 'active' : ''}
            key={cur}>
            {cur}
          </li>
        ))}

        <DropDown 
        currencies={currencies}
        handleSetCurrency={handleSetCurrency} 
        setDefaultCurrencies={setDefaultCurrencies} 
        convert={convert}
        setConvert={setConvert}
        />
      </ul>
      <input
        // onChange={(e) => SetValue(e.target.value)}
        onChange={(e) => handleOnChangeInputValue(e, setValue)}
        onBlur={blur}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  )
};
