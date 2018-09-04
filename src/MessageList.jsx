import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    console.log("Rendering MessageList")
    return (
      <main className="messages">
        <Message />
      </main>
    )
  }
}
