import axios from 'axios';
import { Server } from"socket.io";
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);

const instance = axios.create({
  baseURL: 'http://localhost:3500',
  timeout: 1000,
});

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


export { instance, httpServer, app, io };
