import { Router } from 'express';
import appointmentRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello GoStack!' }),
);

export default routes;
