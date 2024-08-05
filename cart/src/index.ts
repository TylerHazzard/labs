import express, { json } from "express"
import cors from "cors"
import cartRouter from "./routes/cart"

const app = express()
app.use(cors())
app.use(json())

app.use("/cart", cartRouter)

const PORT = 3000
app.listen(PORT, () =>
	console.log(`listening on port: ${PORT}`)
)