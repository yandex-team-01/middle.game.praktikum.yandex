import type { Request, Response } from 'express';
import { topicRepos, commentRepos, Reaction } from '../db';

export class forumService {
  getAllTopics = (_: Request, res: Response) => {
    topicRepos
      .getAll()
      .then(topics => res.status(200).json(topics))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  getTopic = (_req: Request, res: Response) => {
    topicRepos
      .get(_req.params.id)
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  createTopic = (_req: Request, res: Response) => {
    topicRepos
      .create(_req.body)
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  deleteTopic = (_req: Request, res: Response) => {
    topicRepos
      .delete(_req.params.id)
      .then(() => res.status(200).json('ok'))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  getAllComment = (_req: Request, res: Response) => {
    commentRepos
      .findAll({
        include: [Reaction],
      })
      .then(comments => res.status(200).json(comments))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  getComment = (_req: Request, res: Response) => {
    commentRepos
      .get(_req.params.id)
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  createComment = (_req: Request, res: Response) => {
    commentRepos
      .create(_req.body)
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };

  deleteComment = (_req: Request, res: Response) => {
    commentRepos
      .delete(_req.params.id)
      .then(() => res.status(200).json('ok'))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
}
