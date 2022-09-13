import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
// import { connect } from 'react-redux'
import Users from "./component/Users";
import AddUserForm from './component/AddUserForm';
class App extends Component {

  constructor(props) {
    super();
    this.state = {
      // user: [
      //   {
      //     name: 'Barbrah',
      //     email: 'barbrah@email.com',
      //     gen: "22",
      //     id: 'dsjadWJEIJW'
      //   },

      //   {
      //     name: 'Kelly',
      //     email: 'kelly@email.com',
      //     gen: "22",
      //     id: 'dsjkdjarsk3455'
      //   },
      // ]
    }
  }



  AddNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      user: [...this.state.user, user]
    })
  }

  deleteUser = (id) => {
    let undeletedUser = this.state.user.filter(user => user.id !== id);
    this.setState({
      user: undeletedUser
    })
  }

  editUser = (id, updatedUser) => {
    this.setState({
      user: this.state.user.map(user => user.id === id ? updatedUser : user)
    })
  }


  render() {
    return (
      <Container>
        <Row>
          <Col xs={4}>
            <AddUserForm addUser={this.AddNewUser} />
          </Col>

          <Col>
            <Users userData={this.state.user} deleteUser={this.deleteUser} editUser={this.editUser} />
          </Col>
        </Row>
      </Container>
    );
  }
}





export default App;
