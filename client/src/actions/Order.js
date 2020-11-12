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

