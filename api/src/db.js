const {Sequelize, DataTypes} = require("sequelize");
require(`dotenv`).config()

const UserModels = require("./models/UsersModels");
const PostsModels = require("./models/PostsModels");

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false}
);
//Definicion de modelos
UserModels(sequelize);
PostsModels(sequelize);

//Relaciones
const {User, Post} = sequelize.models;

User.hasMany(Post);

Post.belongsTo(User)


module.exports={
    ...sequelize.models,
    conn: sequelize
}