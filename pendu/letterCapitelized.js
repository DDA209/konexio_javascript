function letterCapitalize(sentence) {
    var arrSentence = sentence.split(" ");
    var finalSentence = []
    // console.log(arrSentence);

    for(i = 0; i < arrSentence.length; i++){
        var arrWord = arrSentence[i].split("");
        var letter = arrWord[0].toUpperCase();
        arrWord[0] = letter;
        var finalWord = arrWord.join("");
        finalSentence[i] = finalWord;

    }

    result = finalSentence.join(" ");
    return result;
}

console.log(letterCapitalize("bring your umbrella"));
console.log(letterCapitalize("what a wonderful world"));
console.log(letterCapitalize("sweet like honey green like money"));
