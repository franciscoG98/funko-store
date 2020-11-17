import Axios from 'axios';



export function loginUser(login) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/`, login)
            .then(json => {
                dispatch({ type: "LOGIN_USER", payload: json });
            });
    }
}