import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
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

// API router // check folder routes and controllers
app.use("/api/user" , userRoutes);

