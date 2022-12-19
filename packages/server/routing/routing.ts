import { Router, ErrorRequestHandler, RequestHandler } from 'express';
import type { Request, Response } from 'express';
import { renderHtml } from '../utils/renderHtml';
import { allRoutes } from '../constants/allRoutes';

export const router: Router = Router();

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [];
import { cookieParser, i18nMiddleware } from '../middlewares';

import { i18next } from "../i18next.config";

export const router: Router = Router();

// @ts-ignore
const middlewares: Array<RequestHandler | ErrorRequestHandler> = [i18nMiddleware.handle(i18next), cookieParser];

export function appRoutes(router: Router) {
  router.get(allRoutes, middlewares,
    function (req: Request, res: Response) {
      // @ts-ignore
      renderHtml(req, res, req.i18next);
    });
}

appRoutes(router);
