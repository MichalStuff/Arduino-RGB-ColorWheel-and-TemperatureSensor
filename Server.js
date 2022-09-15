const app = require('express');
const http = require('http').createServer(app);

const PORT = 4000; //CHANGE THIS VALUE TO PORT THAT IS FREE or leave it
const COM_PORT = "COM3"; // CHANGE THIS VALUE TO PORT THAT YOUR ARDUINO IS CONNECTED
const BAUD_RATE = 9600; // CHANGE THIS VALUE TO BAUD_RATE OF YOUR ARDUINO;

http.listen(PORT, () => {
    console.log('listening on port 4000');
});

const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('message', msg => {
        port.write(msg);
        socket.emit('color', msg);
    });

});

const SerialPort = require('serialport');

const {
    TextDecoder
} = require('util');


let port = undefined;

port = SerialPort(COM_PORT, {
    baudRate: BAUD_RATE
});

port.on('open', () => {
    console.log('serial port open');
    io.emit('arduino_connected', true);
});

port.on('readable', function () {
    const decoder = new TextDecoder();
    let msg = port.read();
    msg = decoder.decode(msg);
    console.log(msg);
    if (msg.includes("T")) {
        io.emit('tempAndHum', msg);
        console.log('yo')
    } else {
        io.emit('responce', msg);
    }

});