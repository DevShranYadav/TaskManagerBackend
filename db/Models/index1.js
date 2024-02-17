// const dbConfig=require('../database-config');
// const { Sequelize,DataTypes } = require('sequelize');

// const sequelize = new Sequelize(
//     dbConfig.DB,
//     dbConfig.USER,
//     dbConfig.PASSWORD,
//     {
//         host:dbConfig.HOST,
//         dialect:dbConfig.dialect,
//         operatorsAliases:false,
//         pool:{
//             max:dbConfig.pool.max,
//             min:dbConfig.pool.min,
//             acquire:dbConfig.pool.acquire
//         }
//     }  
    
// );

// async ()=>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }


// const db={};

// db.Sequelize=Sequelize;
// db.sequelize=sequelize;

// db.tasks=require('./task')(sequelize,DataTypes);

// db.sequelize.sync({force:false}).then(()=>{
//     console.log('yes re-sync is done!')
// })

// module.exports=db;

