import React from 'react';
// import React, { useState, useEffect, useRef } from 'react'; //hooks
import Products from './components/Products/Products';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import CRUForm from '../src/components/CRUForm/CRUForm';

function App() {
  return (
    <div className="App">

      <Nav />
      <Products />
      <CRUForm />
    </div>
  );
}

export default App;
