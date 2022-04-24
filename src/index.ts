import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import siteRouter from './routes/site';

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(rateLimit({
  max: 60,
  windowMs: 60 * 1000,
  message: { message: 'Too many requests from this IP address' },

}));

app.use('/site', siteRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
