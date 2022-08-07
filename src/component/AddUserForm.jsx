import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class AddUserForm extends Component {
    constructor(props){
        super();
        this.state = {
            name:'',
            email:'',
            gen:'',
        }
    }

    
    handleName = (e) => {
        e.preventDefault();
this.setState({
    [e.target.name]: e.target.value
    });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name:'',
            email:'',
            gen:'',
        })
        // console.log('forms submitted:' ,this.state)
      }

      
    render() {
        return (
            
                <Form onSubmit={this.handleSubmit} style={{ marginTop: '20px' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleName} />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleName}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="text" placeholder="Enter Gen" name="gen" value={this.state.gen} onChange={this.handleName}/>
      </Form.Group>
            <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        );
    }
}

export default AddUserForm;
