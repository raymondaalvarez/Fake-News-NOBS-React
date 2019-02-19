import React, { Component } from 'react';
import './App.css';
import {Button, Navbar, Nav, FormControl ,Form, Container, Row, Col, Image, NavItem} from 'react-bootstrap';
import { ReactComponent as Logo } from './NOBS Web Logo.svg';
import background from './background.png';
import NavLink from 'react-bootstrap/NavLink';



class App extends Component {
  render() {


      return (

        <Container fluid>
            <Navbar variant="success">
                <img
                  alt=""
                  src="/NOBS Web Logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                {' NOBULLSHIT'}
                  <NavLink>Home</NavLink>
                  <NavLink>Videos</NavLink>
                  <NavLink>Shows</NavLink>

            </Navbar>
          <Container style={{minHeight:'100vh',maxHeight:'999px', backgroundSize: '100% 100%', backgroundImage: `url(${background})`}}>

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
        </Container>

      );
    }
}

export default App;
