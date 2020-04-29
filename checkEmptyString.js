//Check empty string
async function isEmptyStr(str) {
    return (!str || 0 === str.length || str == undefined || str == null);
}

let str1 = "";
let str2 = "ABC";
console.log(isEmptyStr(str1));
console.log(isEmptyStr(str2));