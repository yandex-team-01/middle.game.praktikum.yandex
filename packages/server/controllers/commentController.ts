import type { Express } from "express";
import type { IComment } from "../models/modelComment";
import { createComment, getCommentById, getAllComments, deleteCommentById } from "../services/serviceComment";


export const commentController = (app: Express) => {
    app.post('/comment/create', async function (req, res) {
        const comment: IComment = req.body;
        const response = await createComment(comment);

        res.send(response);
    });

    app.get('/comment', async function (req, res) {
        console.log(req);
        const comments = await getAllComments();

        res.send(comments);
    });

    app.get('/comment/:id', async function (req, res) {
        const id = req.params.id;
        const comment = await getCommentById(String(id));

        res.send(comment);
    });

    app.delete('/comment/:id', async function (req, res) {
        const id = req.params.id;
        const response = await deleteCommentById(String(id));

        res.send(response);
    });
};
