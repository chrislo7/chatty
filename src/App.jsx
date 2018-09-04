import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
  render() {
  console.log("Rendering App.jsx")
    return (
      <body>
        <div className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </div>
        <MessageList />
        <ChatBar />
      </body>
    );
  }
}


export default App;
