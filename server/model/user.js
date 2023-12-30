import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
        
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const user= mongoose.model('user',userSchema)
export default user;