import Axios from 'axios';




export function addCategory(category) {
    return Axios.post("http://localhost:3001/products/category", category)
    .then(categories => categories.json())
    .then(json => {
        dispatch({ type: 'ADD_CATEGORY', payload: json });
    })
}

export function editCategory(id, newCategory) {
    return Axios.put("http://localhost:3001/products/category" + id, newCategory)
    .then(products => products.json())
    .then(json => {
        dispatch({ type: "EDIT_CATEGORY", payload: json });
    })
}

export function filterProducts(nombreCat) {
    return Axios(`http://localhost:3001/products/category/${nombreCat}`)
    .then(products => products.json())
    .then(json => {
        dispatch({ type: "FILTER_PRODUCTS", payload: json });
    })
}

export function getCategories() {
    return Axios("http://localhost:3001/products/category") 
    .then(categories => categories.json())
    .then(json => {
        dispatch({ type: 'GET_CATEGORIES', payload: json });
    })
}




