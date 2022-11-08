export const LoggedInUser =(user)=> {
    return{
        type:'add_user',
        payload:user
    }
}