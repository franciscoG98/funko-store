import Axios from 'axios';
import { loadState, saveState } from '../components/saveToLocalStorage/LocalStorage';




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
export function getGuestCart() {
    return (dispatch) => {
        const cartLoaded = loadState()
        dispatch({ type: "GET_GUEST_CART", payload: cartLoaded });
    }
}

export function saveToGuestCart(prod) {
   // var ol = orderlines(prod)
    return (dispatch) => {
        saveState(prod)
        
        dispatch({ type: "UPDATE_GUEST_CART", payload: prod });
    }
}

export function DecreaseGuestLine(prod) {
    //prod.quantity -= 1;
    return (dispatch) => {
        dispatch({ type: 'DECREASE_GUEST_LINE', payload: prod });
    }
}
export function removeGuestLine(prod) {
    //prod.quantity -= 1;
    return (dispatch) => {
        dispatch({ type: 'REMOVE_GUEST_LINE', payload: prod });
    }
}

export function filterAdminOrder(status) {
    return (dispatch) => {
        return Axios.get(`http://localhost:3001/status?query=` + status)
            .then(json => {
                dispatch({ type: 'FILTER_ADMIN_ORDER', payload: json });
            })
    };
}
//--------------------------------------------------------------------------------------------


export function updateOrderState(orderId) {
    return (dispatch) => {
        return Axios.put(`http://localhost:3001/orders/` + orderId, {state:'created'})
            .then(json => {
                dispatch({ type: 'UPDATE_STATE_ORDER', payload: json });
            })
    }
}

