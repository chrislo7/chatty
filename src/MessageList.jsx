import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    const createMessage = this.props.messages.map((logObject, index) => {
      return <Message username={logObject.username} content={logObject.content} key={index} />
    })
    console.log(this.props.messages, "messagelist messgaes")
      //grabs the message log
      // change key = index later @ displaying incoming messages

    return (
      <main className="messages">
        {createMessage}
      </main>
    )
  }
}


