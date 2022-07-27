import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import{Card} from 'react-bootstrap';

const User = (props) => {
    return (
        <>
          <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Name: {props.userInfo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Email: {props.userInfo.email}</Card.Subtitle>
        <Card.Text>
         Gen: {props.userInfo.name}
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card></Col>
            </Row>
            </Container>  
        </>
    );
}

export default User;
