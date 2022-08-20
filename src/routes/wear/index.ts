import express from 'express';
import notifier from 'node-notifier';

const wearModule = express.Router();

wearModule.post('/wear/change', (req, res) => {
  console.log(req.body);

  notifier.notify({
    title: 'Galaxy Watch 4 Classic',
    message: `Carregamento em ${req.body.percent}%`,
    sound: false,
  });

  res.json({ message: 'OK' });
});

export default wearModule;
