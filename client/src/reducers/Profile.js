const initialState = {
    userInfo: []
}

export default (state = initialState, action) => {
    switch(action.type){
            case 'GET_PROFILE':
                return {
                    ...state,
                    userInfo: action.payload.data
                }    

            default: return state     
    }
}