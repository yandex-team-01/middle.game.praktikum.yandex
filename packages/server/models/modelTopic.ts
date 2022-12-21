import { Repository } from '../types/Repository';
import { DataType, Model, ModelType } from 'sequelize-typescript';
import { sequelize } from '../db';

// export interface ITopic {
//   id?: string;
//   title: string;
//   description: string;
//   id_author: string;
//   date: string;
//   views: number;
// }

export class Topic extends Model { }

Topic.init({
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataType.STRING,
    allowNull: false
  },
  description: {
    type: DataType.STRING,
    allowNull: false
  },
  id_author: {
    type: DataType.STRING,
    allowNull: false
  },
  date: {
    type: DataType.STRING,
    allowNull: false
  },
  views: {
    type: DataType.INTEGER,
  }
}, { sequelize });


//@ts-ignore
export type TypeTopic = ModelType<Topic>; //пытаюсь вытащить тип из модели, но это не работает

export const topicRepos = new Repository(Topic);
