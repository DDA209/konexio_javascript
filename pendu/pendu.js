var mots = require('./mots.json');
console.log(Math.floor(Math.random() * mots.length));
for (var i = 0; /*i < mots.length*/ false; i++) {
  var x = Math.floor(Math.random() * mots.length);
  console.log(mots[x].label);
}