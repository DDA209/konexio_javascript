// COURS //
// Code in JS ES5 (actuel ES6+)

//Declare a variable :
console.log("-- VARIABLES --");

// Toujours ---> var <name of variable> = <value>;
var name = "Léopard";
console.log("name", name);

//Assign a variable
name = "Brésilien";
console.log("name", name);

// Types
console.log("-- TYPES --");

// // Strings "text"
var food = "apple";
console.log("food", food);

var notFigure = "0123";

// // Number chiffre
var figure = 1234
console.log("figure", figure);

var secondFigure = 5678;
var secondfigure = 90;
console.log("secondFigure", secondFigure);
console.log("secondfigure", secondfigure); // wrong camel case

// // Boolean
var isHealthy = true;
var isTall = false;

// // Array
var names = ['John', 'peter', 'frank', 1, true];

// // Literal object (objet litéral)
var student = {
    name: "Timothy",
    age: 18,
};

// // null (la variable n'a pas de valeur)
var empty = null;

// // undifiened (la variable n'a pas été définie)
var notExistant;
console.log("typof notExistant", typof notExistant);
console.log("typof inexistant", typof inexistant);

// // function
var doSomething = function () {
    console.log("does something")
};

// Type conversion
console.log("secondFigure + figure",secondFigure + figure);
console.log("secondFigure + figure",notFigure + figure); // Concaténation de string par convertion du num en chiffre

// EXTRA
console.log("-- EXTRA --");

// Extra simple and double quotes
var  quote1='Voici la citation de Jénaïc : "La vie  d\'artiste est belle"'
var  quote2="Voici la citation de Jénaïc : \"La vie d'artiste est belle\""

// Extra typeof (renvoie le type de la variable)
