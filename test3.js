var response = {
    "paymentList" : [
      {
      "acctNo": "2",
      "srvNo": "002",
      "tranxId": "Writeoff Payment"
      },
      {
      "acctNo": "1",
      "srvNo": "002",
      "tranxId": "(DO NOT USE)IPS - Payment via MIT"
      },
      {
      "acctNo": "3",
      "srvNo": "001",
      "tranxId": "(DO NOT USE)IPS - Payment via CAD"
      }
  ]};


var temp = null;
var arr = response.paymentList;
for( var i = 0; i < arr.length -1 ; i++){
  for(var j = 0; j < arr.length - 1; j++){
      if( parseInt(arr[j].srvNo) > parseInt(arr[j+1].srvNo) ){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
      if( parseInt(arr[j].srvNo) == parseInt(arr[j+1].srvNo) ){
        if( parseInt(arr[j].acctNo) > parseInt(arr[j+1].acctNo) ){
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
  }
}
console.log(arr);
