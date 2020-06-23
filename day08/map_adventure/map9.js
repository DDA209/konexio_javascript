var arr = ['apple', 'croissant', 'pear'];

console.log(arr);

var arr2 = arr.map(function (aliment) {

    // console.log (aliment);
    result = "<li>" + aliment + "</li>";
    // console.log(result);

    return result;

});

console.log(arr2);