import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTemperature2, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2'

export default function TempAndHum({tempAndHum}) {

  const [data,setData] = useState({tempetature : [], humidity : [], time : []});
  const [average,setAverage] = useState({tempetature : [], humidity : [],time : []});

  useEffect(()=>{
    let date = new Date();
      let updatedValues = {tempetature : data.tempetature, humidity : data.humidity, time : data.time};
      if(updatedValues.time[updatedValues.time.length-1] !== `${date.getHours()}:${date.getMinutes()}`){
        updatedValues.tempetature.push(tempAndHum.tempetature);
        updatedValues.humidity.push(tempAndHum.humidity);
        date.getMinutes()>=10? updatedValues.time.push(`${date.getHours()}:${date.getMinutes()}`) : updatedValues.time.push(`${date.getHours()}:${'0'+date.getMinutes()}`);
        setData(prev=>{
          return {...prev, ...updatedValues}
        })
      }else{
        updatedValues.humidity[updatedValues.humidity.length-1] = (tempAndHum.humidity); 
        updatedValues.tempetature[updatedValues.tempetature.length-1] = (tempAndHum.tempetature); 
        setData(prev=>{
          return {...prev, ...updatedValues}
        })
      }
  },[tempAndHum]);

  useEffect(()=>{
    if(data.tempetature.length >=15){
      console.log("NO WŁAŚNIE TAK");
      let updatedValues = {tempetature : data.tempetature, humidity : data.humidity, time : data.time};
      updatedValues.tempetature.shift();
      updatedValues.humidity.shift();
      updatedValues.time.shift();
      setData(prev=>{
        return {...prev, ...updatedValues}
      })
    }
  },[data]);

  return (
    <div className='TempAndHum'>
        <div className='TempAndHum__temp'>
          <FontAwesomeIcon className='TempAndHum__temp__icon' icon={faTemperature2 } />
          <p className='TempAndHum__temp__text'>Temperature : {`${tempAndHum.tempetature}°C`}</p>
        </div>
        <div className="TempAndHum__hum">
          <FontAwesomeIcon className='TempAndHum__hum__icon' icon={faDroplet } />
          <p className='TempAndHum__hum__text'>Humidity : {`${tempAndHum.humidity}%`}</p>
        </div>
        <Line
          datasetIdKey='id'
          data={{
            datasets: [{
              label: "temperature",
              data: data.tempetature,
              borderColor : '#ff0000'

            }],
            labels : data.time
            
          }}
        
        />
        <Line
          datasetIdKey='id'
          data={{
            datasets: [{
              label: "humidity",
              data: data.humidity,
              borderColor : '#0000ff'
 
            }],
            labels : data.time
            
          }}
        
        />
        
        
    </div>
  )
}
