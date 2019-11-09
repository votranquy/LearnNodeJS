var evt = require("events");
var ee = new evt.EventEmitter();

var lsn1 = function CallA(){
  console.log("Call A");
};
var lsn2 = function CallB(){
  console.log("Call B");
  ee.emit('callc');
};
var lsn3 = function CallC(){
  console.log("Call C");
};

ee.addListener('call', lsn1);
ee.addListener('call', lsn2);
ee.addListener('callc', lsn3);
ee.emit('call');
