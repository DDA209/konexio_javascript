// Déclare  fonctions
// function functionName(arg1, arg2){}

var doSomething = function () {
    console.log("does something");
};

function doSomethingElse() { // Bonne pratique
    console.log("does something else");
}

// Appel de fonction
doSomething();



// Somme de qqchose
function sum() {
    var operand1 = 5;
    var operand2 = 2;
    
    console.log(operand1 + operand2);
}

sum();

// paramètre dans la fonction (les paramètres sont des variables)
function sum(operand1, operand2) {
    console.log(operand1 + operand2); // moins bien
}

sum (10, 500);

function sum(operand1, operand2) {
    return(operand1 + operand2); // bonne pratique
}

var result1 = sum(800, 40);
console.log(result1);

console.log(sum(99, 99));