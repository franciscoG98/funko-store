import React from 'react';
// import React, { useState, useEffect, useRef } from 'react'; //hooks
import Products from './components/Products/Products'
import './App.css';
import Nav from '../src/components/Nav/Nav'

function App() {
  return (
    <div className="App">

      <Nav />
      <Products />
    </div>
  );
}

export default App;
