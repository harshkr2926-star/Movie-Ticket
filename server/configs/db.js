import dns from "dns";

dns.setServers(["8.8.8.8"]);
import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
        mongoose.connection.on('connected',()=> console.log('Database Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/showtime`)
    }catch(error){
        console.log(error.message);
    }
}

export default connectDB;