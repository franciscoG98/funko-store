import Axios from 'axios';


export function addProduct(product) {
    return Axios.post(`http://localhost:3001/products`, product)
    .then(product => product.json())
    .then(json => {
        dispatch({ type: "ADD_PRODUCTS", payload: json });
    });
}

export function editProduct(id, newProduct) {
    return Axios.put(`http://localhost:3001/products/` + id, newProduct)
    .then(product => product.json())
    .then(json => {
        dispatch({ type: "EDIT_PRODUCT", payload: json });
    });
}

export function searchProducts(name) {
    return Axios( `http://localhost:3001/search?query=` + name )
    .then(products => products.json())
    .then(json => {
        dispatch({ type: "SEARCH_PRODUCTS", payload: json });
    });
}

export function getProducts() {
    return Axios(`http://localhost:3001/products`)
    .then(products => products.json())
    .then(json => {
        dispatch({ type: "GET_PRODUCTS", payload: json });
    })
}







