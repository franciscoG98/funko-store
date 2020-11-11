import Axios from 'axios';



export function addProduct(product) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/products`, product)
        // .then(product => product.json())
        .then(json => {
            dispatch({ type: "ADD_PRODUCTS", payload: json });
        });
    }    
}

export function editProduct(id, newProduct) {
   return (dispatch) => {
    return Axios.put(`http://localhost:3001/products/` + id, newProduct)
        // .then(product => product.json())
        .then(json => {
            dispatch({ type: "EDIT_PRODUCT", payload: json });
        });
   }    
}

export function searchProducts(name) {
    return (dispatch) => {
        return Axios( `http://localhost:3001/search?query=` + name )
        // .then(products => products.json())
        .then(json => {
            dispatch({ type: "SEARCH_PRODUCTS", payload: json });
        });
    }    
}

export function getProducts() {
    return (dispatch) => {
        return Axios(`http://localhost:3001/products`)
        // .then(products => products.json())
        .then(json => {
            dispatch({ type: "GET_PRODUCTS", payload: json });
        })
    }    
}

export function getProductId(id) {
    return (dispatch) => {
        return Axios(`http://localhost:3001/products/${id}`)
        // .then(products => products.json())
        .then(json => {
            dispatch({ type: "GET_PRODUCTID", payload: json });
        })
    }    
}

export function deleteProduct(id) {
    return (dispatch) => {
        return Axios.delete(`http://localhost:3001/products/${id}`)
        .then(json => {
            dispatch({ type: "DELETE_PRODUCT" });
        })
    }    
}







