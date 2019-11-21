obj = new Object();
obj.prop = 'exists';
console.log(obj.hasOwnProperty('prop')); // true
console.log(obj.hasOwnProperty('toString')); // false
console.log(obj.hasOwnProperty('hasOwnProperty')); // false