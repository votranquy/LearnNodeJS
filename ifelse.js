function checkPassOrNot(mark) {
 if(mark >= 5) console.log("PASS!");
 else console.log("FAIL!");
}
function checkPassOrNot2(mark) {
 mark >= 5 ? console.log("PASS") : console.log("FAIL");
}
var score = 5;
checkPassOrNot(score);
checkPassOrNot(score-1);
checkPassOrNot2(score);
checkPassOrNot2(score-1);