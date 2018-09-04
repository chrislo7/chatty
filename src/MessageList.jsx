import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    console.log("Rendering MessageList")
      //grabs the message log
    return (
      <main className="messages">
      {this.props.messages.map((logObject) =>
        <Message username={logObject.username} content={logObject.content} key={logObject.id} />
      )}
      </main>
    )
  }
}


