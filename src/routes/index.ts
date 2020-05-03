import { Router } from 'express';
import appointmentRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello GoStack!' }),
);

export default routes;
