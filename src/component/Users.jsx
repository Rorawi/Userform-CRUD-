import React from 'react';
import User from "./User";
import { Container, Row, } from 'react-bootstrap';
import { connect } from 'react-redux';

const Users = (props) => {
    return (
        <Container>
            <Row>
                {props.users.map((user,) => {
                    return <User userInfo={user}
                                 key={user.id}
                                 deleteUser={props.deleteUser}
                                 editUser={props.editUser} />
                })}
            </Row>

        </Container>
 

    );
}

const mapStateToProps = (state) =>({
    users: state.user
 })

export default connect(mapStateToProps)(Users);
