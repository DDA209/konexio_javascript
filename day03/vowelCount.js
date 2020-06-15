function vowelCount(str) {

    var arrVowelList = ["a","e","i","o","u","y"]
        result = 0;

    for (i = 0, n = arrVowelList.length; i < n; i++) {
        arrVowelList.push(arrVowelList[i].toUpperCase());
    // console.log(arrVowelList);
    }

    var arrSentence = str.split(""); // Phrase transfomée en Array

    // console.log(arrSentence + " have " + arrSentence.length + " letters")  ;
    // console.log(arrVowelList + " have " + arrVowelList.length + " letters");

    for (i = 0, n = arrVowelList.length; i < n; i++) {
        for (j = 0, m = arrSentence.length; j < m; j++) {
            // console.log("i="+i+"-"+arrVowelList[i]+" j="+j+arrSentence[j]);
            // console.log('Sentence letter : ' + arrVowelList[i] + " - Letter to compare : " + arrSentence[j]);
            if (arrVowelList[i] === arrSentence[j]) {
                // console.log("Match");
                result++;
                // console.log("Result : " + result);
            };
         
        }    
    }

    return result;
};

var input = "Les roses sont rouges";
console.log(vowelCount(input));

//                 .              .        .        .               . .             .        .   .        ..    ..
var password = "2LkI;k61S6l,.nHL3hu3j.S1Js8ED.,0jkj4uBg-N-Q+9*kmp40*U0i*kJ0f0LH-x0f+I-jk07Gl*o4V*i+B9+f*dJUyJ?.4OyP";
console.log(vowelCount(password));