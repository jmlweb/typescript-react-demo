import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('It works');
});

app.listen(process.env.PORT, () => {
  console.info(`⚡️ Server is running at https://localhost:${process.env.PORT as string}`);
});
