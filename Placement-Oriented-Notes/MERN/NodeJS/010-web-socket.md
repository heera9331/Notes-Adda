
# Web socket

WebSocket is a computer communications protocol, providing a simultaneous two-way communication channel over a single Transmission Control Protocol connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011

- It support two way communication
- Bidirectional communication protocol
- 

## Socket.io

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

https://socket.io/docs/v4/


```js
 
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  console.log("GET request");
  return res.json({ msg: "Working" });
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("a user connected > ", socket);

  io.emit("eventName", "data to be send which has type any[]");

  /**
   * no frontend
   * io.on("eventName", (data)=>{
   *    data => received from server
   * })
   */

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, (error) => {
  if (!error) {
    console.log("server started at port http://localhost:3000/");
  } else {
    console.log("getting error", error);
  }
});

```
