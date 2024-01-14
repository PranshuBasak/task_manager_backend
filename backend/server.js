const dotenv = require("dotenv").config(); //This will give access to .env file for server.js
const express = require("express");
const connectDB = require("./config/connectDB")


const app = express();
//Middleware
app.use(express.json());
// const logger = (req , res, next) =>{
//     console.log("Middleware");
//     console.log(req.method);
//     next();
// }

//Routes
app.get("/", (req, res) =>{
    if(req.url == "/"){
        res.send("Home Page");
    }
})

//Create Task
app.post("/api/tasks", async (req, res) =>{
    console.log(req.body);
    res.send("Task Created")
})

const PORT = process.env.PORT || 1000;
const startServer = async () =>{
    try {
        await connectDB();
        app.listen(PORT, () =>{
            console.log(`Server Running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
startServer();