var arr = []; // déclaration d'un array
arr = [1, 2, 3]; // assigantion d'un array
var arr2 = arr.map(function (element, index) { // déclaration et assignation d'un array avec un .map
    return element + 10 - index;
});

console.log(arr2);
