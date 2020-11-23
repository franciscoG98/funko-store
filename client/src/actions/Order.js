import Axios from 'axios';




export function addItem(id) {
    return (dispatch) => {
        return Axios("http://localhost:3001/products/" + id)
            .then(json => {
                dispatch({ type: 'ADD_ITEM', payload: json });
            })
    }
}

export function getCarrito(idUser, idProd) {
    return (dispatch) => {
        return Axios(`http://localhost:3001/users/${idUser}/cart`)
            .then(json => {
                dispatch({ type: 'GET_CART', payload: json });
            })
    }
}


export function UpdateOrderLine(prod, idUser) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/users/${idUser}/cart`, prod)
            .then(json => {
                dispatch({ type: 'UPDATE_ORDER_LINE', payload: json });
            })
    }
}

export function DecreaseOrderLine(prod, idUser) {
    prod.quantity -= 1;
    return (dispatch) => {
        return Axios.put(`http://localhost:3001/users/${idUser}/cart`, prod)
            .then(json => {
                dispatch({ type: 'DECREASE_ORDER_LINE', payload: json });
            })
    }
}

export function IncreaseOrderLine(prod, idUser) {
    return (dispatch) => {
        prod.quantity += 1
        return Axios.put(`http://localhost:3001/users/${idUser}/cart`, prod)
            .then(json => {
                dispatch({ type: 'INCREASE_ORDER_LINE', payload: json });
            })
    }
}

export function deleteItem(userId, id) {
    return (dispatch) => {
        Axios.delete(`http://localhost:3001/users/${userId}/cart/${id}`)
            .then(json => {
                dispatch({ type: 'DELETE_ITEM', payload: id });
            })
    }
}



// export function deleteItem(id) {
//     return (dispatch) => {
//             dispatch({ type: "DELETE_ITEM", payload: id });
//         })
//     }
// }

//traer ordenes para el componente AdminOrdenList
export function getAdminOrders() {
    return (dispatch) => {
        return Axios.get(`http://localhost:3001/orders`)
            .then(json => {
                dispatch({ type: 'GET_ADMIN_ORDER', payload: json });
            })
    };
}

//traer ordenes para el componente UserOrdenList
export function getUserOrders(id) {
    return (dispatch) => {
        return Axios.get(`http://localhost:3001/users/${id}/cart`)
            .then(json => {
                dispatch({ type: 'GET_USER_ORDER', payload: json });
            })
    };
}

export function getUserInfo(id) {
    return (dispatch) => {
        return Axios.get(`http://localhost:3001/user/${id}`)
            .then(json => {
                dispatch({ type: 'GET_USER_INFO', payload: json });
            })
    };
}

//-------------------------------------------------------------------------------------------
// guest cart
// export function updateGuestCart() {
//     return (dispatch) => {
//         const cart = loadState()
//         dispatch({ type: "UPDATE_GUEST_CART", payload: cart });
//     }
// }

// export function saveToLocalStorage(prod) {
//     return (dispatch) => {
//         saveState(prod)
//         dispatch({ type: "GET_GUEST_CART", payload: prod });
//     }
// }

//--------------------------------------------------------------------------------------------