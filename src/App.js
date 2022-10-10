import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import Users from "./component/Users";
import AddUserForm from './component/AddUserForm';
import { collection,query, onSnapshot, orderBy } from 'firebase/firestore';
import {addUser} from "./store/usersAction"
import { useDispatch } from 'react-redux';
import {db} from "./firebase/config"
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
        //console.log(UserArr);
      });
    } 
    readData()
  },[]
  )
  


    return (
      <Container>
        <Row>
          <Col xs={4}>
            <AddUserForm/>
          </Col>

          <Col>
            <Users/>
          </Col>
        </Row>
      </Container>
    );
  }






export default App;
