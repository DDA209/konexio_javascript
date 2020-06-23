var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}];

var arr2 = arr.map(function (obj) {
    var result = {
        firstName: obj.firstName,
        surname: obj.surname,
        fullName: obj.firstName + " " + obj.surname
    };
    return result;
})

console.log(arr2)