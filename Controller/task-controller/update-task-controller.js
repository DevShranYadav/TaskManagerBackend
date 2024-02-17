const Task = require('../../db/Models/task');

const UpdateTask = async (req, res) => {

    Task.findOne({ where: { id: req.params.id } }).then((data) => {
        if (data) {

           const updateTask= Task.update({
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed
            }, { where: { id: req.params.id } })
                .then((data) => {
                    res.status(200).send("Task is updated successfully!")
                }).catch((error) => {
                    res.status(201).send("Failded to excute query!")
                })
        } else {
            res.status(404).send(" No data found!")
        }
    }).catch((error) => {
        res.status(201).send("Failded to excute query!")
    })

}

module.exports = UpdateTask;