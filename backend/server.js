import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",         // local dev
      "https://your-frontend.vercel.app" // deployed frontend
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Setup your socket listeners
io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  // your event listeners...
});

export { app, server };
