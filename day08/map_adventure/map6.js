/*
var arr = [{
        firstName: 'Daniel',
        surname: 'Beckham'
    },
    {
        firstName: 'David',
        surname: 'Craig'
    }];
var el1 = ["",""];
var el2 = ["",""];

// console.log("arr avant map : " + arr);

arr2 = arr.map(function (obj, index) {

    console.log("index : " + index + " - " + obj.firstName + ", " + obj.surname);

    switch (index) {
        case 0 :
            console.log("case 0");
            el1[0] = obj.firstName;
            el2[1] = obj.surname;
            console.log("C0 -\n el1 : " + el1 + "\n el2 : " + el2)
            break;
    
        case 1 :
            console.log("case 1");
            el2[0] = obj.firstName;
            el1[1] = obj.surname;
            console.log("C1 -\n el1 : " + el1 + "\n el2 : " + el2)
            break;
    
        default:
            return 'Error';
            break;
    } 
    
    var result = [el1.join(" ") + " " + el2.join(" ")];
        return result;
})

console.log(arr2);
//*/ 


var arr = [{
        firstName: 'Daniel',
        surname: 'Beckham'
    },
    {
        firstName: 'David',
        surname: 'Craig'
    }];

var arr2 = arr.map(function (obj) {
    result = obj.firstName + " " + obj.surname;
    return result;
})

console.log(arr2);