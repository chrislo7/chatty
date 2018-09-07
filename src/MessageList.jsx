import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    const createMessage = this.props.messages.map((log) => {
      if (log.type === "postMessage") {
        return (<Message classname="message-message" key={log.id} username={log.username} content={log.content}/>);
      } else if (log.type === "postNotification" && log.oldName !== log.newName) {
        return (<div key={log.id} className="message-notification">User {log.oldName} changed their name to {log.newName}</div>);
      }
    })

    return (
      <main className="messages">
        {createMessage}
      </main>
    )
  }
}


