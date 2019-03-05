import React, { Component, Fragment } from "react";
import './App.css';
import ArticleRow from './ArticleRow'
import { withRouter } from 'react-router';
import background from './background.png';

class Results extends Component {
  constructor(props){
    super(props)
    console.log("This is my initializer")
    var articleRows = []
    const article =[
      { id:'0', title: 'Best of Late Night: Stephen Colbert Wants to Remind You: Trump Isn’t Normal', description:"That mildly nauseous feeling you have is because for the last two years, Donald Trump has been spinning you in a tumble-dryer full of turd,” Colbert said.", content: "Seth Meyers pointed to a new argument thats becoming popular on Fox News: that perhaps Trump shouldnt declare a national emergency to build the border wall (a move that could well be struck down by federal courts anyway, experts believe) because then a future…", imgUrl:"https://static01.nyt.com/images/2019/02/21/arts/21latenight1/21latenight1-facebookJumbo.png"},
      { id:'1', title: 'Trump picks new UN ambassador', description:"President Donald Trump said Friday he intends to nominate the current American ambassador to Canada to be the new US ambassador to the United Nations.", content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.", imgUrl:"https://cdn.cnn.com/cnnnext/dam/assets/190220165717-trump-un-super-tease.jpg"}
  ]

    article.forEach(article => {
      console.log(article.title);
      const articleRow = <ArticleRow article={article}/>
      articleRows.push(articleRow);
    })

    this.state = {rows: articleRows}

  }
  render() {
    return (
        this.state.rows
    );
  }
}

export default Results;
