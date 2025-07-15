import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import connectSocket from "../controllers/socketManager.js";
import userRoutes from "../routes/users.routes.js";

import cors from "cors";

const app = express();
const server = createServer(app);
const io = connectSocket(server);

app.set("port", (process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit:"40kb", extended: true}));

app.use("/api/v1/users", userRoutes);

const start = async() => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://debojitsaha2004:fYuYwzoFvCRSVaSA@cluster0.e9t0w4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected DB..");
    server.listen(app.get("port"), () => {
        console.log("Listening to port 8080")
    });
}

start();