function rot13(str) {
    var arrInput = str.split("");
    var arrOutput = [];

    console.log(arrInput[0].charCodeAt(0));


    for ( i = 0; i < arrInput.length; i++ ) {
        // console.log(i);
        
        //*
        if ( (arrInput[i].charCodeAt(0) >= 110 && arrInput[i].charCodeAt(0) <= 122) || (arrInput[i].charCodeAt(0) >= 78 && arrInput[i].charCodeAt(0) <= 90) ) {
            arrOutput[i] = String.fromCharCode(arrInput[i].charCodeAt(0) - 26 + 13);

        } else if ( (arrInput[i].charCodeAt(0) >= 97 && arrInput[i].charCodeAt(0) < 110) || (arrInput[i].charCodeAt(0) >= 65 && arrInput[i].charCodeAt(0) < 78) ){
            arrOutput[i] = String.fromCharCode(arrInput[i].charCodeAt(0) + 13);
            

        } else {
            return "N'entrez que des lettres";
            
        }
        //*/
}
    var result = arrOutput.join("");
    return result;
}

var input = process.argv[2];

console.log(rot13(input));