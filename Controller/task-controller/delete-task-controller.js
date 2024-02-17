const Task = require('../../db/Models/task');

const DeleteTask = async (req, res) => {
    Task.findOne({ where: { id: req.params.id } })
    .then((data) => {
        if (data) {
            Task.destroy({ where: { id: req.params.id } })
                .then((data) => {
                    res.status(200).send("Task is deleted successfully!")
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

module.exports = DeleteTask;