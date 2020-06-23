var arr = [1, 2, 3, 4];

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }else if (num % 2 === 1){
        return false;
    }
    return "Error";
}

arr2 = arr.filter(isEven);

console.log(arr2);