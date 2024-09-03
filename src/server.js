import express from "express"
import 'dotenv/config'
import router from "./routes/index.route.js"

const application = express()
application.use(express.json())

const PORT = process.env.PORT

application.use("/api", router)

application.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
