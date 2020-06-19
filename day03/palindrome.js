
function palindrome(str) {
    var arrToArray = str.split("");
    console.log("arrToArray : " + arrToArray);

    var arrToVerify = [];

    for (i = 0, j = 0 ; i < arrToArray.length; i++) {

        arrToArray[i] = arrToArray[i].toUpperCase();
        
        if (arrToArray[i] != arrToArray[i].toLowerCase() || !isNaN(parseInt(arrToArray[i])) ) {
            arrToVerify[j] = arrToArray[i];
            j++;
        }

    }
    // console.log(arrToVerify);

    for (i = 0, j = arrToVerify.length - 1 ; i < j; i++ , j--) {

        // console.log(i + " - " + arrToVerify[i] + " --- " + arrToVerify[j] + " - " + j);

        if (arrToVerify[i] != arrToVerify[j]) {
            return false
        }

    }

    return true;
}


var input1 = "Sexes"; // True
var input2 = "125896698521"; // True
var input3 = "Elu par cette crapule"; // true
var input4 = "À l'émir, Asimov a vomi sa rime, là"; // False sur accent
var input5 = "123 n'est pas sa PTS en 321"; // TRUE
var input6 = "Ce n'est pas 1 palindrome"; // False ça se voit

console.log(palindrome(input1) + " pour :   " + input1);
console.log(palindrome(input2) + " pour :   " + input2);
console.log(palindrome(input3) + " pour :   " + input3);
console.log(palindrome(input4) + " pour :   " + input4);
console.log(palindrome(input5) + " pour :   " + input5);
console.log(palindrome(input6) + " pour :   " + input6);
