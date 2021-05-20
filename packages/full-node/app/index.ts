import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import message from './resources/messages';
import Queuer from 'utils/Queuer';

dotenv.config();
function application() {
  const app = express();

  mongoose.connect(process.env.MONGO_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  Queuer.init();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.post('/messages', message);

  app.listen(process.env.PORT);
}

application();
export default application;
