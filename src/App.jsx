import './App.css';
import Demo from './components/demo';
import React, { useState, Fragment } from 'react';

function App() {
  return (
    <Fragment className="App">
      <h2>Expense item!</h2>
      <Demo />
    </Fragment>
  );
}

export default App;
