import type { RequestHandler } from 'express'; 
import cookieParserMiddleware from 'cookie-parser'; 
 
export const cookieParser: RequestHandler = cookieParserMiddleware(); 
export { auth } from './auth';

import { Router, ErrorRequestHandler, RequestHandler } from 'express';
import { renderHtml } from '../utils/renderHtml';
import { allRoutes } from '../constants/allRoutes';

export const router: Router = Router();

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [];

export function appRoutes(router: Router) {
  router.get(allRoutes, middlewares, renderHtml);
}

appRoutes(router);