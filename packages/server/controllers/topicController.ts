import { createTopic, deleteTopicById, getAllTopic, getTopicById } from "../services/serviceTopic";
import type { Express } from "express";
import type { ITopic } from "../models/modelTopic";

export const topicController = (app: Express) => {
    app.post('/topic/create', async function (req, res) {
        const topic: ITopic = req.body;
        const response = await createTopic(topic);

        res.send(response);
    });

    app.get('/topic', async function (req, res) {
        console.log(req);
        const topics = await getAllTopic();

        res.send(topics);
    });

    app.get('/topic/:id', async function (req, res) {
        const id = req.params.id;
        const topic = await getTopicById(String(id));

        res.send(topic);
    });

    app.delete('/topic/:id', async function (req, res) {
        const id = req.params.id;
        const response = await deleteTopicById(String(id));

        res.send(response);
    });
};
