import express from "express"
import { User } from "../../../database/models/user.model.js"
import userValidation from "./user.validation.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../../middleware/sendEmail.js"
import dotenv from "dotenv"
dotenv.config()


const signup = async (req, res) => {

    const {error} = userValidation.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    } else {
        
    try {
        let user = new User(req.body)
        
        // check if email already exists
        const emailExist = await User.findOne({email: req.body.email})
        if (emailExist) {
            return res.status(400).send({message: "Email already exists"})
        }

        sendEmail(req.body.email)
        await user.save()
        res.send({message: "User created"})
        }
        catch (error) {
            res.status(400).send({message: error.message})
        }
    }

}


const login = async (req, res) => {

    try {
        let user = await User.findOne({email: req.body.email})
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(400).send({ message: "Wrong password" })
        }

        jwt.sign({userId: user._id, username: user.username}, "process.env.KEY", (err, token) => {
            res.json({message: "Login successful", token})
        })
    }

    catch (error) {
        res.status(400).send({message: error.message})
    }
}

const verifyEmail = async (req, res) => {
    try{
    jwt.verify(req.params.token, "process.env.KEY", async (err, decoded) => {
        await User.findOneAndUpdate({email: decoded.email}, {confirmEmail: true})
        res.send({message: "Email verified successfully"})
        })
    }
    catch (error) {
        res.status(400).send({message: error.message})
    }
    
}

export {
    signup,
    login,
    verifyEmail
}