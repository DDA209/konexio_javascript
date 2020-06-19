function ageCalculator(date){
    var objNow = new Date();
    var objDateOfBirth = new Date(date);
    //console.log(typeof strNow + " - " + typeof strDate);
    // timestamp
    var numDifference = objNow - objDateOfBirth;
    // console.log(numDifference); // millisecondes

    result = Math.floor(numDifference / 1000 / 60 / 60 / 24 / 365.25);
    return result;
}


var input1 = "January 31, 1980 11:20:00";
var input2 = "February 14, 1975 15:30:00";

console.log(ageCalculator(input1));
console.log(ageCalculator(input2));