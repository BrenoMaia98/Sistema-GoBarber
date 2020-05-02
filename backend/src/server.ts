import express from 'express';
import routes from './routes';

import './database';

try {
  const app = express();

  app.use(express.json());

  app.use(routes);

  const port = 3333;
  app.listen(port, () => {
    console.log(`🚀 App strated on port ${port}!`);
  });
} catch (error) {
  console.error(error.message);
}
