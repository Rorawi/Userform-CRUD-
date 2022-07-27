import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col,Row } from 'react-bootstrap';
import  Users  from "./component/Users";
import AddUserForm from './component/AddUserForm';

class App extends Component {

  constructor(props){
    super();
    this.state ={
      user:[
        {
          name:'Barbrah',
          email:'barbrah@email.com',
          gen: "22"
        },

        {
          name:'Kelly',
          email:'kelly@email.com',
          gen: "22"
        },
      ]
    } 
  }

  AddNewUser = (user) =>{
    this.setState({
      user:[...this.state.user, user]
    })
  }
  render(){
  return (
   <Container>
    <Row>
      <Col xs={4}>
        <AddUserForm addUser = {this.AddNewUser}/>
      </Col>
      
      <Col>
      <Users userData={this.state.user}/>
      </Col>
    </Row>
   </Container>
  );}
}

export default App;
