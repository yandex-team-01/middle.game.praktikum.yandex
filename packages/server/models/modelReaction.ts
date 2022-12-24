import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

export interface IReaction {
  id?: string;
  id_comment: string;
  id_author: string;
  value: string;
}

export const reactionModel: ModelAttributes<Model, IReaction> = {
  id: {
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  id_comment: {
    type: DataType.STRING,
    allowNull: false,
  },
  id_author: {
    type: DataType.STRING,
  },
  value: {
    type: DataType.STRING,
  },
};
