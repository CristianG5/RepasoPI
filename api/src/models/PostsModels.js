const { DataTypes } = require("sequelize");

module.exports = (Sequelize) =>{
    Sequelize.define("Post",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        body:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    })
}