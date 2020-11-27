import { loadSession } from "../store/saveToSessionStorage/sessionStorage"

const initialState = {
    login: loadSession === undefined ? [] : loadSession(),
    resetPass: [], //creo que es un string
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                login: action.payload
            }

        case "LOGOUT":
            return {
                login: []
            }

        case "RESET_PASSWORD":
            return {
                ...state,
                resetPass: action.payload.data
            }

        default: return state;

    }
}