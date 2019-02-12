import React, { Component } from 'react';
import { ReactComponent as Logo } from './NOBS Web Logo.svg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import ReactSearchBox from 'react-search-box';



class App extends Component {
  render() {


      return (
        <div>
          <Jumbotron style={{backgroundColor:"#73dd8d"}}>
            <Logo className="stretch" style={{height:'50%', width:"50%",  display:'block', marginLeft:'auto', marginRight:'auto'}}>
            </Logo>
            <ReactSearchBox style={{display:'inline'}} placeholder="Enter article url" value="Search" data={this.data} callback={record => console.log(record)}>
            </ReactSearchBox>
            <button className="Display-1" style={{textAlign:"center"}}>SEARCH</button>
          </Jumbotron>
        </div>

      );
    }
}

export default App;
