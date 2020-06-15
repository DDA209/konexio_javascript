function simpleAdding(num) {
    for (var i = 1; i <= num; i = i + 1 ){ // On fait 140 tours on commence par 1 (i)
        result = result + i; // au début result = 0 ; on lui ajoute 1 (i) au premier tour
    }
    return result //
}
console.log(simpleAdding(140));