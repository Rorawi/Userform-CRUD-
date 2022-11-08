import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import Users from "./component/Users";
// import AddUserForm from './component/AddUserForm';
import { collection,query, onSnapshot, orderBy } from 'firebase/firestore';
import {addUser} from "./store/usersAction"
import { connect, useDispatch } from 'react-redux';
import {db, auth} from "./firebase/config"
import Routing from './Routing';
import {LoggedInUser} from "./store/authAction"
import {onAuthStateChanged} from "firebase/auth"
function App() {
 
  const dispatch = useDispatch();
  useEffect(()=> {
    const readData =async()=> {
      const q = query(collection(db, "react-form-users"),orderBy("timestamp", "asc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const UserArr = [];
        querySnapshot.forEach((doc) => {
          UserArr.push(doc.data());
        });
        dispatch(addUser(UserArr))
        console.log(UserArr);
      });
    } 
    readData()
  },[dispatch]
  )
  

  useEffect(()=> {
    onAuthStateChanged(auth,(user)=>{
      // if(user)props.newLoggedInUser(user)
      // else props.newLoggedInUser(null)
      if(user)dispatch(LoggedInUser(user))
      else{dispatch(LoggedInUser(null))}
    })
  },[])
 

    return (
      <Container>
           <Routing/>
{/*      
        <Row>
          <Col xs={4}>
            <AddUserForm/>
          </Col>

          <Col>
            <Users/>
          </Col>
        </Row> */}
      </Container>
    );
  }




// const mapDispatch ={
//   LoggedInUser,
// }

export default App;
