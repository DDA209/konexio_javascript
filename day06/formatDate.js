function formatDate(date) {
    // // Transformation de la date en tableau ["AAAA","MM","JJ"]
    var arrDate = date.split("-");
    // console.log("Array date = " + arrDate + " a une taille de " + arrDate.length );
    // // Transformation de chaque valeur du tableau en integer
    var numYear = arrDate[0];
    var numMonth = arrDate[1];
    var numDay = arrDate[2];
    // console.log(numDay + "/" + numMonth + "/" + numYear); 
    // // Récupération des entiers dans le résultat
    var result = numDay + "/" + numMonth + "/" + numYear
    return result

}
var input1 = "1975-02-14";
var input2 = "2018-11-17";
var input3 = "1986-07-03";
var input4 = "1993-02-02";

console.log(formatDate(input1));
console.log(formatDate(input2));
console.log(formatDate(input3));
console.log(formatDate(input4));