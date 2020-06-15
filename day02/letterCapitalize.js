


function letterCapitalize(sentence) {

    var arrSentence = sentence.split(" ");      // décomposition de la phrase en mots

    for (i = 0; i < arrSentence.length; i++ ){

        var word = arrSentence[i];              // Récupération du premier mot                  (début de l'utilisation de --i-- )
        var arrWord = word.split("");           // décomposition du mot en lettres
        var letter = arrWord[0].toUpperCase();  // met en majuscule la lettree en indx 0 (première position)
        arrWord[0] = letter;                    // On remet la lettre modifiée dans la chaine du mot (à la première place, index 0)
        arrSentence[i] = arrWord.join("");      // Remis een place du mot "corrigé" à sa place

    }
    sentence = arrSentence.join(" ");           // Reconstruuction de la phrase
    return sentence;

}


// Bilel

/*
function letterCapitalizeBilel(sentence) {
    sentence = sentence.split(" ");

    for (var i = 0, x = sentence.length; i < x; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substr(1);
    }

    return sentence.join(" ");
}
*/


var test = "on met des majuscules au début de chaque mot";

console.log(letterCapitalize(test))
console.log(letterCapitalizeBilel(test))
