// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const http = require("http");
const socketio = require("socket.io");
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
const sessionMiddleware = session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
});
// We need to use sessions to keep track of our user's login status
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//socket middleware
const wrap = middleware => (socket, next) => {
  middleware(socket.request, {}, next);
};

io.use(wrap(sessionMiddleware));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));

io.use((socket, next) => {
  if (socket.request.user) {
    next();
  } else {
    next(new Error("unauthorized"));
  }
});
//Run socket
const socket = require("./socket/socket");
socket.start(io);
// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
