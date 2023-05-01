import type { Server as HTTPServer } from "http";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Socket as NetSocket } from "net";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface SocketServer extends HTTPServer {
  io?:
    | Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
    | undefined;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

const io = (_: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (res.socket.server.io) {
    console.log("Socket is already running.");
  } else {
    console.log("Socket is initializing...");

    const io = new Server(res.socket.server as any, {
      cors: {
        origin: "*",
      },
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("input-change", (msg) => {
        socket.broadcast.emit("update-input", msg);
      });
    });
  }

  res.end();
};

export default io;
