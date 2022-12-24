// сделать роутинг для api/user
import { Router } from 'express';
import { reactionService } from '../services/reactionServer';

export const reactionRouter = (apiRouter: Router) => {
  const service = new reactionService();

  const router: Router = Router();

  router.post('/', service.createReaction);
  router.get('/', service.getReactions);

  apiRouter.use('/reaction', router);
};
