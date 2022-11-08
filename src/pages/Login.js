import React,{useState} from 'react';
import {Form, Button} from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/config"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

        const handleLogin =async(e)=> {
            e.preventDefault()
            try{
              const user = await signInWithEmailAndPassword(auth, email, password)
              navigate("/" , {replace:true})
              console.log(user);
            }catch(e){console.log(e);}

            setEmail("");
            setPassword("");
        }
        const Google =async(e)=> {
            e.preventDefault()
            try{
                const user = await signInWithPopup(auth, provider)
                console.log(user);
            }catch(e){console.log(e);}

            setEmail("");
            setPassword("");
        }
    return (
        
             <Form>
                <h1>Login here</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} 
                onChange={(e)=> setPassword(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleLogin}>
                Submit
              </Button>

              <Button variant="success" type="submit" onClick={Google}>
                Login in with Google
              </Button>
            </Form>
    );
}

export default Login;

