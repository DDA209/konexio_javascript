var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function (obj) {
    var result = { 
            fullName: obj.firstName + " " + obj.surname
        };
    // console.log(result);
    return result;
});

console.log(arr2);