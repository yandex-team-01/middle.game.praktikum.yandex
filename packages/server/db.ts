import { commentModel } from './models/modelComment';
import { topicModel } from './models/modelTopic';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
// import { createTopic } from './services/topicService';
// import { getTopicById } from './services/topicService';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env;

const sequelizeOptions: SequelizeOptions = {
  host: 'postgresql',
  port: parseInt(POSTGRES_PORT || ''),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

// тут можно задефайнить нужные модели
export const Topic = sequelize.define('Topic', topicModel, {});
export const Comment = sequelize.define('Comment', commentModel, {});

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
