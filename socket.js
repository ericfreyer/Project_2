module.exports = {
  start: function(io) {
    io.on("connection", socket => {
      socket.emit("message", "Welcome to AudioBridge chat server!");
      socket.broadcast.emit("message", "A user has joined a chat");
      socket.on("disconnect", () => {
        io.emit("message", "A user has left the chat");
      });
    });
  }
};
