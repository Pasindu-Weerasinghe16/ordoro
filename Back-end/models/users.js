import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: 'String',
    lastName : 'String',
    email : 'String',
    password : 'String',
    phoneNUmber : 'String',
    imageUrl : 'String',
});

export const User = mongoose.model("users" , UserSchema);


