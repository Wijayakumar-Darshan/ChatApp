import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// 🔒 Allow Vercel & Localhost frontend
const io = new Server(server, {
	cors: {
		origin: [
			"https://your-frontend.vercel.app", // ✅ Replace with your deployed Vercel app
			"http://localhost:3000"             // ✅ Local dev support
		],
		methods: ["GET", "POST"],
		credentials: true,
	},
});

const userSocketMap = {}; // userId: socket.id

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
	console.log("✅ User connected:", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId && userId !== "undefined") {
		userSocketMap[userId] = socket.id;
	}

	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	socket.on("disconnect", () => {
		console.log("❌ User disconnected:", socket.id);

		// Remove user by matching socket.id
		for (const key in userSocketMap) {
			if (userSocketMap[key] === socket.id) {
				delete userSocketMap[key];
				break;
			}
		}

		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };
