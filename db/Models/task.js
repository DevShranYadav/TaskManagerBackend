const { DataTypes } = require('sequelize');
const sequelize=require('../../db/database-config');

const task=sequelize.define('Task',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING
    },
    completed:{
        type:DataTypes.BOOLEAN,
    }
},{tableName:'task',timestamps:false});

module.exports=task;