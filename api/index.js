import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

// connect mongodb 
mongoose.connect(process.env.MONGO)
.then( () => {
    console.log('Connected to MongoDB');
})
.catch( (err) => {
    console.log(err)
});




app.listen(port, () => {
    console.log(`Server now runnning on port ${port}`)
});