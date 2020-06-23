var arr = [1, 'a', 2, 'b'];

var arr2 = arr.filter(function (element) {

    var result = isNaN(element);

    // console.log(result);

    return result;

});

console.log(arr2);