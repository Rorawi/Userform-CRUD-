import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import {addUser} from "../store/usersAction";
import {connect} from 'react-redux';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase/config"
import{v4 as uuid}from "uuid"

    
const AddUserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleClick = async(e)=> {
      e.preventDefault();
      let newUser = { name: name,email: email, gen: gen, id: uuid() };
     // props.addUser(newUser);
      // props.newUser({ name, email, gen });

      await setDoc(doc(db, "users", newUser.id),newUser);
      setName("");
      setEmail("");
      setGen("")
        

        
    
  } 

      
   
        return (
            
                <Form onSubmit={handleClick} style={{ marginTop: '20px' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name"value={name} onChange={(e) =>{
                        setName(e.target.value);
                    }} />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) =>{
                        setEmail(e.target.value);
                    }} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="text" placeholder="Enter Gen" name="gen" value={gen} onChange={(e) =>{
                        setGen(e.target.value);
                    }} />
      </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>

        );
    }


const mapDispatchToProps={
  addUser,
}



export default connect (null,mapDispatchToProps)(AddUserForm);
