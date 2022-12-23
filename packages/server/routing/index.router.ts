import { Router } from "express";
import { forumRouter } from "./forumRouter";

export const apiRouter: Router = Router();

forumRouter(apiRouter);
