function letterCount(str, search) {
    var arrSentence = str.split(""),
        result = 0;
    // console.log(arrSentence);


    for (i = 0 ; i < arrSentence.length; i++) {
        // (arrSentence[i] === "i" || arrSentence[i] === "I" ) ? result++ : false ;

            // console.log(arrSentence[i]);
            if (arrSentence[i] === search.toUpperCase() || arrSentence[i] === search.toLowerCase() ){
                result++;
            }   
        }   


    return result;
}

var input = "Super Nintendo, Sega Genesis, when I was dead broke man, I couldn’t picture this",
    charSearch = "i";

console.log(letterCount(input, charSearch));