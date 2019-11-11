function doesSomething(callback) {
    callback();
}
doesSomething(function(){
    console.log("1");
    var i = 0;
    while (i < 3)
    {
        console.log("hello");
        i = i + 1;
    }
});
console.log("2");
console.log("3");

console.log("+++++++++++++++++++++++");

function doesSomething2(callback) {
    setTimeout(callback, 0);
}

doesSomething2(function(){
    console.log("1");
    var i = 0;
    while (i < 3)
    {
        console.log("hello");
        i = i + 1;
    }
});
console.log("2");
console.log("3");
