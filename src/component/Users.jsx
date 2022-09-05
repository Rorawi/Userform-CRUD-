import React from 'react';
import User from "./User";
import { Container, Row, } from 'react-bootstrap';

const Users = (props) => {
    return (
        <Container>
            <Row>
                {props.userData.map((user) => {
                    return <User userInfo={user}
                                 key={user.id}
                                 deleteUser={props.deleteUser}
                                 editUser={props.editUser} />
                })}
            </Row>

        </Container>
 

    );
}

export default Users;
