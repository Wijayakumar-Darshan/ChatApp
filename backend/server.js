import dotenv from "dotenv";
dotenv.config();  // Load env vars ASAP

import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Serve static uploads folder for images (if you handle uploads)
import path from "path";
app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Start server and connect to DB
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
