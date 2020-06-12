function alphabetSoup(str) {
    var arrAlphabet = str.split("");
    arrAlphabet = arrAlphabet.sort();
    result = arrAlphabet.join("");
    return result;
}

console.log(alphabetSoup("Didier PASCAREL"));