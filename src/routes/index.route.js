import { Router } from "express";
import sorveteRouter from "./sorvete.route.js"

const route = Router()

route.get("/", (req, res) => {
    res.send("Entrou no service desk")
})

route.use("/sorvete", sorveteRouter)

export default route