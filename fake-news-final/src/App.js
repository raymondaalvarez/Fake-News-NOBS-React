import React, { Component } from 'react';
import './App.css';
import {Button, Navbar, Nav, FormControl ,Form, Container, Row, Col, Image, NavItem, Card, Table} from 'react-bootstrap';
import { ReactComponent as Logo } from './NOBS Web Logo.svg';
import background from './background.png';
//import NavLink from 'react-bootstrap/NavLink';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Loading from "./loading";
import Home from "./home";
import Results from "./results";
import { withRouter } from 'react-router';
import $ from "jquery";
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9e3ac01f44214b3e8f0bcf5c572dc0de');

var articleTitle = '';
var articleContent = '';

class App extends Component {
  constructor(props){
    super(props)
    var articleRows = []
    const article =[
      { id:'0', title: 'Best of Late Night: Stephen Colbert Wants to Remind You: Trump Isn’t Normal', description:"That mildly nauseous feeling you have is because for the last two years, Donald Trump has been spinning you in a tumble-dryer full of turd,” Colbert said.", content: "Seth Meyers pointed to a new argument thats becoming popular on Fox News: that perhaps Trump shouldnt declare a national emergency to build the border wall (a move that could well be struck down by federal courts anyway, experts believe) because then a future…", imgUrl:"https://static01.nyt.com/images/2019/02/21/arts/21latenight1/21latenight1-facebookJumbo.png"},
      { id:'1', title: 'Trump picks new UN ambassador', description:"President Donald Trump said Friday he intends to nominate the current American ambassador to Canada to be the new US ambassador to the United Nations.", content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.", imgUrl:"https://cdn.cnn.com/cnnnext/dam/assets/190220165717-trump-un-super-tease.jpg"}
  ]

    this.state = {rows: articleRows, value: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event){
  this.setState({value: event.target.value});
}

handleSubmit(event){
  //call API here
  console.log("Input is: " + this.state.value);
  event.preventDefault();
  this.getArticleData(this.state.value);
}

getArticleData(link){
//returns in html right now
  var newsText = ''

  fetch("https://cors-anywhere.herokuapp.com/"+link)
  .then(function(response){
    response.text().then(function(data) {
    //console.log(data);
    var el = document.createElement('html');
    el.innerHTML=data;
    //console.log(el.getElementsByTagName('title')[0]);
    articleTitle = el.getElementsByTagName('title')[0].innerHTML;
    console.log(articleTitle);
    newsapi.v2.topHeadlines({
      q: articleTitle
    }).then(response => {
      articleContent = response.articles[0].content;
      console.log(response.articles[0].content);
    });
    }).catch(function (response) {
      console.log(response);
    });
  });
}

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
              <form onSubmit={this.handleSubmit}>
                      <Link to={"/results"} className="nav-link" replace><input value={this.state.value} onChange={this.handleChange} style={{display:'block', margin: '0px', width:'99%', paddingTop:"8px", paddingBottom:"8px", paddingLeft:"8px", contentAlign:"center"}} type="text" placeholder="Enter article URL"/></Link>
                      <input type="submit" value="Submit" />
              </form>
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
export {articleTitle};
//The input is stored in this.state.value



//add new routes under Switch tag
//also have to <Link to={"/newpage"} className="nav-link" replace> </Link> in whatever button you make to link to the new page

//I took this out for now since it is more of a template for when we get article info from the search
//{this.state.rows}
