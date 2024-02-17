const express=require('express');
const GetTask=require('../Controller/task-controller/get-task-controoler');
const PostTask = require('../Controller/task-controller/post-task-controller');
const UpdateTask = require('../Controller/task-controller/update-task-controller');
const DeleteTask = require('../Controller/task-controller/delete-task-controller');
const GetTaskById=require('../Controller/task-controller/get-task-by-id-controller')


const router=express();

router.get('/',GetTask)
router.get('/:id',GetTaskById)
router.post('/post',PostTask)
router.put('/update/:id',UpdateTask)
router.delete('/delete/:id',DeleteTask)




module.exports=router;