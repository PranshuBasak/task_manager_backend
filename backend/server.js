const dotenv = require("dotenv").config(); //This will give access to .env file for server.js
const express = require("express");
const connectDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoutes")
const cors = require("cors")

const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors()); //This will allow to receive url request from everly url
app.use("/api/tasks",taskRoutes);
// app.use(cors({
//     origin: ["http://localhost:3000/","https://taskmanager-4jat.onrender.com/"] //use to specify a specific url path to receive request
// }))

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
