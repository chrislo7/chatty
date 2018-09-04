import React, { Component } from "react";
import MessageList from "./MessageList.jsx";
import Message from "./Message.jsx";
import ChatBar from "./ChatBar.jsx";

const data = {
  currentUser: {name: "Chris"},
  messages: [
    {
      id: 1,
      username: "Vincent",
      content: "I'm on keto so I can't eat carbs"
    },
    {
      id: 2,
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
    this.state = { currentUser : data.currentUser.name, messages: data.messages };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Sean", content: "I don't even eat lol"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      console.log('messages', messages)
      this.setState({messages: messages})
    }, 3000);
  }


  render() {
    console.log("Rendering App.jsx");
    console.log('this', this)
      //assigns variable to grab current User object from state
      return (
        <body>
          <div className="navbar">
            <a href="/" className="navbar-brand">
              Chatty
            </a>
          </div>
          <MessageList messages={this.state.messages}/>
          <ChatBar currentUser={this.state.currentUser}/>
        </body>
    )}
}

export default App;
