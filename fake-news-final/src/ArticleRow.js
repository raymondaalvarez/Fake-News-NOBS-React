import React from 'react';
import './ArticleRow.css';
class ArticleRow extends React.Component {

  render() {
    return <table className="table-border table-body table-fixed">
      <tbody style={{'height': 'auto', 'display': 'block'}}>
        <tr>
          <td>
            <img alt="poster" className="rounded-corner" width={200} src={this.props.article[4]}/>
          </td>
          <td>
            <h3 className="app-font">{this.props.article[1]}</h3>
            <p className="app-font-p">{this.props.article[2]}</p>
            <ul>
              <li className="App-button"><a className="App-button-styles" href="#">Stats</a></li>
              <li className="App-button"><a className="App-button-styles" href={this.props.article[3]}>Read</a></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default ArticleRow
