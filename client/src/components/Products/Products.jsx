import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import Funkos from './funkos';
import './Products.css';
// import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/Products';



const Products = () => {

    // const [products, setProducts]= useState([])
    const dispatch = useDispatch();
    const products = useSelector(state => state.Product.products);

    useEffect(()=>{
    // Axios("http://localhost:3001/products")
    //     .then(r => setProducts(r.data))
    dispatch( getProducts() );
    },[])

    if(!products){
        return <p>cargando</p>
    }

    return (

        <div className='container'>
            {products.map((f) => <Product 
                f={f}
                key={f.name}
            />)}
        </div>

    );

}

export default Products;
