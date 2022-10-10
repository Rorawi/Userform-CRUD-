import React from 'react';
import User from "./User";
import { Container, Row, } from 'react-bootstrap';
import { connect } from 'react-redux';

const Users = (props) => {
    return (
       <div>
         <Container>
            <Row>
                {props.users.map((user,index) => {
                    return <User userInfo={user}
                                 key={index}
                                 deleteUser={props.deleteUser}
                                 editUser={props.editUser} />
                                 
                })}
               
            </Row>

        </Container>
       </div>
 

    );
}

const mapStateToProps = (state) =>({
    users: state.user
 })
 
    

export default connect(mapStateToProps)(Users);
