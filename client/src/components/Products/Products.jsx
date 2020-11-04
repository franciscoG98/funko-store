import React from 'react'
import Product from '../Product/Product'
import Funkos from './aux'
import './Products.css'


const Products = () => {

    return (

        <div className='container'>
            {Funkos.map((f) => <Product 
                f={f}
                key={f.name}
            />)}
        </div>
        
    );

}

export default Products;


