function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }else if (num % 2 === 1){
        return false;
    }else{
        return "Error";
    }
}

console.log("5 " + isEven(5));
console.log("0 " + isEven(0));
console.log("1 " + isEven(1));
console.log("8 " + isEven(8));
console.log("3,14 " + isEven(3.14));
console.log("A " + isEven("A"));