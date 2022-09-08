import express from 'express';
import notifier from 'node-notifier';
import { io } from '../../config'
import si from 'systeminformation';

const mainDeviceModule = express.Router();

mainDeviceModule.get('/mainDevice/mem', (req, res) => {

  si.mem().then(data => {
    res.json({ data });
  })
});

export default mainDeviceModule;
