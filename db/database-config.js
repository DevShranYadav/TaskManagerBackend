const { Sequelize } = require('sequelize');
require('dotenv').config();
const PASSWORD=process.env.PASSWORD;


const sequelize = new Sequelize('tasks', 'root', PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
  })

  module.exports=sequelize;