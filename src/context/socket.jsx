import React from 'react';
import io from "socket.io-client"; 

export const socket = io("192.168.2.102:4000", { transports: ['websocket'] });
export const SocketContext = React.createContext();