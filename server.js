const dotenv = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/user")

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

// router
app.use("/users", userRouter)

// listen on port
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server is running on port", port)
})

// connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connect Mongodb success")
}).catch((error) => {
    console.log("Connect Mongodb fail", error)
})