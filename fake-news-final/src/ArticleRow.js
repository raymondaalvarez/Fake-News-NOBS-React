import React from 'react';
import {Button, Table} from 'react-bootstrap';
import './ArticleRow.css';
class ArticleRow extends React.Component {

  render() {
    return <Table className="table-border table-body">
    <tbody style={{width:'100%'}}>
      <tr>
        <td>
          <img alt="poster" className="rounded-corner" height={150} width={200} src={this.props.article[4]}/>
        </td>
        <td>
          <h3 className="app-font">{this.props.article[1]}</h3>
          <p className="app-font-p">{this.props.article[2]}</p>
          <Button className='App-button'>Statistics</Button>
          <Button className='App-button'>Read</Button>
        </td>
      </tr>
    </tbody>
  </Table>
  }
}

export default ArticleRow
