import { Router } from "express"
import { signup, login, verifyEmail } from "./user.controller.js"

const userRouter = Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.get('/verifyEmail/:token', verifyEmail)

export default userRouter