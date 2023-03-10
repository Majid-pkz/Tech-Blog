const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model { }

Post.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        date:{
            type: DataTypes.DATETIME,
            defaultValue: DataTypes.NOW
        },
        
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: TRUE,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;