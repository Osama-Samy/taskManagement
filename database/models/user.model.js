import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    confirmEmail: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        min: 6,
        required: true
    }
}, {timestamps: true, versionKey: false})

userSchema.pre('save', function () {
    this.password = bcrypt.hashSync(this.password, 10)
})

export const User = mongoose.model('User', userSchema)