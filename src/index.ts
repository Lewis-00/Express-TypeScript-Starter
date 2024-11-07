import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
