function doop(num1, operator, num2) {
    var result = 0;
    if (process.argv[5]){
        return "Error";
    }
    if (isNaN(num1) || isNaN(num2) || (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "%") ){
        return "Saisie incorrecte. Entrer un entier, un opérateur (+, -, *, /, ou %) puis un dernier entier";
    }
        
    // if (process.argv[5] || isNaN(num1) || isNaN(num2) ){
    //     return "Saisie incorrecte. Entrer un entier, un opérateur (+, -, *, /, ou %) puis un dernier entier";
    // }
    
    switch (operator) {

        case "*":
            result = num1 * num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "+":
            result = num1 + num2;
            break;

        case "%":
            result = num1 % num2;
            break;

        case "/":
            if (num2 == 0) {
                result = "Divison par 0 impossible";
            } else {
                result = num1 / num2;
            }
            break;
    
        default:
            result = "Erreur, ce cas n'est pas pris en charge"
            break;
    }
    return result;
}

var input1 = process.argv[2];
var input2 = process.argv[3];
var input3 = process.argv[4];

console.log(doop(input1, input2, input3));