module.exports = {
  start: function(io) {
    const formatMessage = require("./formatMessage");
    const botName = "AudioBridge Bot";
    io.on("connection", socket => {
      //Socket.emit = Appear to single client connecting
      socket.emit(
        "message",
        formatMessage(botName, "Welcome to AudioBridge chat server!")
      );
      // Appear to everyone but client connecting
      socket.broadcast.emit(
        "message",
        formatMessage(botName, "A user has joined a chat")
      );
      //Appear to all clients
      socket.on("disconnect", () => {
        io.emit("message", formatMessage(botName, "A user has left the chat"));
      });

      //Live Chat being sent between users
      socket.on("chatMessage", msg => {
        io.emit("message", formatMessage("User", msg));
      });
    });
  }
};
