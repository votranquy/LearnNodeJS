async function isEmptyObj(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

objA = new Object();
objA.prop = 'exists';

console.log(isEmptyObj(objA)); //false