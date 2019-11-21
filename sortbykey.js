// const unordered = {
//     'b': 'foo',
//     'c': 'bar',
//     'a': 'baz'
//   };
async function isEmptyStr(str) {
    return (!str || 0 === str.length || str == undefined || str == null);
}

async function generateSignatureSSO(){
    const object = {
        "portalUserId": "AAD6B95C289916987CD7613CEE1805",
        "packId": 1001,
        "startDate":"2019-07-16T09:41:04.729Z",
        "endDate": "2019-08-16T09:41:04.729Z",
        "action": "START",
        "paymentSource": "IN_APP",
        "includeFreeTrial": true,
        "freeTrailDetails":{
            "startDate": "2019-07-16T09:41:04.729Z",
            "endDate": "2019-08-16T09:41:04.729Z",
        }
    };
    console.log("BEFORE SORT:\n");
    console.log(JSON.stringify(object,null,2));
    // → '{"b":"foo","c":"bar","a":"baz"}'
  
    let ordered = {};
    let str = '';

    Object.keys(object).sort().forEach(key => {
        if (typeof (object[key]) == 'object') {
            let temp = {};
            let obj = object[key];
            Object.keys(obj).sort().forEach(key => {
                temp[key] = obj[key];
            });
            ordered[key] = temp;
        } else {
            ordered[key] = object[key];
        }
    });
    console.log("FIRST SORT:\n");
    console.log(JSON.stringify(ordered,null,2));
    // → '{"a":"baz","b":"foo","c":"bar"}'
    //OK

    for (let key in ordered) {
        if (ordered[key] != null && !(await isEmptyStr(ordered[key].toString()))) {
            if (typeof (ordered[key]) == 'string' || typeof (ordered[key]) == 'number' || typeof (ordered[key]) == 'boolean') {
                str += ordered[key];
            }
            else {
                if (Array.isArray(ordered[key])) {
                    ordered[key].forEach(element => {
                        str += element;
                    })
                } 
                else {
                    let obj = ordered[key];
                    for (let prop in obj) {
                        str += obj[prop];
                    }
                }
            }
        }
    }

    console.log("SECOND SORT:\n");
    console.log(str);

}

generateSignatureSSO();