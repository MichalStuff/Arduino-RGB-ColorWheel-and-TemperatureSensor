# This is short guide how to use this app

## Step 1

Download or clone this repo
\*\* git clone https://github.com/MichalStuff/Arduino-RGB-ColorWheel-and-TemperatureSensor.git

## Step 2

Download npm package for this project with this command :
** npm install
Somethimes there is the problem with downloading Nodemon package, to fix this you need to type this command :
** npm instal nodemon

## Step 3

Open and upload arduino project to your arduino board, You can find it in Arduino folder, with the picture of wiring.

## Step 4

To proper work you neet to edit couple things

### In Server.js :

line 4 : const PORT = 4000; //CHANGE THIS VALUE TO PORT THAT IS FREE OR LEAVE IT
line 5 : const COM_PORT = "COM3"; // CHANGE THIS VALUE TO PORT THAT YOUR ARDUINO IS CONNECTED
line 6 : const BAUD_RATE = 9600; // CHANGE THIS VALUE TO BAUD_RATE OF YOUR ARDUINO

### In context folder socket.jsx :

const IP = "YOUR IP ADRESS"// To connect with local server you need to change ip to your PC ip
const PORT = "4000" // To connect with local server you need to change port to the same that you changed in Server.js or leave it

## Step 5

Open terminal an type :
**npm run start:back
Next open new terminal and type :
**npm run start:front

## Now it should open in browser, if it's not. Search informations in the terminal.

### it should look like this :

Compiled successfully!

You can now view socket in the browser.

Compiled successfully!

You can now view socket in the browser.

Local: http://localhost:3000/
On Your Network: http://XXX.XXX.X.XXX:3000/

## You can also open this app in your mobile device or tablet connected to the wifi using your local server device ip address

On Your Network: http://XXX.XXX.X.XXX:3000/
