const app = require('express');
const http = require('http').createServer(app);

http.listen(4000, () => {
    console.log('listening on port 4000');
});

const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});

io.on('connection', socket => {
    socket.emit('cos', 'ej');
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



port = SerialPort('COM6', {
    baudRate: 9600
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