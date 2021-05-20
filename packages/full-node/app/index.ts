import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
function application() {
  const app = express();

  app.listen(process.env.PORT);
}

application();
export default application;
