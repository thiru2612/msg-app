const mongoose=require('mongoose');

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected Successfully");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

module.exports=connectDB;