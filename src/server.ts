import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import uploadConfig from './config/upload';

import './database';

const app = express();
app.use(express.json());

// Servindo arquivos estáticos
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.listen(3333, () => {
  console.log('Server stated on port 3333!');
});
