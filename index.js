const express=require('express');
const Cors=require('cors');
require('dotenv').config();
const bodyParser=require('body-parser');
const sequelize=require('./db/database-config');
const task=require('./db/Models/task')


const router=require('./routes/router')


const app=express();

app.use(Cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));




sequelize.authenticate().then(()=>{
    console.log("Database connected successfully");
}).catch((error)=>{
    console.log("Error",error)
})


app.use(router);

const PORT= process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on post ${PORT}`)
})

