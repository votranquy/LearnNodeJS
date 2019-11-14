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
]}
var resp = response;
var array = [];
array = resp.paymentList.map(
  e => ({"acctNo": e.acctNo})
);
console.log(array);

console.log(Array.isArray(array));
