const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// extend grocery class to the whole model
class GroceryItems extends Model {}

GroceryItems.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        list_id: {
            type: DataTypes.INTEGER
        },
        groceryitem: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        department:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'grocery'
     }
)