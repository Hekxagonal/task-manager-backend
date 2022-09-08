import { app, httpServer } from './config';
import wearModule from './modules/wear';
import phoneModule from './modules/phone';
import mainDeviceModule from './modules/device';
import fitnessModule from './modules/fitness';

app.use(wearModule);
app.use(phoneModule);
app.use(mainDeviceModule);
app.use(fitnessModule);

httpServer.listen(3500, () => {
  console.log('listening on http://localhost:3500');
});
