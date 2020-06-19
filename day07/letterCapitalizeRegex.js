function letterCapitalizeRegex(str) {
    var arrSentence = str.match(/\w+/gi);
    var result = arrSentence.length;
    return result;
}
var input1 = "What a wonderful world"; // 4
var input2 = "Dit papa c'est quoi cette bouteille de lait ?"; // 9

console.log(letterCapitalizeRegex(input1));
console.log(letterCapitalizeRegex(input2));

function letterCapitalizeRegex(str) {
    //
    // var temp = /[(A-Z)]\w+/gi;
    // console.log(typeof temp);
    var arrSentence = str.match(/\w+/gi);
        // / Début de l'expression régulière
        // \w recherche de mots (lettres par lettres)
        // + pour attacher les caractères
        // / fin de l'expression régulière
        // g - Global
        // i - Insensible à la casse
    var result = arrSentence.length;
    return result;
}
// 3/4 d'heure
var input1 = "What a wonderful world"; // 4
var input2 = "Dit papa c'est quoi cette bouteille de lait ?"; // 9
"Comment ça va à Téhéran" //

console.log(letterCapitalizeRegex(input1));
console.log(letterCapitalizeRegex(input2));