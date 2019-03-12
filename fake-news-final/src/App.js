import React, { Component } from 'react';
import './App.css';
import {Form, Row, Table} from 'react-bootstrap';
import { ReactComponent as Logo } from './NOBS Web Logo.svg';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Loading from "./loading";
import Home from "./home";
import $ from 'jquery';
import ArticleRow from './ArticleRow';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9e3ac01f44214b3e8f0bcf5c572dc0de');





class App extends Component {
  constructor(props ){
    super(props)
    this.state = {rows: [], value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

performSearch(query){
  console.log('Perform search')
  newsapi.v2.everything({
    q:query,
  }).then(response => {
    var articleRows = [];
    var id = 0;
    const articles = Object.values(response.articles);
    articles.forEach(art => {
      var article = Object.values(art);
      article.shift();
      console.log(article);
      const articleRow = <ArticleRow article={article} key={id}></ArticleRow>
      articleRows.push(articleRow);
      id++;
    });
    this.setState({rows: articleRows});

  }).catch(function (response) {
  });
}


handleChange(event){
  this.setState({value: event.target.value});
  this.forceUpdate();
}

handleSubmit(event){
  //call API here
  console.log("Input is: " + this.state.value);
  if (this.state.value.includes('www.')){
    console.log("TRUE");
    this.getArticleData(this.state.value);
  }
  else{
    this.performSearch(this.state.value);
  }
  event.preventDefault();
}

getArticleData(link){
//returns in html right now
  fetch("https://cors-anywhere.herokuapp.com/"+link)
  .then(function(response){
    response.text().then(function(data) {
    //console.log(data);
    var el = document.createElement('html');
    el.innerHTML=data;
    var search = el.getElementsByTagName('title')[0].innerHTML;
    newsapi.v2.everything({
      q:search,
    }).then(response => {
      var articleRows = [];
      var id = 0;
      const articles = Object.values(response.articles);
      articles.forEach(art => {
        var article = Object.values(art);
        article.shift();
        console.log(article);
        const articleRow = <ArticleRow article={article} key={id}></ArticleRow>
        articleRows.push(articleRow);
        id++;
      });
      console.log("State setted");
      this.setState({rows: articleRows});

    }).catch(function (response) {
    });
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
              <Form onSubmit={this.handleSubmit}>
                      <input value={this.state.value} onChange={this.handleChange} style={{display:'block', margin: '0px', width:'99%', paddingTop:"8px", paddingBottom:"8px", paddingLeft:"8px", contentAlign:"center"}} type="text" placeholder="Enter article URL"/>
                      <input type="submit" value="Submit" />
                      {this.state.rows}
              </Form>
          </Row>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/loading" component={Loading}/>
            </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
//The input is stored in this.state.value



//add new routes under Switch tag
//also have to <Link to={"/newpage"} className="nav-link" replace> </Link> in whatever button you make to link to the new page

//I took this out for now since it is more of a template for when we get article info from the search
//{this.state.rows}

