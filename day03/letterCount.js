function letterCount(str, search) {
    var arrSentence = str.split(""),
        result = 0;
    // console.log(arrSentence);
    console.log(charSearch.toUpperCase);

    for (i = 0 ; i < arrSentence.length; i++) {
        // (arrSentence[i] === "i" || arrSentence[i] === "I" ) ? result++ : false ;

            // console.log(arrSentence[i]);
            if (arrSentence[i] === charSearch.toUpperCase || arrSentence[i] === charSearch.toLowerCase ){
                result++;
            }   
        }   


    return result;
}

var input = "Super Nintendo, Sega Genesis, when I was dead broke man, I couldn’t picture this",
    charSearch = "i";

console.log(letterCount(input, charSearch));