import { ConnectOptions } from "mongoose"
import express { json } from "express"
import mongoose { ConnectOptions } from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

// configs

dotenv.config()
const app = express()
app.use(cors())
app.use(json())

// routes

// mongoose stuff

const PORT = process.env.PORT || 6000
const MONGO_URL = process.env.MONGO_URL || ""

mongoose.set("strictQuery", false)
mongoose.connect(
    MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions
).then(() => {
    app.listen(PORT, () =>
         console.log(`connected to PORT ${PORT}`)
         )
}).catch(err => console.log(`${err} didn't work`))