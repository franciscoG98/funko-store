import Axios from 'axios';



export function addItem(id) {
    return (dispatch) => {
        return Axios("http://localhost:3001/products/" + id)
            .then(json => {
                dispatch({ type: 'ADD_ITEM', payload: json });
            })
    }
}

export function UpdateOrderLine(orderlines, idUser) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/users/${idUser}/cart`, orderlines)
            .then(json => {
                dispatch({ type: 'UPDATE_ORDER_LINE', payload: json });
            })
    }
}

export function deleteItem(id) {
    return (dispatch) => {
        dispatch({ type: 'DELETE_ITEM', payload: id });
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
export function getUserOrders() {
    return (dispatch) => {
        return Axios.get(`http://localhost:3001/1/cart`)
            .then(json => {
                dispatch({ type: 'GET_USER_ORDER', payload: json });
            })
    };
}