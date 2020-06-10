// conditions : if () {} elseif () {} else {}
var age = 22; //18
var drinkingLegalAge = 21;
var drivingLegalAge = 16;

console.log(age < drinkingLegalAge); //test
console.log("drinkingLegalAge",drinkingLegalAge); 
console.log("age", age); 

if (age < drinkingLegalAge) { // la condition retourne un booléen
    console.log("You cannot drink in USA");
} else {
    console.log("You can drink in the USA");
}


if (age < drivingLegalAge) {
    console.log("You cannot drive in USA");
} else if (age === drivingLegalAge) {
    console.log("Congrats, you can by a new driver");
} else {
    console.log("You can drive in the USA");
}