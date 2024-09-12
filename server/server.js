const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const corsConfig = {
  origin : "https://tic-tac-toe-multiplayer-api.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
};
app.options("", cors(corsConfig));
const userRoutes = require("./routes/userRoutes");
const friendRoutes = require("./routes/friendRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const socketIo = require("socket.io");
const socketController = require("./controllers/socketController");



const app = express();
app.use(express.json());
const server = http.createServer(app);

app.set('server', server);

app.use(cors(corsConfig));

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('hey hey'); // Use 200 for success
});

app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/friends", friendRoutes);
app.use("/scores", scoreRoutes);

const io = socketIo(server, {
  cors: {
    origin: "https://tic-tac-toe-multiplayer-api.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

socketController(io);

/*server.listen(4000, () => {
  console.log("Listening on *:4000");
});*/
