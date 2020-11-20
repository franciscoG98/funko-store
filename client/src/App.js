import React, { useState } from 'react';
import Products from './components/Products/Products';
import './App.css';
import Nav from '../src/components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import ListCategories from './components/Admin/Categories/ListCategories';
import ListProducts from "./components/Admin/Products/listProducts";
import CategoryProduct from './components/CategoryProduct/CategoryProduct';
import Button from '@material-ui/core/Button';
import Search from "./components/SearchBar/Search";
import AdminOrderList from './components/Admin/Products/AdminOrderList';
import UserOrderList from './components/CartOrder/UserOrderList';
import { Provider } from 'react-redux';
import Register from "./components/User/form";
import store from './store';
import ShoppingCart2 from '../src/components/CartOrder/ShoppingCart2';
import UserLogin from './components/UserLogin/UserLogin';
import ResetPassword from './components/UserLogin/ResetPassword';


function App() {
  const [marvel, setMarvel] = useState(false);


  return (

    <Provider store={store}>

      <div className={marvel === true ? 'marvel' : 'dc'}>

        <BrowserRouter>

          < Nav />

          <div className='divswitch'>

            
              <button className= 'butt' onClick={() => setMarvel(true)}> MARVEL </button>
            

            
              <button className= 'butt2' onClick={() => setMarvel(false)}>   DC    </button>
            

          </div>

          < Route exact path='/' component={Products} />

          < Route exact path='/ShoppingCart2' component={ShoppingCart2} />

          < Route exact path='/admin/categories' component={ListCategories} />

          < Route exact path='/admin/products' component={ListProducts} />

          < Route exact path='/product/:nombreCat' component={CategoryProduct} />

          < Route exact path='/products/search/:search' component={Search} />

          < Route exact path='/products/admin' component={AdminOrderList} />

          < Route exact path='/user/:id/product/' component={UserOrderList} />

          < Route exact path='/register' component={Register} />

          < Route exact path='/login' component={UserLogin} />

          < Route exact path='/lost-password' component={ResetPassword} />



        </BrowserRouter>

      </div>

    </Provider>
  );
}

export default App;
