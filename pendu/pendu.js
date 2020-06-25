var prompt = require('prompt');
var mots = require('./mots.json');

//*

/// Récupération d'un mot aléatoirement dans mots.json
var word = "";
var input = "";

function wordFind() {
  var x = Math.floor(Math.random() * mots.length);
  word = mots[x].label.toUpperCase();
  return word;
}// Retunn 1 random word

function playInput() {
// */
  prompt.start();  // start the prompt

prompt.get(["lettre"], function (err, result) {  // get 2 properties username and email
    if (err) { 
      return onErr(err); 
    }
    result.lettre.toUpperCase();
    console.log(result.lettre.toUpperCase());
    return input;
  });

 
}

playInput()
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


console.log(playInput());