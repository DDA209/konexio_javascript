function firstFactorial(num) {
    for (result = 1; num > 0; num-- ){
        result *= num;
    }
    return result;
}



function firstFactorial2(num) {
    var result = num--
    while (num > 1){
        result *= num--;
    }
    return result;
}

var input = 6

console.log(firstFactorial(input));
console.log(firstFactorial2(input));

