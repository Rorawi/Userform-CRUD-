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


const UserReducer = (state=initialState, action) => {
    return state;
}

export default UserReducer;
