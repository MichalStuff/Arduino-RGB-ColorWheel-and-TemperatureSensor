import React, {useState, useEffect, useContext} from 'react';
import ColorWheel from './ColorWheel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import TempAndHum from './TempAndHum';
import { SocketContext } from '../context/socket';


// import io from "socket.io-client";
// const socket = io.connect("192.168.2.102:4000");
 
// socket.on()
 
export default function Arduino() { 
    
    const socket = useContext(SocketContext);

    const [color,setColor] = useState({R:0,G:0,B:0});
    const [tempAndHum, setTempAndHum] = useState({tempetature : 0, humidity : 0})
    const [menu, setMenu] = useState({option1:false,option2:false});
    const [chartData, setChartData] = useState({temperature : [], humidity: []});

    useEffect(()=>{
        socket.on('tempAndHum',value=>{
                    setTempAndHum({tempetature:`${value.slice(2,value.indexOf('H:')-1)}`,humidity:`${value.slice(value.indexOf('H:')+2)}`});
                });
        return () => socket.disconnect();  
    },[socket]);

    useEffect(()=>{
            let msg = `${color.R}:${color.G}:${color.B}\n`;
            socket.emit('message',msg); 
    },[color]);

    
    const handleOption1 = ()=>{
        setMenu({option1 : !menu.option1,
        option2 : menu.option2});
    }
    const handleOption2 = ()=>{
        setMenu({option1 : menu.option1,
            option2 : !menu.option2});
    } 

  return (
      <div className="Arduino">  
        <div className='Menu'>
            <li className='Menu__option'>
                <div className='Menu__option__header' onClick={handleOption1}>
                    <p className='Menu__option__text'>RGB COLOR WHEEL</p>
                    <FontAwesomeIcon className='Menu__option__icon' icon={menu.option1? faAngleUp : faAngleDown } />
                </div>
                {menu.option1? <ColorWheel color={color} setColor={setColor}/> : null}
                <div className='Menu__option__header' onClick={handleOption2}>
                    <p className='Menu__option__text'>Temperature and Humidity</p>
                    <FontAwesomeIcon className='Menu__option__icon' icon={menu.option2? faAngleUp : faAngleDown } />
                </div>
                {menu.option2? <TempAndHum  tempAndHum = {tempAndHum} /> : null}
            </li>
        </div>
        
      </div>
  )
}
 