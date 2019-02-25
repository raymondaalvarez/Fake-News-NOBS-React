import React, { Component } from 'react';
import './App.css';
import {Button, Navbar, Nav, FormControl ,Form, Container, Row, Col, Image, NavItem, Card, Table} from 'react-bootstrap';
import { ReactComponent as Logo } from './NOBS Web Logo.svg';
import background from './background.png';
import NavLink from 'react-bootstrap/NavLink';



class App extends Component {
  constructor(props){
    super(props)
    console.log("This is my initializer")

    const article = { id:'0', title: 'Best of Late Night: Stephen Colbert Wants to Remind You: Trump Isn’t Normal', description:"That mildly nauseous feeling you have is because for the last two years, Donald Trump has been spinning you in a tumble-dryer full of turd,” Colbert said."
    }

    this.state = {rows:
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Article</th>
            <th>Truth Rating</th>
            <th>Fake News Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              </Card>
            </td>
            <td>7/10</td>
            <td>2/10</td>
          </tr>
        </tbody>

      </Table>

    }

  }

  render() {


      return (

        <Container fluid>
          <Container className="fn-header" style={{backgroundImage: `url(${background})`}}>
            <Table className='App-header' style={{width:'100%',margin:'0 auto'}}>
              <tbody>
                <tr>
                  <td><Logo className="App-logo"></Logo></td>
                  <td><h3>Fake News Search</h3></td>
                </tr>
              </tbody>
            </Table>
            <Row style={{width:'100%',margin:'0 auto',textAlign:'center'}}>
                <Form>
                        <FormControl style={{display:'block', margin: '0px', width:'99%', paddingTop:"8px", paddingBottom:"8px", paddingLeft:"8px", contentAlign:"center"}} type="text" placeholder="Search" className="text-center"/>
                        <Button>Search</Button>
                </Form>
            </Row>
            {this.state.rows}
          </Container>
        </Container>

      );
    }
}

export default App;
