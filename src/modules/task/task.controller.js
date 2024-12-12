import { Task } from "../../../database/models/task.model.js"
import taskValidation from "./task.validation.js"


const addTask = async (req, res) => {
    const {error} = taskValidation.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }

    try {
    let task = new Task(req.body)
    await task.save()
    res.send({message: "Task added successfully"})
    }
    catch (error) {
        res.status(400).send({message: error.message})
    }
}

const getAllTasks = async (req, res) => {
    // pagination
    let page = req.query.page
    const limit = 5
    try {
    let tasks = await Task.find({user: req.userId}).skip((page - 1) * limit).limit(limit)
    res.send(tasks)
    }
    catch (error) {
        res.status(400).send({message: error.message})    
    }
}

const updateTask = async (req, res) => {
    const {error} = taskValidation.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }

    try {
    let task = await Task.findById(req.params.id)
    if (task.user.toString() !== req.userId) {
        return res.status(400).send({message: "You can't update this task"})
    }
    task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(task)
    }
    catch (error) {
        res.status(400).send({message: error.message})
    }
}

const deleteTask = async (req, res) => {
    try {
    let task = await Task.findById(req.params.id)
    if (task.user.toString() !== req.userId) {
        return res.status(400).send({message: "You can't delete this task"})    
    }
    await Task.findByIdAndDelete(req.params.id)    
    res.send({message: "Task deleted successfully"})
    }
    catch (error) {
        res.status(400).send({message: error.message})
    }
}

const updateStatus = async (req, res) => {
    try {
    let task = await Task.findById(req.params.id)
    if (task.user.toString() !== req.userId) {
        return res.status(400).send({message: "You can't update this task"})    
    }
    task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(task)
    }
    catch (error) {
        res.status(400).send({message: error.message})
    }
}

export {
    addTask,
    getAllTasks,
    updateTask,
    deleteTask,
    updateStatus
}