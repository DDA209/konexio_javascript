function exOh(str) {
    var nbX = 0;
    var nbO = 0;

    var arrWord = str.split("");
    console.log(arrWord);
    // transformation de la chaine en Array
    for (i = 0; i < arrWord.length; i++) {
        switch (arrWord[i]) {
            case "x":
                nbX++;
                break;
            case "o":
                nbO++;
                break;
            default:
                return false;
        }
        // console.log("nbX = " + nbX);
        // console.log("nbO = " + nbO);

        // if (arrWord[i] === "x" && arrWord[i] > 1) {
            
        //     console.log(nbX);
        // } else if (arrWord[i] === "o"){ // n'importe quoi
        //     nbO++;
        //     console.log(nbO);
        // }
        
    }

    if (nbX === nbO && (nbX != 0 || nbO != 0)) {
        return ("Is " + true + " " + nbX + " X and " + nbO + " O");
    } else {
        return ("Is " + false + " " + nbX + " X and " + nbO + " O");
    }
    
}

console.log(exOh("xxoxoo")); // true
console.log(exOh("oxo"));    // false
console.log(exOh("oo"));    // false
console.log(exOh(""));    // false