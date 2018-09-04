import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    console.log('This is the message Logs', this.props.messageLog)
    console.log("Rendering MessageList")
      //grabs the message log
    return (
      <main className="messages">
      {this.props.messageLog.map((logObject) =>
        <Message key={logObject.id} username={logObject.username} content={logObject.content} />
      )}
      </main>
    )
  }
}


