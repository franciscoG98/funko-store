import React from 'react'
import Product from '../Product/Product'

import Funkos from './aux'



const Products = () => {

    return (

        <div>
            {Funkos.map((f) => <Product 
                f={f}
                key={f.name}
            />)}
        </div>
        
    );

}

export default Products;


