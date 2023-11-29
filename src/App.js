import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
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
  const onClickInvite = (userID) => {
    if (invites.includes(userID)) {
      setInvites(prev => prev.filter(id => id !== userID))
    } else {
      setInvites(prev => [...prev, userID])
    }
  }
  const onClickSendInvites = () => {
    setSuccess(true);
  }
  const onClickResetApplication = () => {
    setSuccess(false);
    setSearchValue('');
    setInvites([]);
  }
  return (
    <div className="App">
      {
        !success ? <Users onClickSendInvites={onClickSendInvites} onClickInvite={onClickInvite} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} isLoading={isLoading} items={users} invites={invites} /> : <Success count={invites.length} onClickResetApplication={onClickResetApplication} />
      }

    </div>
  );
}

export default App;
