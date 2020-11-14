import Axios from 'axios';



export function addItem(id) {
    return (dispatch) => {
        return Axios("http://localhost:3001/products/" + id)
            .then(json => {
                dispatch({ type: 'ADD_ITEM', payload: json });
            })
    }
}

// export function deleteItem(id) {
//     return (dispatch) => {
//             dispatch({ type: "DELETE_ITEM", payload: id });
//         })
//     }
// }

export function getAdminOrder() {
    return (dispatch) => {
     return Axios.get(`http://localhost:3001/orders`)
        .then(res => {
          dispatch({ type: 'GET_ADMIN_ORDER', payload: json,//orders: res.data
          });
        })
    };
  }