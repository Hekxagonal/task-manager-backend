import express from 'express';
import notifier from 'node-notifier';
import { io } from '../../config'
import { createRoutine } from './gymRoutine';

const fitnessModule = express.Router();

fitnessModule.get('/fit-task', (req, res) => {
  const data = req.body;

  res.json(createRoutine(data.days));
});

export default fitnessModule;
