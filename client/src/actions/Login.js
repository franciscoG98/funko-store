import Axios from 'axios';


//falta la ruta y probar!!!!
export function loginUser(login) {
    //     return (dispatch) => {
    //         return Axios.post(`http://localhost:3001/`, login)
    //             .then(json => {
    //                 dispatch({ type: "LOGIN_USER", payload: json });
    //             });
    //     }
}

export function passwordReset(id) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/${id}/passwordReset`)
            .then(json => {
                dispatch({ type: "RESET_PASSWORD", payload: json });
            });
    }
}