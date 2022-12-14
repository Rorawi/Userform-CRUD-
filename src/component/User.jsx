import React,{ useState } from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import{Card,Modal} from 'react-bootstrap';
import EditUserForm from './EditUserForm';
import { connect} from 'react-redux';
import { deleteUser } from '../store/usersAction';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config"

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const dispatch = useDispatch();


  const handleDelete = async(e) =>{ 
    e.preventDefault();
    //dispatch(deleteUser)
  //  props.deleteUser(props.userInfo.id);

  await deleteDoc(doc(db, "react-form-users", props.userInfo.id));
  }


    return (

        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose}/>
        </Modal.Body>
       
      </Modal>
          <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' , margin: '20px' ,border:'1px solid dodgerBlue'}}>
      <Card.Body>
        <Card.Title>Name: {props.userInfo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Email: {props.userInfo.email}</Card.Subtitle>
        <Card.Text>
         Gen: {props.userInfo.gen}
        </Card.Text>
        <Button href="#" size='sm' style={{ marginRight: '17px' }} onClick={handleShow}>Edit</Button>
        <Button href="#" variant='danger' size='sm' style={{ backgroundColor: 'wine' }} onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card></Col>
            </Row>
            </Container>  
        </>
    );
}

const mapDispatchToProps={
  deleteUser,
}


export default connect(null,mapDispatchToProps) (User);
