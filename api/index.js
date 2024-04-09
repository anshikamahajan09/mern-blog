import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('MongoDb is connected');
})
.catch((err)=>{
    console.log('Error connecting database',err);
});

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000,()=>{
    console.log('App running on port 3000');
})

app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
})