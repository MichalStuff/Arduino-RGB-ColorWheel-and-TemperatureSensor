import React from 'react';
import Arduino from './components/Arduino';
import {socket, SocketContext} from './context/socket';
function App() {

  return (
     
    <div className="App">
      <SocketContext.Provider value={socket}>
        <div>
          <Arduino/>
        </div>  
        {console.log(socket)}
      </SocketContext.Provider>

    </div>
  );
}

export default App;
