import type { Express } from "express";
import { commentController } from "./commentController";
import { topicController } from "./topicController";

export const apiController = (app: Express) => {
    topicController(app);
    commentController(app);
};
