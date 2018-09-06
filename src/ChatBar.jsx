import React, {Component} from 'react';

export default class ChatBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: this.props.currentUser,
      content: ""
    }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange = (event) => {
    this.setState({username: event.target.value})
  }

  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  }

  handleSubmit = (event) => {
    if (event.key === "Enter") {
      this.props.InsertMessage(this.state)
      this.setState({content: ''})
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Type a username" value={this.state.username} onChange={this.handleUserChange} onKeyPress={this.handleSubmit} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.content} onChange={this.handleContentChange} onKeyPress={this.handleSubmit} />
      </footer>
    )
  }
}


