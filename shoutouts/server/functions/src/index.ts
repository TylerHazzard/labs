import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import shoutoutsRouter from "./routes/shoutouts"

// CONFIG

const app = express()
app.use(cors())
app.use(express.json())

// PUBLIC ROUTES

app.use("/shoutouts", shoutoutsRouter)

// SECURED ROUTES

// EXPORT API

export const api = functions.https.onRequest(app)