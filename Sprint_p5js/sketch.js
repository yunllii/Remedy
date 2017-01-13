var serial;          // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1421';  // fill in your serial port name here
var inData =1; 
var closed;
var open;
var onlyOnce = false;
 
function setup() {
  serial = new p5.SerialPort();       // make a new instance of the serialport library                    // list the serial ports
  serial.open(portName);              // open a serial port
  serial.list(); 
  createCanvas(400, 300);
  closed = loadImage("assets/icon_closed.png"); 
  open = loadImage("assets/icon_open.png"); 
}


function draw() {

  inData = Number(serial.read());
  
  if (inData == -1) {
  	background(0);
  	onlyOnce =false;

  }
  
  else{
  	background(144);
  	
   if (onlyOnce == false){
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open( "GET", "http://api.icndb.com/jokes/random", false);
   xmlHttp.send( null );
   console.log(xmlHttp.responseText);
   
   	onlyOnce =true;
   }	


  }
  
  fill(255);
  text("sensor value: " + inData, 30, 30);
}
