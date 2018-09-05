import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    console.log("Rendering MessageList")
      //grabs the message log
      //change key = index later @ displaying incoming messages
    return (
      <main className="messages">
      {this.props.messages.map((logObject, index) =>
        <Message username={logObject.username} content={logObject.content} key={index} />
      )}
      </main>
    )
  }
}


