import Axios from 'axios';
 
export function addUser(data) {
    return (dispatch) => {
        return Axios.post(`http://localhost:3001/user`, data)
            .then(json => {
                dispatch({ type: 'NEW_USER', payload: json });
            })
            
    }    
}
