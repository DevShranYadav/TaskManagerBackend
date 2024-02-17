const task=require('../../db/Models/task');

const GetTaskById=async(req,res)=>{ 
    const taskId=req.params.id;
    const {completed}=req.body   
    const getTask= await task.findOne({where:{id:taskId}});
    res.status(201).send(getTask)
    
}

module.exports=GetTaskById;