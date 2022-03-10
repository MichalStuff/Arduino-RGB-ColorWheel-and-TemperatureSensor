import React from 'react';
// import { from } from 'serialport';
import Arduino from './components/Arduino';
import {socket, SocketContext} from './context/socket';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
function App() {

  return (
     
    <div className="App">
      {/* <Arduino socket={socket}/>
      <Arduino /> */}
      <SocketContext.Provider value={socket}>
        <div>
          <Arduino/>
        </div>
        
      </SocketContext.Provider>

    </div>
  );
}

export default App;
