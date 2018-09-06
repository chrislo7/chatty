import React, { Component } from "react";
import MessageList from "./MessageList.jsx";
import Message from "./Message.jsx";
import ChatBar from "./ChatBar.jsx";

const data = {
  currentUser: { name: "" },
  messages: [] // messages coming from the server will be stored here as they arriv
}



class App extends Component {
  //  Setting initial state so the component is initially "loading"
  // "loads" the data of current users into this.state
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      messages: []
    };
  }

  InsertMessage = (userMessage) => {
    console.log("user's message", userMessage);
    //using data.messages.length as ID for new user messages
    let messageLength = data.messages.length += 1;
    const newMessage = {username: userMessage.username, content: userMessage.content};
    const messagesWithUserMessage = this.state.messages.concat(newMessage);
  }

  sendMessage = (message) => {
    this.connection.send(JSON.stringify(message));
    console.log('Message sent: Client => Server')
  }

  handleInsertMessage = (userMessage) => {
    let messageLength = data.messages.length += 1;
    const newMessage = {username: userMessage.username, content: userMessage.content};
    const messagesWithUserMessage = [... this.state.messages, (newMessage)];
    this.sendMessage(newMessage)
  }


  componentDidMount() {
    this.connection = new WebSocket("ws://localhost:3001")
    this.connection.onopen = (event) => {
      console.log("Connection established");
    }

    this.connection.onmessage = (event) => {
      const serverData = JSON.parse(event.data);
      console.log('Data coming back from server to client', serverData);
      this.setState(
        { messages: [... this.state.messages, serverData] })
    }
  }


  render() {

      return (
        <body>
          <div className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </div>
          <MessageList messages={this.state.messages} />
          <ChatBar currentUser={this.state.currentUser} InsertMessage={this.handleInsertMessage} />
        </body>
    )}
}

export default App;
