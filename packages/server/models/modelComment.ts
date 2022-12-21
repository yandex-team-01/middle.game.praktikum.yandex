import { Repository } from '../types/Repository';
import { DataType, Model } from 'sequelize-typescript';

import { sequelize } from '../db';

// раньше было так. Сначала интерфейс, а потом с его помощью и с ModelAttributes
// создавалась модель

// export interface IComment {
//   id?: string;
//   id_topic: string;
//   id_author: string;
//   text: string;
//   date: string;
//   likes: number;
// }

// export const commentModel: ModelAttributes<Model, IComment> = {
//   id: {
//     type: DataType.STRING,
//     defaultValue: DataType.UUIDV4,
//     allowNull: false,
//     primaryKey: true
//   },
//   id_topic: {
//     type: DataType.STRING,
//     allowNull: false
//   },
//   text: {
//     type: DataType.STRING,
//   },
//   id_author: {
//     type: DataType.STRING,
//   },
//   date: {
//     type: DataType.STRING,
//   },
//   likes: {
//     type: DataType.INTEGER,
//   }
// };


// как вытащить тип по модели?
export class Comment extends Model { }

Comment.init({
  id: {
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  id_topic: {
    type: DataType.STRING,
    allowNull: false
  },
  text: {
    type: DataType.STRING,
  },
  id_author: {
    type: DataType.STRING,
  },
  date: {
    type: DataType.STRING,
  },
  likes: {
    type: DataType.INTEGER,
  }
}, { sequelize });

export const commentRepos = new Repository(Comment);
