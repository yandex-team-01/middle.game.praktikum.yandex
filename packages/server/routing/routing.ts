import type { Request, Response } from 'express'; 
import { Router, ErrorRequestHandler, RequestHandler } from 'express'; 
import { renderHtml } from '../utils/renderHtml'; 
import { allRoutes } from '../constants/allRoutes'; 
 
export const router: Router = Router(); 
 
const middlewares: Array<RequestHandler | ErrorRequestHandler> = []; 
 
export function appRoutes(router: Router) { 
  router.get(allRoutes, middlewares, function (req: Request, res: Response) { 
    renderHtml(req, res); 
  }); 
} 
 
appRoutes(router);
