const mongoose = require("mongoose");

let instance = null
const connectDB = async () =>{
    if(instance){
        return instance;
    }
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        instance = connect
        console.log(`Database Connected`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;