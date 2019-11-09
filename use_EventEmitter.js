//import Module
var events = require('events');

//create an EventEmitter object
var eventEmitter = new events.EventEmitter();

//A Listener
var bellRingHandler1 = function bellRingHandler1(who){
  console.log("\n");
  console.log("The bell ringing (1)\n");
  console.log(who + " was standing behind the door!!!");
  if(who == 'Jerry'){
    console.log("Tom, help me!!!");
    return;
  }
  console.log("Welcome " + who);
}

//A Listener
var bellRingHandler2 = function bellRingHandler2(who){
  console.log("\n");
  console.log("The bell ringing (2)\n");
  eventEmitter.emit("nobodyIsAtHome");
}

//A listener
var nobodyIsAtHomeHandler = function nobodyIsAtHomeHandler(){
  console.log("\n");
  console.log("Sorry, Nobody is at home now, Please leave your message!\n");
}

//add event listener
eventEmitter.addListener('bellRing', bellRingHandler1);
eventEmitter.addListener('bellRing', bellRingHandler2);
eventEmitter.addListener('nobodyIsAtHome', nobodyIsAtHomeHandler);

//Fire bellRing event
eventEmitter.emit('bellRing', 'Jerry');
eventEmitter.emit('nobodyIsAtHome');
