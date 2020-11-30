import Axios from 'axios';
 
export function addUser(data) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/user`, data)
            .then(json => {
                dispatch({ type: 'NEW_USER', payload: json });
            })            
    }    
}

export function getUsers() {
    return (dispatch) => {
        return Axios(`http://localhost:3001/user`)
            .then(json => {
                dispatch({ type: 'GET_USERS', payload: json });
            })            
    }    
}

export function promoteUser(id) {
    return (dispatch) => {
        return Axios.put(`http://localhost:3001/auth/promote/${id}`)
            .then(json => {
                dispatch({ type: 'PROMOTE_USER', payload: json });
            })            
    }    
}

export function deleteUser(id) {
    return (dispatch) => {
        return Axios.delete(`http://localhost:3001/user/${id}`)
            .then(json => {
                dispatch({ type: 'DELETE_USER', payload: id });
            })            
    }    
}

export function passwordReset(id) {
    return (dispatch) => {
        return Axios.put(`http://localhost:3001/users/${id}/passwordReset`)
        .then(json => {
            dispatch({ type: 'RESET_PASSWORD', payload: json });
        })
    }
}

