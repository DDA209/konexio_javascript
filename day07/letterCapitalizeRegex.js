/*
function countWords(str) {
    var arrSentence = str.match(/\w+/gi);
    var result = arrSentence.length;
    return result;
}
var input1 = "What a wonderful world"; // 4
var input2 = "Dit papa c'est quoi cette bouteille de lait ?"; // 9

console.log(countWords(input1));
console.log(countWords(input2));

function countWordsRegex(str) {
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

console.log(countWordsRegex(input1));
console.log(countWordsRegex(input2));
*/

function letterCapitalizeRegex(str) {
    var result = str.replace(str, str.toUpperCase(/(\b[A-ZÇ-Ü])\w{0}/gi)); //á-Ñ
    return result;
}

var input1 = "What a wonderful world";
var input2 = "Dit papa c'est quoi cette bouteille de lait ?";;
var input3 = "Comment ça va à Téhéran";

console.log(letterCapitalizeRegex(input1));
console.log(letterCapitalizeRegex(input2));
console.log(letterCapitalizeRegex(input3));

