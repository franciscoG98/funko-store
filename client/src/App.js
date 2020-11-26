import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
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
import CommentBox from '../src/components/Reviews/commentbox';
import Reviews from "../src/components/Reviews/Reviews"
import filterOrders from './components/Admin/Products/filterOrders';

// let loggedUser = false;
function SecuredRoute(props) {


    const loggedUser = useSelector(state => state.Login.login.user.isAdmin);
   
    return (
    <Route path={props.path} render= {data => loggedUser ? 

      (<props.component {...data}></props.component>) :

      (<Redirect to={{ pathname: '/' }}></Redirect>)}></Route>
  )
  }
  


// function SecuredRoute(props) {

//   const loggedUser = useSelector(state => state.Login.login.user.isAdmin);
//   // const loggedUser = false;
//   // const loggedUser = JSON.parse(localStorage.getItem("state")); 

//   // console.log(loggedUser);  

//   return (
//     <Route path={props.path} render= {(data) => {

//       if(loggedUser !== undefined && loggedUser !== null) {
//         if (loggedUser == true) return (<props.component {...data}></props.component>)
//         if (loggedUser == false) return (<Redirect to= {{pathname: '/'}}></Redirect>)
//       }
//     }}>
//     </Route>
//   )
// }

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
          < Route exact path='/ShoppingCart2' component={ShoppingCart2} />
          < Route exact path='/product/:nombreCat' component={CategoryProduct} />
          < Route exact path='/products/search/:search' component={Search} />
          < SecuredRoute exact path='/admin/categories' component={ListCategories} />
          < SecuredRoute exact path='/admin/products' component={ListProducts} />
          <div className= 'orders'>            
            < SecuredRoute exact path='/products/admin' component={AdminOrderList} />         
           
            < SecuredRoute exact path='/products/admin' component={filterOrders} />             
                
          </div>
          < SecuredRoute exact path='/auth/promote/:id' />
          < Route exact path='/user/:id/product/' component={UserOrderList} />
          < Route exact path='/register' component={Register} />
          < Route exact path='/login' component={UserLogin} />
          < Route exact path='/lost-password' component={ResetPassword} />

          <Route exact path='/:id/reviews' component={CommentBox} />
          <Route exact path='/allreviews/:id' component={Reviews} />
        </BrowserRouter>
      </div>

    </Provider>
  );
}

export default App;
