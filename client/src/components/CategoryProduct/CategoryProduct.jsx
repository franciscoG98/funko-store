import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import Funkos from './funkos';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { filterProducts } from '../../actions/Categories';




const CategoryProduct = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.Category.filterProductsByCat); 

    const name = useParams();
    // console.log(name.nombreCat);

    // const [products, setProducts]= useState([])

    useEffect(()=>{
    // Axios(`http://localhost:3001/products/category/${name.nombreCat}`)
    //     .then(r => setProducts(r.data.products))
    dispatch( filterProducts(name.nombreCat) );
    },[name.nombreCat])

    if(!categories){
        return <p>Cargando...</p>
    }

    return (

        <div className='container'>
            {categories.map((f) => <Product 
                f={f}
                key={f.name}
            />)}
        </div>

    );

}

export default CategoryProduct;
