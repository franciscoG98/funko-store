import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import Funkos from './funkos';
import './Products.css';
import Axios from 'axios';


const Products = () => {

    const [products, setProducts]= useState([])

    useEffect(()=>{
    Axios("http://localhost:3001/products")
        .then(r => setProducts(r.data))
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
