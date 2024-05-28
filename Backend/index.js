import express from "express"
import dotenv from "dotenv"
const app = express()
import mongoose from "mongoose"
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'

app.use(cors())
app.use(express.json())
dotenv.config()

const PORT=process.env.PORT||4000

const URI=process.env.MongoDBURI

try {
    mongoose.connect(URI)
    console.log("Connected to mongodb")
} catch (error) {
    console.log("Error: ",error)
}

app.use('/book',bookRoute);
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})