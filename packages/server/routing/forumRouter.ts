import { Router } from "express";
import { forumService } from "../services/forumService";

export const forumRouter = (apiRouter: Router) => {
    const service = new forumService();

    const router: Router = Router();

    router.get("/topic/:id", service.getTopic);
    router.get("/topic", service.getAllTopics);
    router.post("/topic", service.createTopic);
    router.delete("/topic/:id", service.deleteTopic);

    router.get("/comment/:id", service.getComment);
    router.get("/comment", service.getAllComment);
    router.post("/comment", service.createComment);
    router.delete("/comment/:id", service.deleteComment);

    apiRouter.use("/forum", router);
};