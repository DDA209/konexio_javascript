var arr = [{
    firstName: 'David',
    surname: 'Beckham'
}, {
    firstName: 'James',
    surname: 'Corden'
}, {
    firstName: 'Daniel',
    surname: 'Craig'
}, {
    firstName: 'Graham',
    surname: 'Norton'
}];

var arr2 = arr.filter(function (person) {
    // console.log(person.firstName.split("")[0])
    // if (person.firstName.split("")[0] === "D"){
    //     return true;
    // }else{
    //     return false;
    // }
    
    return person.firstName.split("")[0] === "D";

});
    
console.log(arr2);