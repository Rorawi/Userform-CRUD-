//import userAction from "../store/usersAction"

let initialState = {
    user: [
        {
          name: 'Barbrah',
          email: 'barbrah@email.com',
          gen: "22",
          id: 'dsjadWJEIJW'
        },

        {
          name: 'Kelly',
          email: 'kelly@email.com',
          gen: "22",
          id: 'dsjkdjarsk3455'
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
    
      }
      return {...state,user: [...state.user, newUser]}

      // case "DELETE_USER":
  
    default:
      return state;
  }

}

export default UserReducer;
