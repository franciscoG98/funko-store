import React from 'react';
// import React, { useState, useEffect, useRef } from 'react'; //hooks
//import Products from './components/Products/Products';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import CRUForm from '../src/components/CRUForm/CRUForm';
import Categories from './components/Admin/Categories/Categories';
import FormDialog from './components/Admin/Categories/DialogCRUDCat';
import ListProducts from "./components/Admin/Products/listProducts";
function App() {
  return (
    <div className="App">

      <Nav />
      <ListProducts/>
      <FormDialog />
      <Categories />
      <br/>
      <CRUForm/>
      
    </div>
  );
}

export default App;
