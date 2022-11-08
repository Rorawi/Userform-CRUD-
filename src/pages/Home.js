import React from 'react';
import { Container, Col, Row,Button } from 'react-bootstrap';
import Users from "../component/Users";
import AddUserForm from '../component/AddUserForm';
import { signOut } from 'firebase/auth';
import{auth} from '../firebase/config'

const SignOut = async(e)=> {
  e.preventDefault()
  try {signOut(auth)}catch(e) {
      console.log(e)
    }
   
}


const Home = () => {
    return (
        <div>
          <Container>
        <Row>
          <Col xs={4}>
            <AddUserForm/>
          </Col>

          <Col>
            <Users/>
          </Col>
        </Row>
        <Button variant='danger' onClick={SignOut}>Log Out</Button>

      </Container>
        </div>
    );
}

export default Home;
