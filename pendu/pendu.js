var prompt = require('prompt');
var mots = require('./mots.json');

/***** Récupération d'un mot aléatoirement dans mots.json *****/
var word = "";
var input = "";

function wordFind() {
  var x = Math.floor(Math.random() * mots.length);
  word = mots[x].label.toUpperCase();
  return word;
}// Retunn 1 random word


/***** récupération de la saisie utilisateur *****/
function playInput() {
// */
  var letter = {
    name: "lettre",
    message: "Proposez une lettre",
    validator: /^([A-Za-z])\w{0}/,
    warning: "N'entrez qu'une lettre de A à Z (accents compris)"

  }

  prompt.start(); 
  // console.log("Prompt started")
  prompt.get(letter, function (err, result) {  // Récupère 1 valeur, celle de la lettre tappée
    if (err) { 
      // console.log("In error")
      return onErr(err); 
    }
    // console.log("not in error")
    input = result.lettre.toUpperCase();
    // console.log(input);
    // console.log(result);
    return input;
  });
}

var test = playInput();
console.log(input);

// console.log("test = " + test);

if (test === "A"){
  console.log("OK");
} else if (test !== "A"){

}
/*

function play() {
  var nbTry = 10;
  


  if (nbTry = 0){
    console.log("Perdu le mot était : " + word );
  }
}

wordFind()

/// Récupération du nombre 





console.log("Le mot est : " + word);
//*/

// console.log("La lettre saisie est : " + input);


// console.log(input);