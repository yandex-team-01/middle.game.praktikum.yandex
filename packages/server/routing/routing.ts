import { Router, ErrorRequestHandler, RequestHandler } from 'express';
import { renderHtml } from '../utils/renderHtml';
import { allRoutes } from '../constants/allRoutes';
import { cookieParser } from '../middlewares';

export const router: Router = Router();

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [cookieParser];

export function appRoutes(router: Router) {
  router.get(allRoutes, middlewares, renderHtml);
}

appRoutes(router);
