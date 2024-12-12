import express from "express"
import userRouter from "./src/modules/user/user.routes.js"
import taskRouter from "./src/modules/task/task.routes.js"
import cors from "cors"
import { connectDB } from "./database/dbConn.js"
import dotenv from 'dotenv'
dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())

app.use("/user", userRouter)
app.use("/task", taskRouter)
app.get("/", (req, res) => {
    res.send("hello")
})

app.use("*", (req, res) => {
    res.send("Not Found")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running Successfully")
})
