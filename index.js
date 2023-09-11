const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const server = http.createServer(app);
const cors = require('cors');
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "https://multiplaertictactoe.vercel.app",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on("board", (data) => {
    socket.broadcast.emit("board", data);
  });

  socket.on("currentPlayer", (data) => {
    socket.broadcast.emit("currentPlayer", data);
  });

  socket.on("length", (data) => {
    socket.broadcast.emit("length", data);
  });

  socket.on("winner", (data) => {
    socket.broadcast.emit("winner", data);
  });

  socket.on("Drawn", (data) => {
    socket.broadcast.emit("Drawn", data);
  });

  socket.on("SocketID", (data) => {
    socket.broadcast.emit("SocketID", data);
  });
});

const PORT = 8000;

server.listen(PORT, (req, res) => {
  console.log("server is running at 8000");
});







