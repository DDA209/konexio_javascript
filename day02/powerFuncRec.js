var result = 1;

function powerFuncRec(num, power) {

    console.log('avant if : num = ' + result + " et power = " + power);
    
    if (power > 0){
    
        console.log('dans if avant calc : num = ' + result + " et power = " + power);
    
        result *= num;

        console.log('dans if après calc : num = ' + result + " et power = " + power);
    
        return (powerFuncRec(num, power-1));
    
    } else {
    
        return result;
    }
}

console.log(powerFuncRec(5,3)); // 125