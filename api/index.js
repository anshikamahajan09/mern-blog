import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('MongoDb is connected');
})
.catch((err)=>{
    console.log('Error connecting database',err);
});

const app = express();

app.listen(3000,()=>{
    console.log('App running on port 3000');
})