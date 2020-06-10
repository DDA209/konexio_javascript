var test = "what a beautiful world";


function letterCapitalize(sentence) {

    var arrSentence = sentence.split(" ");      // décomposition de la phrase en mots

    for (i = 0; i < arrSentence.length; i++ ){

        var word = arrSentence[i];              // Récupération du premier mot
        var arrWord = word.split("");           // décomposition du mot en lettres
        var letter = arrWord[0].toUpperCase();
        arrWord[0] = letter;
        arrSentence[i] = arrWord.join("");      //arrSentence[i] = (arrWord.toString()).replace(/,/g, "");
        sentence = arrSentence.join(" ");

    }
    return sentence;

}

console.log(letterCapitalize(test))