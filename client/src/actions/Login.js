import Axios from 'axios';


//falta la ruta y probar!!!!
export function loginUser(loginBla) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/auth/login`, loginBla)
            .then(json => {
                console.log(json.data.user);
                dispatch({ type: "LOGIN_USER", payload: json });
            });
    }
}

export function logout() {
    return (dispatch) => {
        return dispatch({ type: "LOGOUT" });
    }
}

export function passwordReset(id) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/${id}/passwordReset`)
            .then(json => {
                dispatch({ type: "RESET_PASSWORD", payload: json });
            });
    }
}