import { Router } from 'express';
import messages from './messages';

const getRouter = () => {
  const router = Router();
  router.post('/messages', messages);
  return router;
};

export default getRouter;
