import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import Funkos from './funkos';
import Axios from 'axios';
import { useParams } from 'react-router-dom';


const CategoryProduct = () => {

    const name = useParams();
    console.log(name.nombreCat);

    const [products, setProducts]= useState([])

    useEffect(()=>{
    Axios(`http://localhost:3001/products/category/${name.nombreCat}`)
        .then(r => setProducts(r.data.products))
    },[name.nombreCat])

    if(!products){
        return <p>Cargando...</p>
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

export default CategoryProduct;
