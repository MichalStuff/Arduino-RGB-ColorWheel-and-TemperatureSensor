import React from 'react';
import io from "socket.io-client"; 

const IP = "YOUR IP ADRESS"// To connect with local server you need to change ip to your PC ip
const PORT = "4000" // To connect with local server you need to change port to the same that you changed in Server.js or leave it

export const socket = io(`${IP}:${PORT}`, { transports: ['websocket'] });
export const SocketContext = React.createContext();