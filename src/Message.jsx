import React, {Component} from 'react';
var ReactDOM = require('react-dom');

export default class Message extends Component {
  render() {
    console.log("Message.jsx props", this.props)
    console.log("rendering message.jsx")
    return (
      <div>
        <div className="message">
          <span className="message-username"> {this.props.username} </span>
          <span className="message-content"> {this.props.content} </span>
        </div>
      </div>
    )
  }
}