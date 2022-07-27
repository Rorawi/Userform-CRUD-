import React from 'react';
import User  from "./User";
import { Container,Row, } from 'react-bootstrap';

const Users = (props) => {
    return (
        <Container>
        <Row>
        {props.userData.map((user,index)=>{
                   return <User userInfo = {user} key={index}/>
            })}
        </Row>
            
        </Container>
    );
}

export default Users;
