import React from 'react';
import Products from './components/Products/Products';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import CRUForm from '../src/components/CRUForm/CRUForm';
import { BrowserRouter, Route } from 'react-router-dom';
import Categories from './components/Admin/Categories/Categories';
import FormDialog from './components/Admin/Categories/DialogCRUDCat';
import ListProducts from "./components/Admin/Products/listProducts";
import AddProduct from '../src/components/CRUForm/AddProduct';

function App() {
  return (
    <div className="App">

      <BroserRouter> 

        <Nav />
        <Products />
        <FormDialog />
        <Categories />
        <AddProduct />
        <ListProducts/>
      
      </BroserRouter>
            

    </div>
  );
}

export default App;
