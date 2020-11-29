import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { loadSession } from './store/saveToSessionStorage/sessionStorage';
import './App.css';

import Products from './components/Products/Products';
import Nav from '../src/components/Nav/Nav';
import ListCategories from './components/Admin/Categories/ListCategories';
import ListProducts from "./components/Admin/Products/listProducts";
import CategoryProduct from './components/CategoryProduct/CategoryProduct';
import Search from "./components/SearchBar/Search";
import AdminOrderList from './components/Admin/Products/AdminOrderList';
import UserOrderList from './components/CartOrder/UserOrderList';
import Register from "./components/User/form";
import GuestCart from '../src/components/CartOrder/GuestCart';
import UserCart from '../src/components/CartOrder/UserCart';
import UserLogin from './components/UserLogin/UserLogin';
import ResetPassword from './components/UserLogin/ResetPassword';
import CommentBox from '../src/components/Reviews/commentbox';
import Reviews from "../src/components/Reviews/Reviews"
import filterOrders from './components/Admin/Products/filterOrders';
import Profile from './components/User/profile'
import Promote from './components/Admin/Users/Promote';

const userData = loadSession();

const isAdmin = userData && userData.isAdmin;




function SecuredRoute(props) {    

   return (
   <Route path={props.path} render= {data => isAdmin ? 

     (< props.component {...data} />) :

     (< Redirect to={{ pathname: '/' }} />) }>

   </Route>
  )
}
  

function App() {

  const [marvel, setMarvel] = useState(false);

  return (

    <Provider store={store}>

      <div className={marvel === true ? 'marvel' : 'dc'}>
        <BrowserRouter>

          < Nav />

          <div className='divswitch'>
            <button className='butt' onClick={() => setMarvel(true)}>  MARVEL  </button>
            <button className='butt2' onClick={() => setMarvel(false)}>  DC  </button>
          </div>
          < Route exact path='/' component={Products} />
          < Route exact path='/UserCart' component={UserCart} />
          < Route exact path='/GuestCart' component={GuestCart} />
          < Route exact path='/product/:nombreCat' component={CategoryProduct} />
          < Route exact path='/products/search/:search' component={Search} />
          < SecuredRoute exact path='/admin/categories' component={ListCategories} />
          < SecuredRoute exact path='/admin/products' component={ListProducts} />
          <div className= 'orders'>            
            < SecuredRoute exact path='/products/admin' component={AdminOrderList} />             
            < SecuredRoute exact path='/products/admin' component={filterOrders} />                   
          </div>
          < Route exact path='/auth/promote/:id' />
          < SecuredRoute exact path='/admin/user' component={Promote} />
          < Route exact path='/user/:id/product/' component={UserOrderList} />
          < Route exact path='/register' component={Register} />
          < Route exact path='/login' component={UserLogin} />
          < Route exact path='/lost-password' component={ResetPassword} />
          < Route exact path= '/profile' component = {Profile}/>
          <Route exact path='/:id/reviews' component={CommentBox} />
          <Route exact path='/allreviews/:id' component={Reviews} />
        </BrowserRouter>
      </div>

    </Provider>
  );
}

export default App;
