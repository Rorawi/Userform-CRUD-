//import{v4 as uuid}from "uuid"


let initialState = {
    user: []
}


const UserReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_USER":
      return {...state ,user: action.payload}
      
      case "DELETE_USER":
        const filteredUser = state.user.filter(item => item.id !== action.payload)
        return {...state, user: filteredUser}
      
        case "EDIT_USER":
          const updatedUser = state.user.map((user)=> {
            if(user.id=== action.payload.data.id) {
              return action.payload.data
            }
            else {return user}
          })

          return{...state, user:updatedUser}
          
    default:
      return state;
  }

}

export default UserReducer;
