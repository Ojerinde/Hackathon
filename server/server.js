const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
});
io.use((socket, next) => {
  const email = socket.handshake.auth.email;
  if (!email) {
    return next(new Error("invalid email"));
  }
  socket.email = email;
  next();
});
io.on("connection", (socket) => {
  socket.join(socket.id);
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      email: socket.email,
    });
  }
  socket.emit("users", users);
  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    email: socket.email,
  });
  socket.on("Join private room", (userID) => {
    socket.join(userID);
  });
  socket.on("Private Msg", (msg, userID) => {
    io.to(userID).emit("send msg", { msg, userID });
  });
});
const PORT = process.env.PORT,
  DB_LOCAL = process.env.DB_LOCAL;
// database connection
function connect() {
  const dbURI = DB_LOCAL;

  mongoose.set("strictQuery", false);
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "ChatApp",
    })
    .then(() =>
      httpServer.listen(PORT, () => {
        console.log(`App running at PORT: ${PORT} and MongoDB Server started`);
      })
    )
    .catch((err) => console.log(err));
}

connect();
