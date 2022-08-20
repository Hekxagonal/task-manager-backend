import { app, httpServer } from './config';
import wearModule from './routes/wear';
import phoneModule from './routes/phone';

app.use(wearModule);
app.use(phoneModule);

httpServer.listen(3500, () => {
  console.log('listening on http://localhost:3500');
});
