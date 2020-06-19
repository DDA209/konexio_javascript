function swapCase(str) {
    var arrToChange = str.split("");

    // console.log(arrToChange[0]);
    // console.log(arrToChange[0].toLowerCase());
    // console.log(arrToChange[1]);
    // console.log(arrToChange[1].toUpperCase());

    for ( i = 0 ; i < arrToChange.length; i++) { 
        if (arrToChange[i] === arrToChange[i].toUpperCase()) {
            arrToChange[i] = arrToChange[i].toLowerCase();
        } else if (arrToChange[i] === arrToChange[i].toLowerCase()){
            arrToChange[i] = arrToChange[i].toUpperCase();
        } else {
            return "Error non prise en compte";
        }
    }

    // console.log(arrToChange);
    // console.log(arrToChange.length);

    result = arrToChange.join("");
    return result;
    // return arrToChange;
}

var input = "*-/'SnRTaUstruTYoISstDdsyu";

console.log(swapCase(input));

swapCase(process.argv[2]); /// :(((   node swapCase.js pROBLEME







/*function swapCase(str) {
    
    var arrToChange = str.split("");
    console.log(str.split("").lenght);
    console.log(arrToChange.lenght);

    for (i = arrToChange.lenght() ; i >= 0 ; i-- ){
        if ( arrTochange[i] === arrToChange[i].toUpperCase() ) { // Si majuscule
            console.log("If 1 " + i + "e boucle.")
            arrToChange[i] = arrToChange[i].toLowerCase()
        }
    }

    var result = arrToChange.join("");
    // return process.argv([2]);
    console.log(result);
    return result;

}

swapCase("blouBLOU");

// Exécuter node swapCase.js "Abra cADABRA"
// console.log(swapCase("Abra cADABRA"));
// swapCase(process.argv[2]);
// swapCase(argv[2]);
*/