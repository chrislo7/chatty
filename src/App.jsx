import React, { Component } from "react";
import MessageList from "./MessageList.jsx";
import Message from "./Message.jsx";
import ChatBar from "./ChatBar.jsx";

const data = {
  currentUser: { name: "" },
  messages: [
    {
      username: "Vincent",
      content: "I'm on keto so I can't eat carbs"
    },
    {
      username: "Andrew",
      content: "Keto sucks lol"
    }
  ]
}



class App extends Component {
  //  Setting initial state so the component is initially "loading"
  // "loads" the data of current users into this.state
  constructor(props) {
    super(props);
    this.state = {
      currentUser: data.currentUser.name,
      messages: data.messages
    };
  }

  InsertMessage = (userMessage) => {
    console.log("user's message", userMessage);
    //using data.messages.length as ID for new user messages
    let messageLength = data.messages.length += 1;
    const newMessage = {username: userMessage.username, content: userMessage.content};
    const messagesWithUserMessage = this.state.messages.concat(newMessage);
    this.setState( {messages: messagesWithUserMessage} )
  }

  sendMessage = (message) => {
    this.connection.send(JSON.stringify(message));
    console.log('Message sent: Client => Server')
  }

  handleInsertMessage = (userMessage) => {
    let messageLength = data.messages.length += 1;
    const newMessage = {username: userMessage.username, content: userMessage.content};
    const messagesWithUserMessage = this.state.messages.concat(newMessage);
    this.setState( {messages: messagesWithUserMessage} )
    this.sendMessage({message: messagesWithUserMessage})
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.connection = new WebSocket("ws://localhost:3001")
    this.connection.onopen = (event) => {
      console.log("Connection established");
    }
    /*setTimeout(() => {
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Sean", content: "I don't even eat lol"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      console.log('messages in app.jsx', messages)
      this.setState({messages: messages})
    }, 3000);*/

  }


  render() {
    console.log("Rendering App.jsx");
    console.log('this', this)

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
