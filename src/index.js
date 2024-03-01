import dotenv from "dotenv";
dotenv.config({ path: "./env" });
import {app} from './app.js'
import connectDB from "./db/index.js";

const port = process.env.port || 8000;
connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log("Server is running", port);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Connection Failed", error);
  });
