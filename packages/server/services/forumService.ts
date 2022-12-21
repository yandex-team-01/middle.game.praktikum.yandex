import type { Response } from "express";
import { commentRepos } from "../models/modelComment";
import { topicRepos } from "../models/modelTopic";

export class forumService {
    //@ts-ignore
    getAllTopics = (_, res: Response) => {
        topicRepos
            .getAll()
            .then(topics => res.status(200).json(topics))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    getTopic = (_req, res: Response) => {
        topicRepos
            .get(_req.id)
            .then(topic => res.status(200).json(topic))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    createTopic = (_req, res: Response) => {
        topicRepos
            .create(_req.value)
            .then(topic => res.status(200).json(topic))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    deleteTopic = (_req, res: Response) => {
        topicRepos
            .delete(_req.id)
            .then(() => res.status(200))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    updateTopic = (_req, res: Response) => {
        topicRepos
            .update(_req.id, _req.value)
            .then(topic => res.status(200).json(topic))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    getAllComment = (_req, res: Response) => {
        commentRepos
            .getAll()
            .then(comments => res.status(200).json(comments))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    getComment = (_req, res: Response) => {
        commentRepos
            .get(_req.id)
            .then(comment => res.status(200).json(comment))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    createComment = (_req, res: Response) => {
        commentRepos
            .create(_req.value)
            .then(comment => res.status(200).json(comment))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    deleteComment = (_req, res: Response) => {
        commentRepos
            .delete(_req.id)
            .then(() => res.status(200))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };

    //@ts-ignore
    updateComment = (_req, res: Response) => {
        commentRepos
            .update(_req.id, _req.value)
            .then(comment => res.status(200).json(comment))
            .catch(err => res.status(500).json({ error: ["db error", err] }));
    };
};
