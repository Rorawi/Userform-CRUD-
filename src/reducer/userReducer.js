import{v4 as uuid}from "uuid"


let initialState = {
    user: [
        {
          name: 'Barbrah',
          email: 'barbrah@email.com',
          gen: "22",
          id: uuid()
        },

        {
          name: 'Kelly',
          email: 'kelly@email.com',
          gen: "22",
          id: uuid()
        },
      ]
}


const UserReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_USER":
      const newUser = {
           name:action.payload.name,
           email:action.payload.email,
          gen:action.payload.gen,
           id: action.payload.id
    
       }
       return {...state,user: [...state.user, newUser]}

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
