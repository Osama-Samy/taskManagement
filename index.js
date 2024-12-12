import express from "express"
import userRouter from "./src/modules/user/user.routes.js"
import taskRouter from "./src/modules/task/task.routes.js"

import { connectDB } from "./database/dbConn.js"


const app = express()

app.use(express.json())

app.use("/user", userRouter)
app.use("/task", taskRouter)

app.use("*", (req, res) => {
    res.send("Not Found")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running Successfully")
})