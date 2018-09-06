const WebSockets = require('ws');
const express = require('express');
const SocketServer = require('ws').Server;
const uuidV4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()

// Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public')).listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));
// Create the WebSockets server
const wss = new SocketServer({ server });
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (client) => {
  console.log('Client connected');




client.on('message', (raw) => {
  const receivedMessage = JSON.parse(raw);
  console.log(receivedMessage)
  receivedMessage.id = uuidV4();
  console.log("receivedMessage with id", receivedMessage)
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSockets.OPEN) {
      client.send(JSON.stringify(receivedMessage));
      console.log('Broadcasting data from server to client')
    }
  })
})

// Set up a callback for when a client closes the socket. This usually means they closed their browser.
  client.on('close', () => console.log('Client disconnected'));
});
