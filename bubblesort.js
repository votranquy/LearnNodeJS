var arr = [];
arr.push(49 ,  38 ,  65 ,  97 ,  76 ,  13 ,  27 ,  78 ,  34 ,  12 ,  64 ,  5 ,  4 ,  62 ,  99 ,  98 ,  54 ,  56 ,  17 ,  18 ,  23 ,  34 ,  15 ,  35 ,  25 ,  53 ,  51);
var temp = 0;
for( var i = 0; i < arr.length -1 ; i++){
  for(var j = 0; j < arr.length - 1; j++){
    if( arr[j] > arr[j+1] ){
      temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}
console.log(arr);
