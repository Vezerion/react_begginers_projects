import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  useEffect( () => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch('https://reqres.in/api/users');
        if(!response.ok) {
          throw new Error('Can`t fetch data');
        }
        const dataJson = await response.json();
        setUsers(dataJson.data);
        setIsLoading(false);
      } 
      catch (e) {
        console.error(e.message)
      }
      
    }
    fetchData();
  }, []);

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  }
  return (
    <div className="App">
      <Users searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} isLoading={isLoading} items={users}/>
      <Success />
    </div>
  );
}

export default App;
