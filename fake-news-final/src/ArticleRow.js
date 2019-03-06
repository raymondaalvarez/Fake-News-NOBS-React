import React from 'react';
import {Button, Navbar, Nav, FormControl ,Form, Row, Image, Card, Table} from 'react-bootstrap';
import './ArticleRow.css';
class ArticleRow extends React.Component {

  render() {
    return <Table className="table-border table-body" key={this.props.article.id}>
    <tbody style={{width:'100%'}}>
      <tr>
        <td>
          <img alt="poster" className="rounded-corner" height={150} width={200} src={this.props.article.imgUrl}/>
        </td>
        <td>
          <h3 className="app-font">{this.props.article.title}</h3>
          <p className="app-font-p">{this.props.article.description}</p>
          <Button className='App-button'>Statistics</Button>
          <Button className='App-button'>Read</Button>
        </td>
      </tr>
    </tbody>
  </Table>
  }
}

export default ArticleRow