function firstReverse(str) {
    var len = str.length; 
    var arr = str.split("") // transforme la chaine en array
    // console.log("texte en array : " + arr);
    // console.log("contenu de str : " + str);
    // console.log("longueur de string : " + len);
    
    var resArr = [];

    for ( i = len, j=0 ; i >=0 ; i-- , j++ ){
        resArr[j] = arr[i];
        // console.log(resArr)
    }
    var result = resArr.join("")
    return result;
}

console.log(firstReverse("konexio"));