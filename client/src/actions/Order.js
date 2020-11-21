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

//
export function updateGuestCart() {
    return (dispatch) => {
        const serializedData = localStorage.getItem("cart");
        if (serializedData === null) {
            return undefined;
        }
        // const dataParsed = JSON.parse(serializedData);
        dispatch({ type: "UPDATE_GUEST_CART", payload: serializedData });
    }
}

export function saveToLocalStorage(prod) {
    return (dispatch) => {
        let serializedData = JSON.stringify(prod);
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", serializedData);
            dispatch({ type: "GET_GUEST_CART", payload: serializedData });
        } else {
            localStorage.setItem("cart", serializedData)
        }
    }
}

