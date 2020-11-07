import React from 'react';
import Products from './components/Products/Products';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Categories from './components/Admin/Categories/Categories';
import ListProducts from "./components/Admin/Products/listProducts";
import SideBar from '../src/components/SideBar/SideBar';
import CategoryProduct from './components/CategoryProduct/CategoryProduct';


function App() {
  return (
    <div className="App">

      <BrowserRouter> 

          < Nav />
       
          < Route exact path= '/' component= {Products} />

          < Route exact path= '/admin/categories' component= {Categories} />

          < Route exact path= '/admin/products' component= {ListProducts} />

          < Route exact path= '/product/:nombreCat' component= {CategoryProduct} />              
        
      
      </BrowserRouter>


    </div>
  );
}

export default App;
