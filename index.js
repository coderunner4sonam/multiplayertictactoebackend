const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const server = http.createServer(app);
const cors = require('cors');
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "https://multiplaertictactoe-qn7hpbi7i-coderunner4sonam.vercel.app/",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on("board", (data) => {
    // Emit the "board" event to all connected clients except the sender
    socket.broadcast.emit("board", data);
  });

  socket.on("currentPlayer", (data) => {
    // Emit the "currentPlayer" event to all connected clients except the sender
    socket.broadcast.emit("currentPlayer", data);
  });

  socket.on("length", (data) => {
    // Emit the "length" event to all connected clients except the sender
    socket.broadcast.emit("length", data);
  });

  socket.on("winner", (data) => {
    // Emit the "winner" event to all connected clients except the sender
    socket.broadcast.emit("winner", data);
  });

  socket.on("Drawn", (data) => {
    // Emit the "Drawn" event to all connected clients except the sender
    socket.broadcast.emit("Drawn", data);
  });

  socket.on("SocketID", (data) => {
    // Emit the "SocketID" event to all connected clients except the sender
    socket.broadcast.emit("SocketID", data);
  });
});

const PORT = 8000;

server.listen(PORT, (req, res) => {
  console.log("server is running at 8000");
});







