const socket= io("http://localhost:3333",{
    setTimeout: 5000
});

socket.on("connect").then((result) => {
    
}).catch((err) => {
    
});

socket.on("connect_error", (err) => {
    // The err object will contain details about the failure
    console.log(`❌ Connection failed due to: ${err.message}`);
});
socket.on("message",(msg)=>{
    console.log(msg);
    socket.emit("clientMessage", { "message": "Hello from Thiru", "id": 9987 });
});