import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {
    console.log('this MessageList', this.props)
    const createMessage = this.props.messages.map((logObject, index) => {
      if (logObject.type === "postMessage") {
        return (<Message key={logObject.id} username={logObject.username} content={logObject.content}/>);
      } else if (logObject.type === "postNotification" && logObject.oldName !== logObject.newName) {
        return (<div key={logObject.id} className="message system">User {logObject.oldName} changed their name to {logObject.newName}</div>);
      }
     //   return <Message username={logObject.username} content={logObject.content} key={index} />
    })

    return (
      <main className="messages">
        {createMessage}
      </main>
    )
  }
}


