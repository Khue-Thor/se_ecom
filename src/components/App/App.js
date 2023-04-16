import React from 'react';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import './App.css';
import { AccountModal } from '../AccountModal/AccountModal';

function App() {
  return (
    <div className="App">
      <div className='App__content'>
      <Header/>
      <Main/>
      <AccountModal/>
      </div>
    </div>
  );
}

export default App;
