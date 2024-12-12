import { Router } from "express"
import { verifyToken } from "../../middleware/verifyToken.js"
import { addTask, getAllTasks, updateTask, deleteTask, updateStatus } from "./task.controller.js"

const taskRouter = Router()

taskRouter.post('/add', verifyToken, addTask)

taskRouter.get('/all', verifyToken, getAllTasks)

taskRouter.put('/update/:id', verifyToken, updateTask)

taskRouter.delete('/delete/:id', verifyToken, deleteTask)

taskRouter.patch('/patch/:id', verifyToken, updateStatus)

export default taskRouter