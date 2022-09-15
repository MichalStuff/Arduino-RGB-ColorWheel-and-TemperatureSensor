#include <Servo.h>
#include <DHT.h>


DHT dht11(8,DHT11);

String incomingString;
int temp = 0;
int hum = 0;

void setup() {
  Serial.begin(9600);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  pinMode(11,OUTPUT);
  dht11.begin();
}

void loop() {
    DHT_sensor();
  if (Serial.available() > 0) {
//    // read the incoming byte:
    incomingString = Serial.readString();
    LED_Colors(incomingString);
    
   
  } 

}

void LED_Colors(String rgb){
  int red = rgb.substring(0,rgb.indexOf(':')).toInt();
  rgb = rgb.substring(rgb.indexOf(':')+1);
  int green = rgb.substring(0,rgb.indexOf(':')).toInt();
  rgb = rgb.substring(rgb.indexOf(':')+1);
  int blue = rgb.toInt();
  analogWrite(9,blue);
  analogWrite(10,green);
  analogWrite(11,red);
//  Serial.print('color');
}

void DHT_sensor(){
    int h = dht11.readHumidity();
    int t = dht11.readTemperature();
    delay(500);
    if(temp != t || hum != h){
      temp = t;
      hum = h;
      Serial.print("T:");
      Serial.print(t);
      Serial.print(" H:");
      Serial.print(h);
    }
   
