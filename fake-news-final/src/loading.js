import React, { Component, Fragment } from "react";
import './App.css';
import { withRouter } from 'react-router';

class Loading extends Component {
  //still working on the bar being animated, but it's not that important in general
  animate(){
    console.log("here");
    var loading_screen = document.getElementById("loading_screen");
    var loading = 0;
    loading_screen.style.animation = "fadeout ls ease";

    function move() {
      var elem = document.getElementById("myBar");
      var width = 0;
      var id = setInterval(frame, 20);
      function frame() {
        if (width >= 12) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + '%';
          elem.innerHTML = width * 1 + '%';
        }
      }
    }
    move();
  }
  render() {
    return (

      <div background="background.png">
      <Fragment>
      <div id="loading_screen">
        <p id="loading_text">Finding the facts...</p>
      </div>
      <img src="NOBS Web Logo.svg" id="sizing"></img>
      <div id="progress">
        <div id="myBar">1%</div>
      </div>


      </Fragment>
      </div>
    );
  }
}
//  {this.animate()}
export default withRouter(Loading);
