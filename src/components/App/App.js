import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css';
import { AccountModal } from '../AccountModal/AccountModal';

function App() {

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const handleOpenAccountModal = () => setIsAccountModalOpen(true);

  return (
    <div className="App">
      <div className='App__content'>
      <Header onAccountClick={handleOpenAccountModal}/>
      <Main/>
      </div>
      {isAccountModalOpen && (
        <AccountModal/>
      )}
    </div>
  );
}

export default App;
