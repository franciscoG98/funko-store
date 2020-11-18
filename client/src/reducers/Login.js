const initialState = {
    login: [],
    resetPass: [], //creo que es un string
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                login: action.payload.data
            }
        case "RESET_PASSWORD":
            return {
                ...state,
                resetPass: action.payload.data
            }

        default: return state;

    }
}