import './App.css';
import { Container, Row , Col, Card} from 'react-bootstrap';
import React,{useState,useEffect} from 'react';

function App() {
  return (
   <Container fluid>
      <Row xs={1} md={3} className='g-4'>
        <Col className='container-fluid mt-4'>
            <Card>
              <Card.Img></Card.Img>
              <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Text> description </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
   </Container>
  );
}

export default App;
