import mongoose from "mongoose";

const userSchema = new moongoose.Schema ({
    username: {
        type: String ,
        required: true,
        unique: true
    },
    email: {
        type: String ,
        required: true,
        unique: true
    },
    password: {
        type: String ,
        required: true,
    }
}, {timestamps: true});

// Create model 
const User = moongoose.model('User' , userSchema);

export default User;