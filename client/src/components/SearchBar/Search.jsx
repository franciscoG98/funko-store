import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import Funkos from './funkos';
import Axios from 'axios';
import {useParams} from "react-router-dom"
import { searchProducts } from '../../actions/Products';
import { useDispatch, useSelector } from 'react-redux';




const Search = () => {

    const query = useParams();
    // const [products, setProducts]= useState([])
    const dispatch = useDispatch();
    const products = useSelector(state => state.Product.searchProduct);
    useEffect(()=>{
        // Axios(`http://localhost:3001/search?query=${query.search}`)
        // .then(r => setProducts(r.data))
        // .catch(err => {
        //     console.log(err)
        // })
        dispatch( searchProducts(query.search) );
    },[query.search])
    


    if(!products){
        return <p>Cargando...</p>
    }

    return (

        <div className='container'>
            {products.length === 0 ? <p>No hay productos encontrados para la busqueda {query.search}</p> : products.map((f) => <Product 
                f={f}
                key={f.name}
            />)}
        </div>

    );

}

export default Search;