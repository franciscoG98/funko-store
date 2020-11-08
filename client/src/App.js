import React, { useState } from 'react';
import Products from './components/Products/Products';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Categories from './components/Admin/Categories/Categories';
import ListProducts from "./components/Admin/Products/listProducts";
import SideBar from '../src/components/SideBar/SideBar';
import CategoryProduct from './components/CategoryProduct/CategoryProduct';
import Button from '@material-ui/core/Button';



function App() {
  const [marvel, setMarvel] = useState(false);
  

  return (
    <div className= { marvel == true ? 'marvel' : 'dc' }>

      <BrowserRouter> 

          < Nav /> 

            <div className= 'divswitch'>

              <div className= 'switch'>
                <Button variant="contained" color="primary" onClick= {() => setMarvel(true)}> Marvel </Button>
              </div> 

              <div className= 'switch'>
                <Button variant="contained" color="primary" onClick= {() => setMarvel(false)}>   DC    </Button> 
              </div>

            </div>          
       
          < Route exact path= '/' component= {Products} />

          < Route exact path= '/admin/categories' component= {Categories} />

          < Route exact path= '/admin/products' component= {ListProducts} />

          < Route exact path= '/product/:nombreCat' component= {CategoryProduct} />              
        
      
      </BrowserRouter>


    </div>
  );
}

export default App;
