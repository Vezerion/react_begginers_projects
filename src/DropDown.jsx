import { useState } from "react";
export const DropDown = ({ currencies, handleSetCurrency, setDefaultCurrencies, convert, setConvert }) => {
    const [dropdown, setDropdown] = useState(false);
    const isDefaultCur = (cur) => {
        if(cur === 'USD' || cur === 'EUR' || cur === 'RUB') {
            return false
        }
        else {
            return true
        }
    }
    return (<div className="dropdown">
        <li className="dropdown_btn" onClick={()=>setDropdown(prev => !prev)}>
            <svg height="50px" viewBox="0 0 50 50" width="50px">
                <rect fill="none" height="50" width="50" />
                <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
            </svg>
        </li>
        {dropdown && <div className="dropdown_menu">
            {currencies.filter(isDefaultCur).map((cur) => (
                <li
                    onClick={()=>{handleSetCurrency(cur, setConvert, setDefaultCurrencies )} }
                    className="dropdown_menu_item"
                    key={cur}>
                    {cur}
                </li>
            ))}
        </div>}
    </div>)

};