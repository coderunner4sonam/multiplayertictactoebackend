const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const server = http.createServer(app);
const cors = require('cors');
app.use(cors());
// https://multiplaertictactoe.vercel.app

const io = new Server(server, {
  cors: {
    origin: "https://multiplaertictactoe.vercel.app",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log(socket.id);
  const ConnectionList = ["board", "currentPlayer", "length", "winner", "Drawn", "SocketID", "RoomID", "GameStart", "CreatedId"];

  ConnectionList.map((connection)=>(
    socket.on(connection,(data) => {
      socket.broadcast.emit(connection, data);
    })
  ))
});

const PORT = 8000;

server.listen(PORT, (req, res) => {
  console.log("server is running at 8000");
});







