import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    let {token} = req.headers
    jwt.verify(token, "secretKeyOsama", async (err, decoded) => {
        if (err) {
            return res.status(400).send({message: "invalid token"})
        }
        req.userId = decoded.userId
        next()
    })
    }