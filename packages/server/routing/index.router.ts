import { Router } from 'express';
import { forumRouter } from './forumRouter';
import { reactionRouter } from './reactionRouter';

export const apiRouter: Router = Router();

forumRouter(apiRouter);
reactionRouter(apiRouter);
