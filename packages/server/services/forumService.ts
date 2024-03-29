import type { Request, Response } from 'express';
import { topicRepos, commentRepos, Reaction, reactionRepos } from '../db';

export class forumService {
  getAllTopics = (_: Request, res: Response) => {
    topicRepos
      .getAll()
      .then(topics => res.status(200).json(topics))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };

  getTopic = (_req: Request, res: Response) => {
    topicRepos
      .get(_req.params.id)
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };

  createTopic = (_req: Request, res: Response) => {
    topicRepos
      .create(_req.body)
      .then(topic => res.status(200).json(topic))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };

  deleteTopic = (_req: Request, res: Response) => {
    topicRepos
      .delete(_req.params.id)
      .then(() => res.status(200).json('ok'))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };

  getAllCommentsForTopic = (_req: Request, res: Response) => {
    commentRepos
      .findAll({
        include: [Reaction],
        where: {
          id_topic: _req.query.id_topic,
        },
      })
      .then(comments => res.status(200).json(comments))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };

  getComment = (_req: Request, res: Response) => {
    commentRepos
      .findAll({
        include: [Reaction],
        where: { id: _req.params.id },
      })
      .then(comment => res.status(200).json(comment))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };

  createComment = (_req: Request, res: Response) => {
    commentRepos
      .create(_req.body)
      .then(comment => {
        comment.setDataValue('reactions', []);

        return res.status(200).json(comment);
      })
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };

  deleteComment = (_req: Request, res: Response) => {
    commentRepos
      .delete(_req.params.id)
      .then(() => res.status(200).json('ok'))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };

  createReaction = (_req: Request, res: Response) => {
    reactionRepos
      .createOrDestroy(
        {
          id_author: _req.body.id_author,
          id_comment: _req.body.id_comment,
          value: _req.body.value,
        },
        _req.body
      )
      .then(reaction => res.status(200).json(reaction))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };
  getReactions = (_req: Request, res: Response) => {
    reactionRepos
      .getAll()
      .then(reactions => res.status(200).json(reactions))
      .catch(err => res.status(500).json({ error: ['db error', err.status] }));
  };
}
