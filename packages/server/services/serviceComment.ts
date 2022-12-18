import { Comment } from "../db";
import type { IComment } from "../models/modelComment";

// Создание комментария к топику
export async function createComment({ id_topic, text, id_author, date, likes }: IComment) {
    return Comment.create({ id_topic, text, id_author, date, likes });
}

// Обновление комментария по id
export async function updateCommentById(id: string, comment: IComment) {
    return Comment.update(comment, { where: { id } });
}

// Удаление комментария по id
export async function deleteCommentById(id: string) {
    return Comment.destroy({ where: { id } });
}

// Получение топика по id
export async function getCommentById(id: string) {
    return Comment.findOne({ where: { id } });
}

// Получение всех топиков
export async function getAllComments() {
    return Comment.findAll();
};
