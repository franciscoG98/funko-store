import Axios from "axios";


export function addReviews(data, id) {
    return(dispatch) => {
        return Axios.post(`http://localhost:3001/product/${id}/reviews`, data)
               .then(rev => {
                   dispatch({type: "ADD_REVIEW", payload: rev})
               })
    }
}


export function getReviews( id) {
    return(dispatch) => {
        return Axios(`http://localhost:3001/products/${id}/review`)
               .then(rev => {
                   dispatch({type: "GET_REVIEW", payload: rev})
               })
    }
}