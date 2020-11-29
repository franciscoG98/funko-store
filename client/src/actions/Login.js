import Axios from 'axios';

// import { saveSession } from '../store/saveToSessionStorage/sessionStorage';


import { saveSession, loadSession } from '../store/saveToSessionStorage/sessionStorage';
import {  loadState } from '../store/saveToLocalStorage/LocalStorage';
import { UpdateOrderLine } from './Order';


//falta la ruta y probar!!!!
export function loginUser(loginParaQuenoPiseVble) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/auth/login`, loginParaQuenoPiseVble)
            .then(json => {
                saveSession(json);
                dispatch({ type: "LOGIN_USER", payload: json });
            })
            .then(async user => {
                var user1 = loadSession()
                var prod = loadState()
                console.log(user1)
                console.log(prod)
                for(let i = 0; i < prod.length; i ++){
                 await Axios.post(`http://localhost:3001/users/${user1.id}/cart`, prod[i])
                }
                //prod.map(p =>  dispatch(UpdateOrderLine(p, user1.id)))
            })
            /* .then(json => {
                dispatch({ type: 'UPDATE_ORDER_LINE', payload: json });
            }) */
            .catch( err => {
                dispatch({ type: "LOGIN_USER", payload: err })
            }
                
            )
    }
}

export function logout() {
    
    return (dispatch) => {
        sessionStorage.clear()
        return dispatch({ type: "LOGOUT" });
    }
}

// export function passwordReset(id) {
//     return (dispatch) => {
//         return Axios.post(`http://localhost:3001/${id}/passwordReset`)
//             .then(json => {
//                 dispatch({ type: "RESET_PASSWORD", payload: json });
//             });
//     }
// }