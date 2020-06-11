function squareRoot(num) {

    for (let i = num; i * i >= num  ; i--) {
        //console.log(i);
        if (i*i === num) {
            var result = "La racine carée de " + num + " est " + i;
        } else {
            var result = num + "n'a pas d'entier en racien carrée";
        }
    }

    return result;
};

// console.log(squareRoot(256));
console.log(squareRoot(16777216));