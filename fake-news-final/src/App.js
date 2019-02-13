import React, { Component } from 'react';
import './App.css';
import {Button, Navbar, Nav, FormControl ,Form, Container, Row, Col, Image} from 'react-bootstrap';
import { ReactComponent as Logo } from './NOBS Web Logo.svg';
import background from './background.jpg';



class App extends Component {
  render() {


      return (
        <Container fluid style={{minHeight:'100vh',maxHeight:'999px', backgroundSize: '100% 100%', backgroundImage: `url(${background})`}}>
          <Row>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar>
          </Row>
          <Row style={{width:'100%',margin:'0 auto',textAlign:'center'}}>
              <Logo style={{display:'inline-block', height:'70%', width:'70%',maxHeight:'400px',maxWidth:'400px'}}></Logo>
          </Row>
          <Row style={{width:'100%',margin:'0 auto',textAlign:'center'}}>
              <Form>
                      <FormControl style={{display:'inline-block', margin: '0 auto', width:'50%', padding:"10px"}} type="text" placeholder="Search" className="text-center"/>
                      <Button variant="outline-info">Search</Button>
              </Form>
          </Row>
        </Container>

      );
    }
}

export default App;
