import type { ITopic } from "../models/modelTopic";
import { Topic } from "../db";

// Создание топика
export async function createTopic({ title, description, id_author, date, views }: ITopic) {
    return Topic.create({ title, description, id_author, date, views });
}

// Обновление топика по id
export async function updateTopicById(id: string, topic: ITopic) {
    return Topic.update(topic, { where: { id } });
}

// Удаление топика по id
export async function deleteTopicById(id: string) {
    return Topic.destroy({ where: { id } });
}

// Получение топика по id
export async function getTopicById(id: string) {
    return Topic.findOne({ where: { id } });
}

// Получение всех топиков
export async function getAllTopic() {
    return Topic.findAll();
};
