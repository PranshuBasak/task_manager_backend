const Task = require("../model/taskModel");



const createTask = async (req, res) =>{
    try {
        // console.log(req.body);
        // res.send("Task Created")
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }

};

const getAllTask = async (req, res) =>{
    try {
        const task = await Task.find();
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
    }    
};

const getTask = async (req, res) =>{
    try {
        // console.log(req.params);
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json(`Task not found for id: ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

//Delete Task
const deleteTask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json(`Task not found for id: ${id}`);
        }
        res.status(200).send("Task Deleted");
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};
// Delete All Tasks
const deleteAllTasks = async (req, res) => {
    try {
        // Use Mongoose deleteMany to delete all tasks
        const result = await Task.deleteMany();

        if (result.deletedCount === 0) {
            return res.status(404).json("No tasks found to delete.");
        }

        res.status(200).json("All tasks deleted successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error.message });
    }
};
//Update Task/PUT
const updateTask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true}
        );
        if(!task){
            return res.status(404).json(`Task not found for id: ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

//Update Task/ PATCH
const updatePatchTask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true}
        );
        if(!task){
            return res.status(404).json(`Task not found for id: ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
};

module.exports = {
    createTask,
    getAllTask,
    getTask,
    deleteTask,
    updateTask,
    updatePatchTask,
    deleteAllTasks
}
