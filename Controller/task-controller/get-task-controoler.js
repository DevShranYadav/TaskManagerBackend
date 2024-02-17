const task=require('../../db/Models/task');

const GetTask=async(req,res)=>{    
    const getTask= await task.findAll();
    res.status(201).send(getTask)
    
}

module.exports=GetTask;