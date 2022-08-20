import { Server } from"socket.io";
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/phone/notification', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});


server.listen(3500, () => {
  console.log('listening on http://localhost:3500');
});


