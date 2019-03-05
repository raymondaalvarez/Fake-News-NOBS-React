import React, { Component, Fragment } from "react";
import './App.css';
import { withRouter } from 'react-router';
import background from './background.png';
import {Button, Navbar, Nav, FormControl ,Form, Row, Image, Card, Table} from 'react-bootstrap';

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
      const articleRow =
        <Table className="table-border table-body" key={article.id}>
          <tbody style={{width:'100%'}}>
            <tr>
              <td>
                <Card className="bg-dark text-white">
                  <Card.Img className="rounded-corner" height={150} width={200} src={article.imgUrl} alt="Card image" />
                </Card>
              </td>
              <td style={{width:'100%'}}>
                <h3 className="App-font">{article.title}</h3>
                <p className="App-font-p">{article.description}</p>
                <Button className='App-button'>Statistics</Button>
                <Button className='App-button'>Read</Button>
              </td>
            </tr>
          </tbody>
        </Table>
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
