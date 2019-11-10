var arr = [
  {
    'a': '2',
    'b': '3'
  },
  {
    'a': '1',
    'b': '3'
  },
  {
    'a': '1',
    'b': '1'
  },
  {
    'a': '2',
    'b': '1'
  },
  {
    'a': '2',
    'b': '2'
  },
  {
    'a': '2',
    'b': '3'
  },
  {
    'a': '1',
    'b': '2'
  },
  {
    'a': '2',
    'b': '2'
  },
  {
    'a': '1',
    'b': '1'
  }
];
// arr.push(49 ,  38 ,  65 ,  97 ,  76 ,  13 ,  27 ,  78 ,  34 ,  12 ,  64 ,  5 ,  4 ,  62 ,  99 ,  98 ,  54 ,  56 ,  17 ,  18 ,  23 ,  34 ,  15 ,  35 ,  25 ,  53 ,  51);
var temp = null;
for( var i = 0; i < arr.length -1 ; i++){
  for(var j = 0; j < arr.length - 1; j++){
    // if( arr[j].a >= arr[j+1].a ){
      if( arr[j].a > arr[j+1].a ){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      if( arr[j].a == arr[j+1].a ){
        if(arr[j].b > arr[j+1].b){
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    // }
  }
}
console.log(arr);
