const initialState = {
    login: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                login: action.payload.data
            }

        default: return state;

    }
}