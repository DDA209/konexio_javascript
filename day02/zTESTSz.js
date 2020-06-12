function squareRoot(num) {
  var i = num;
  while (true) {
    if (i * i === num) {
      return i;
    } else if (i * i === 0){
      return num + " n'a pas d'entier en racine carrée";
    }
    i--;
  }
}

console.log(squareRoot(256))