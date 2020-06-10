function firstFactorial(num) {
    for (result = 1; num > 0; num-- ){
        result *= num;
    }
    return result;
}

console.log(firstFactorial(8));