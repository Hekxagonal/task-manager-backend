import express from 'express';
import notifier from 'node-notifier';
import { io } from '../../config'

const phoneModule = express.Router();

phoneModule.post('/phone/notification', (req, res) => {
  const data = req.body;
  console.log(data);

  notifier.notify({
    title: `${data.app} (${data.device})`,
    subtitle: data.title,
    message: `${data.text}`,
    sound: false,
  });

  io.send('phone', data)

  res.json({ message: 'OK' });
});

export default phoneModule;
