import React, { Component } from 'react';
import './App.css';
import {Button, Navbar, Nav, FormControl ,Form, Row, Image, Card, Table} from 'react-bootstrap';
import { ReactComponent as Logo } from './NOBS Web Logo.svg';
import background from './background.png';
//import NavLink from 'react-bootstrap/NavLink';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Loading from "./loading";
import Home from "./home";
import Results from "./results";
import { withRouter } from 'react-router';


class App extends Component {
    render() {
      return (
        <Router>
          <div className="background">
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
                      <Button><Link to={"/results"} className="nav-link" replace>Search</Link></Button>
              </Form>
          </Row>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/loading" component={Loading}/>
                <Route path="/results" component={Results}/>
            </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
//add new routes under Switch tag
//also have to <Link to={"/newpage"} className="nav-link" replace> </Link> in whatever button you make to link to the new page

//I took this out for now since it is more of a template for when we get article info from the search
//{this.state.rows}
