import { topicModel } from './models/modelTopic';
import { ModelCtor, Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Repository } from './types/Repository';
import { commentModel } from './models/modelComment';
import { reactionModel } from './models/modelReaction';
import { topicUser } from './models/userModel';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env;

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
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
export const Reaction = sequelize.define('Reaction', reactionModel, {});

Comment.hasMany(Reaction, { foreignKey: 'id_comment' });
Reaction.belongsTo(Comment, { foreignKey: 'id' });

export const topicRepos = new Repository(Topic as ModelCtor);
export const commentRepos = new Repository(Comment as ModelCtor);
export const reactionRepos = new Repository(Reaction as ModelCtor);
export const User = sequelize.define('User', topicUser, {});
export const userRepos = new Repository(User as ModelCtor);

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
