import type { Express } from "express";
import type { IComment } from "../models/modelComment";
import { createComment, getCommentById, getAllComments, deleteCommentById } from "../services/serviceComment";


export const commentController = (app: Express) => {
    app.post('/comment', async function (req, res) {
        const comment: IComment = req.body;
        const response = await createComment(comment);

        res.send(response);
    });

    app.get('/comment', async function (req, res) {
        console.log(req); //lint требует, чтобы все переменные были использованы, без нее контейнер не собирается
        const comments = await getAllComments();

        res.send(comments);
    });

    app.get('/comment/:id', async function (req, res) {
        const id = req.params.id;
        const comment = await getCommentById(String(id));

        res.send(comment);
    });

    app.delete('/comment/:id', async function (req, res) {
        try {
            const id = req.params.id;
            await deleteCommentById(String(id));

            res.sendStatus(200);
        } catch {
            res.sendStatus(404);
        }
    });
};
