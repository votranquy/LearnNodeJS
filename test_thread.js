const crypto =require('crypto');

const arr = new Array(200).fill('something');
function processChunk(){
  if(arr.length === 0){
    //code that runs after the whole array is executed
  }
  else{
    console.log('processing chunk');
    //get 10 items and remove them from the Array
    const subarr = arr.splice(0, 10);
    for(const item of subarr){
      //Do heavy stuff for each item on the Array
      doHeavyStuff(item);
    }
    //Put the function back in the queue
    setImmediate(processChunk);
  }
}

processChunk()

function doHeavyStuff(item){
  crypto.createHmac('sha256', 'secret').update(new Array(1000).fill(item).join('.')).digest('hex');
}

//This is just for confirming that we can continue
//doing things

let interval = setInterval(() => {
  console.log('tick!');
  if(arr.length === 0) clearInterval(interval);
}, 0);
