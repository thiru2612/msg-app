// const httpServer = require('http').createServer();

// const { Server } = require('socket.io');

// const socket=new Server(httpServer,{
//     cors:{
//         origin:"*"
//     }
// });

// socket.on("connection",(client)=>{

//     // console.log(client);
//     client.on("clientMessage",(res)=>{
//         console.log(res);
//     })

//     socket.emit("message","Hello from server");

// })

// httpServer.listen(3333,()=>{
//     console.log("Server is running");
// })

require('dotenv').config();
const httpServer = require('http').createServer();
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

connectDB();


const io = new Server(httpServer, {
    cors: { origin: "*" }
});

// Middleware to simulate a slow connection
io.use((socket, next) => {
    // This will delay every new connection by 10 seconds
    setTimeout(() => {
        next(); // next() allows the connection to proceed
    }, 1000); 
});

io.on("connection", (socket) => {
    console.log(`A client connected: ${socket.id}`);
    // This part will not be reached by the client that times out
});

httpServer.listen(3030, () => {
    console.log("🚀 Test server is running on port 3030");
});