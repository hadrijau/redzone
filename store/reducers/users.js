const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    return {
        ...state,
        currentUser: action.currentUser
    }
}

export default userReducer
