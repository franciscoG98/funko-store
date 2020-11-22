import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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
import ShoppingCart2 from '../src/components/CartOrder/ShoppingCart2';
import UserLogin from './components/UserLogin/UserLogin';
import ResetPassword from './components/UserLogin/ResetPassword';

let protectionTest = false;

function SecuredRoute(props) {
  return (
    <Route path={props.path} render= {data => protectionTest  ? 

      (<props.component {...data}></props.component>)  : 

    (<Redirect to= {{pathname: '/'}}></Redirect>)}></Route>
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
              <button className= 'butt' onClick={() => setMarvel(true)}>  MARVEL  </button>

              <button className= 'butt2' onClick={() => setMarvel(false)}>  DC  </button> 
          </div>
          
          < Route exact path='/' component={Products} />
          < Route exact path='/ShoppingCart2' component={ShoppingCart2} />    
          < Route exact path='/product/:nombreCat' component={CategoryProduct} />          
          < Route exact path='/products/search/:search' component={Search} />
          < SecuredRoute exact path='/admin/categories' component={ListCategories} />
          < SecuredRoute exact path='/admin/products' component={ListProducts} />
          < SecuredRoute exact path='/products/admin' component={AdminOrderList} />
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
