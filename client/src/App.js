import React from 'react';
// import React, { useState, useEffect, useRef } from 'react'; //hooks
import Products from './components/Products/Products';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import CRUForm from '../src/components/CRUForm/CRUForm';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

     <BrowserRouter>

      <Route path="/" component= {Nav} />      
      <Route path="/" component= {Products} />
      <Route path="/" component= {CRUForm} />

     </BrowserRouter>
      
    </div>
  );
}

export default App;
