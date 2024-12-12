import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        min: 3,
        max: 30,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['todo', 'completed'],
        default: 'todo',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export const Task = mongoose.model('Task', taskSchema)