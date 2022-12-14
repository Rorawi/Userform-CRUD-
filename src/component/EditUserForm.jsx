import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { editUsers } from '../store/usersAction'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config"
class EditUserForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.userInfo.name,
      email: props.userInfo.email,
      gen: props.userInfo.gen,
      id: props.userInfo.id
    }
  }


  handleName = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    // this.props.editUser(this.state.id,this.state);
    console.log(this.props.userInfo.id);
    this.props.editUsers(this.state);
    // this.setState({
    //     name:'',
    //     email:'',
    //     gen:'',
    //     id:''
    // });

    this.props.closeModal();
    let newUser = {
      name: this.props.userInfo.name,
      email: this.props.userInfo.email,
      gen: this.props.userInfo.gen,
      id: this.props.userInfo.id
    }

    const userRef = doc(db, "react-form-users", newUser.id);
    await updateDoc(userRef, newUser);
    console.log(userRef);
    // console.log('forms submitted:' ,this.state)
  }


  render() {
    return (

      <Form onSubmit={this.handleSubmit} style={{ marginTop: '20px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleName} />

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleName} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control type="text" placeholder="Enter Gen" name="gen" value={this.state.gen} onChange={this.handleName} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    );
  }
}

const mapDispatchToProps = {
  editUsers
}


export default connect(null, mapDispatchToProps)(EditUserForm);

