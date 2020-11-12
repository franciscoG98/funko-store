import Axios from 'axios';



export function addCategory(category) {
    return (dispatch) => {
        return Axios.post("http://localhost:3001/products/category", category)
            // .then(categories => categories.json())
            .then(json => {
                dispatch({ type: 'ADD_CATEGORY', payload: json });
            })
            
    }    
}

export function editCategory(id, newCategory) {
    return (dispatch) => {
        return Axios.put("http://localhost:3001/products/category/" + id, newCategory)
        // .then(products => products.json())
        .then(json => {
            dispatch({ type: "EDIT_CATEGORY", payload: json });
        })
        .catch(err => console.log(err))
    }    
}

export function filterProducts(nombreCat) {
    return (dispatch) => {
        return Axios(`http://localhost:3001/products/category/${nombreCat}`)
        // .then(products => products.json())
        .then(json => {
            // console.log(json);
            dispatch({ type: "FILTER_PRODUCTS", payload: json });
        })
    }    
}

export function getCategories() {
    return (dispatch) => {
        Axios("http://localhost:3001/products/category") 
        // .then(categories => categories.json())
        .then(json => {
            // console.log(json.data.categories);
            dispatch({ type: 'GET_CATEGORIES', payload: json.data.categories });
        })
    }    
}

export function deleteCategory(id) {
    return (dispatch) => {
        return Axios.delete(`http://localhost:3001/products/category/${id}`)
        .then(() => {
            dispatch({ type: 'DELETE_CATEGORY', payload: id });
        })
    }    
}

export function getCategoryName(name) {
    return (dispatch) => {
        return Axios(`http://localhost:3001/products/category/${name}`)
        // .then(categories => categories.json())
        .then(json => {
            dispatch({ type: 'GET_CATEGORY_NAME', payload: json });
        })
    }    
}
