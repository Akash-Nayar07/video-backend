import mongoose from "mongoose";
import { DB_NAME } from "./../constants.js";

const mongodb_url = "mongodb+srv://akash:akash1995@cluster0.2askaew.mongodb.net"

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${mongodb_url}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log( "url", process.env.MONGODB_URL);
    console.log("MONGO DB CONNECTION failed again", error,);
    process.exit(1);
  }
};

export default connectDB;