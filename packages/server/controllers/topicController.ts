import { createTopic, deleteTopicById, getAllTopic, getTopicById } from "../services/serviceTopic";
import type { Express } from "express";
import type { ITopic } from "../models/modelTopic";

export const topicController = (app: Express) => {
    app.post('/topic', async function (req, res) {
        const topic: ITopic = req.body;
        const response = await createTopic(topic);

        res.send(response);
    });

    app.get('/topic', async function (req, res) {
        console.log(req); //lint требует, чтобы все переменные были использованы, без нее контейнер не собирается
        const topics = await getAllTopic();

        res.send(topics);
    });

    app.get('/topic/:id', async function (req, res) {
        const id = req.params.id;
        const topic = await getTopicById(String(id));

        res.send(topic);
    });

    app.delete('/topic/:id', async function (req, res) {
        try {
            const id = req.params.id;
            await deleteTopicById(String(id));

            res.sendStatus(200);
        } catch {
            res.sendStatus(404);
        }
    });
};
