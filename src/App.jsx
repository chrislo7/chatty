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
    this.state = { data, loading: true };
  }

  componentDidMount() {
    //  After 3 seconds, set 'loading' to false in the state.
    setTimeout(() => {
      this.setState({ data, loading: false }); //re-rendering
    }, 1000);
  }

  render() {
    console.log("Rendering App.jsx");
    if (this.state.loading) {
      console.log("Rendering loading text")
      return <body>Loading...</body>
    } else {
      //assigns variable to grab current User object from state
      let currentUser = this.state.data.currentUser;
      let messageLog = this.state.data.messages;
      return (
        <body>
          <div className="navbar">
            <a href="/" className="navbar-brand">
              Chatty
            </a>
          </div>
          <MessageList messageLog={messageLog}/>
          <ChatBar currentUser={currentUser.name} />
        </body>
    )}
  }
}

export default App;
