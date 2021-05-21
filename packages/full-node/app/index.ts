import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import getRouter from './resources';
import bodyParser from 'body-parser';
import Queuer from 'utils/Queuer';
import loadCommands from 'commands';

dotenv.config();
function application() {
  const app = express();
  const router = getRouter();

  mongoose.connect(process.env.MONGO_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  Queuer.init();
  loadCommands();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(router);

  app.listen(process.env.PORT);
}

application();
export default application;
