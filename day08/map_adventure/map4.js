var arr = [1,2,3,4];
var result = arr.map(function (num) {
    if (num % 2 === 0) {
        return true;
    }else if (num % 2 === 1){
        return false;
    }
    return "Error";
})

console.log(result);

function isEven (num){
    if (num % 2 === 0) {
        return true;
    }else if (num % 2 === 1){
        return false;
    }
    return "Error";
}

var arr = [1,2,3,4];
var arr2 = arr.map(isEven);


console.log(arr2);