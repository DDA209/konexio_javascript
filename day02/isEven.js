function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }else if (num % 2 === 1){
        return false;
    }
    return "Error";
}


/* JENAIC STYLE
function isEven(num) {
    return num % 2 === 0
}
*/

console.log("5 " + isEven(5));
console.log("0 " + isEven(0));
console.log("1 " + isEven(1));
console.log("8 " + isEven(8));
console.log("-16 " + isEven(-16));
console.log("-15" + isEven(-15));
console.log("3,14 " + isEven(3.14));
console.log("A " + isEven("A"));