import 'dotenv/config';
import express, { Response } from 'express';
import cors from 'cors';

import { User } from '@re-starter/common';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('It works');
});

app.post('/login', (req, res: Response<User>) => {
  res.json({
    email: 'josemanuel@jmlweb.es',
    token: '123456789',
  });
});

app.listen(process.env.PORT, () => {
  console.info(`⚡️ Server is running at https://localhost:${process.env.PORT as string}`);
});
