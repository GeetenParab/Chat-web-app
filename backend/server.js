import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
//to parse incoming requests with JSON payload from req.body; .
app.use(cookieParser());
///
import authRoutes from "./Routes/auth.routes.js"
import userRoutes from "./Routes/users.routes.js"
import MessageRoutes from "./Routes/message.routes.js";
import connectToMongoDb from "./Db/ConnectTomongoDb.js";


app.use("/api/auth",authRoutes);
app.use("/api/messages",MessageRoutes);
app.use("/api/users",userRoutes);



// app.get("/",(req,res)=>{
//     res.send("hello world!!");
// })

server.listen(5000,()=>{
    connectToMongoDb();
    console.log(`server is running on port ${PORT}`)
});