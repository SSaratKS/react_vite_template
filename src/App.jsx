import './App.css';
import Demo from './components/demo';
import React, { useContext, useState, Fragment } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <Fragment className="App">
      {/* 
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main> 
      */}
      <h2>Expense item!</h2>
      <Demo />
    </Fragment>
  );
}

export default App;
