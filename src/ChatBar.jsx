import React, {Component} from 'react';

export default class ChatBar extends Component {
  render() {
    console.log(this)
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.currentUser} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}
