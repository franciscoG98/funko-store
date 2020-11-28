import Axios from 'axios';
import { saveSession, loadSession } from '../store/saveToSessionStorage/sessionStorage';


//falta la ruta y probar!!!!
export function loginUser(loginParaQuenoPiseVble) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/auth/login`, loginParaQuenoPiseVble)
            .then(json => {
                saveSession(json);
                dispatch({ type: "LOGIN_USER", payload: json });
            })
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