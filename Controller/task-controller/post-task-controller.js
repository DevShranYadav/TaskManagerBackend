const Task=require('../../db/Models/task');

const PostTask=async(req,res)=>{
    let info={
        id:req.body.id,
        title:req.body.title,
        description:req.body.description,
        complete:req.body.complete
    }
    const task= await Task.build(info);
    task.save()
    res.status(201).send("Task is added");
    console.log(task)

}

module.exports=PostTask;