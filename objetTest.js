var arrTest = [];
var objTest = {};


arrTest ["Didier","PASCAREL",45,true];

objTest = {
    firstName : "Didier",
    lastName : "PASCAREL",
    age : 45,
    isPresent : true,
    1000000 : false,
    'milliardaire' : false
};

console.log(objTest.age); // Syntaxe pointée
//console.log(obj['age']); // Syntaxe pointée utilisableble qu'avec des string en clé
// console.log(obj['age']); 
// console.log(obj['age']); 
// console.log(obj['age']); 
// console.log(obj['age']); 
// console.log(obj['age']); 
// console.log(obj['age']); 
// console.log(obj['age']); 

var objProd = objTest // Double l'oblet objTest en objProd

console.log(Object.entries(objTest)[2][1]);
console.log(Object.entries(objTest)[2][1] + " a " + objTest.age + "ans");
