import type { Request, Response } from 'express';
import { reactionRepos } from '../db';

export class reactionService {
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
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
  getReactions = (_req: Request, res: Response) => {
    reactionRepos
      .getAll()
      .then(reactions => res.status(200).json(reactions))
      .catch(err => res.status(500).json({ error: ['db error', err] }));
  };
}
