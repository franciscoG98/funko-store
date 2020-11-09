import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import Funkos from './funkos';
import Axios from 'axios';
import {useParams} from "react-router-dom"



const Search = () => {

    const query = useParams();
    const [products, setProducts]= useState([])
    useEffect(()=>{
    Axios(`http://localhost:3001/search?query=${query.search}`)
        .then(r => setProducts(r.data))
        .catch(err => {
            console.log(err)
        })
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