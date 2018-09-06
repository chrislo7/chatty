import React, {Component} from 'react';

export default class ChatBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: this.props.currentUser,
      content: ""
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleUserSubmit = this.handleUserSubmit.bind(this)

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleContentSubmit = this.handleContentSubmit.bind(this);
  }

  handleUserChange = (event) => {
    this.setState({username: event.target.value})
  }

  handleUserSubmit = (event) => {
    if (event.key === "Enter") {
      this.props.userUpdate(this.state.username)
      this.setState({username: event.target.value})
    }
  }

  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  }
  handleContentSubmit = (event) => {
    if (event.key === "Enter") {
      this.props.InsertMessage(this.state)
      this.setState({content: ''})
    }
  }


  render() {
    console.log('this.props', this.props)
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Type a username" value={this.state.username} onChange={this.handleUserChange} onKeyPress={this.handleUserSubmit} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.content} onChange={this.handleContentChange} onKeyPress={this.handleContentSubmit} />
      </footer>
    )
  }
}


