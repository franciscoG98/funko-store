const initialState = {
    data: []
}

export default (state = initialState, action)=>{

    switch(action.type){        
        case "NEW_USER":
            return {
                ...state,
                data: [...state.data, action.payload]
    }
    default: return state;
  }

}
