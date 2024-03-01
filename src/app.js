import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

//it is used for the port issue
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
    
}))


// it is used to limit the json size 
app.use(express.json({
    limit:  "16kb"
}))
// it is used for the url ( space issues)
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// it is used for files store in public folder
app.use(express.static("public"))


// add cookie in the browser
app.use(cookieParser())


export default express;