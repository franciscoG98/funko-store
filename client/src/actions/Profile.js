import Axios from 'axios'

export function getUser(id){
    return (dispatch) => {
        return Axios(`http://localhost:3001/user/${id}/me`)
        .then(json =>{
            dispatch({type: 'GET_PROFILE', payload: json})
        })
    }
}