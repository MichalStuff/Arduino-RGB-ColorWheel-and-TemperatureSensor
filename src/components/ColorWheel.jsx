import React, {createRef, useState} from 'react';
import { colors } from '../modules/Colors';

 
export default function ColorWheel({setColor, color}) {

    const containerRef = createRef();
    const [status,setStatus] = useState(false);



    const handleTriangles = (e)=>{
        const mouseX = (e.pageX - containerRef.current.offsetLeft) - (containerRef.current.offsetWidth / 2) + 1;
        const mouseY = ((e.pageY - containerRef.current.offsetTop) -  (containerRef.current.offsetHeight / 2) + 1) * -1;
        let currentColor;   
        if(currentColor !== checkMousePosition(mouseX,mouseY)){
            currentColor = checkMousePosition(mouseX,mouseY);
            setColor(currentColor);
        }
    }
    const checkMousePosition = (mouseX, mouseY)=>{
        let d = (Math.sqrt(Math.pow(mouseX - 0,2) +Math.pow(mouseY - 0,2)));
        let alfa = mouseX / d;
        if(mouseY>0 && d>100 && status !==false){
            if(alfa>=0 && alfa<0.5){
                return colors.red;
            }else if(alfa>=0.5 && alfa<0.866){
                return colors.rose;
            }else if(alfa>=0.866 && alfa<1){
                return colors.magenta;
            }else if(alfa>=-1 && alfa<-0.866){
                return colors.chartreuse;
            }else if(alfa>=-0.866 && alfa<-0.5){
                return colors.yellow;
            }else if(alfa>=-0.5 && alfa<0){
                return colors.orange;
            }
        }else if(mouseY<0 && d>100 && status !==false){
            if(alfa>=0 && alfa<0.5){
                return colors.azure;
            }else if(alfa>=0.5 && alfa<0.866){
                return colors.blue;
            }else if(alfa>=0.866 && alfa<1){
                return colors.violet;
            }else if(alfa>=-1 && alfa<-0.866){
                return colors.green;
            }else if(alfa>=-0.866 && alfa<-0.5){
                return colors.spring_green;
            }else if(alfa>=-0.5 && alfa<0){
                return colors.cyan;
            }
        }else if(mouseY<0 && d<=100){
            if(!status){
                return colors.white;
            }else
            return colors.off;
        }
        
    }
    const handleStatus = ()=>{
        setStatus(prev => !prev);

    }

  return (
<div className='RGB'  onClick={handleTriangles} ref={containerRef}>
  <div className='RGB__Triangle RGB__Triangle--red' ></div>
  <div className='RGB__Triangle RGB__Triangle--rose' ></div>
  <div className='RGB__Triangle RGB__Triangle--magenta'></div>
  <div className='RGB__Triangle RGB__Triangle--violet' ></div>
  <div className='RGB__Triangle RGB__Triangle--blue' ></div>
  <div className='RGB__Triangle RGB__Triangle--azure' ></div>
  <div className='RGB__Triangle RGB__Triangle--cyan' ></div>
  <div className='RGB__Triangle RGB__Triangle--spring_green' ></div>
  <div className='RGB__Triangle RGB__Triangle--green' ></div>
  <div className='RGB__Triangle RGB__Triangle--chartreuse' ></div>
  <div className='RGB__Triangle RGB__Triangle--yellow' ></div>
  <div className='RGB__Triangle RGB__Triangle--orange' ></div>
  <div className="RGB__Wheel" >
      <div className="RGB__Wheel__Actual " style={{backgroundColor : `rgb(${color.R},${color.G},${color.B})`}}></div>
      <div className="RGB__Wheel__Status" onClick={handleStatus} style = {status?{backgroundColor :'white'}:{backgroundColor :'black'}}>
      {status? <p className='RGB__Wheel__Status--OFF'>OFF</p> : <p className='RGB__Wheel__Status--ON'>ON</p>}
      </div>
  </div>
</div>
  )
}

//TODO
 // ! Ważne zrobić trójkąt w trójkiącie jako obramowanie (użć ::after lub ::before)