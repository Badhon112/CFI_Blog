import mongoose from "mongoose";
const Connection=async(username,password)=>{
    const url=`mongodb+srv://${username}:${password}@blog.pkj7jyr.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url,{autoIndex:true})
        console.log("Database Connection Succefull");
    } catch (error) {
        console.log("Error While connection with the database");
    }
}
export default Connection;