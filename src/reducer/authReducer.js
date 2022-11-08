let initialState = {
    loggedInUsers: null
}

const AuthReducer =(state = initialState,action)=> {
    switch (action.type) {
        case 'add_user':
            return{...state, loggedInUsers:action.payload}
            default : return state
    }
}

export default AuthReducer;