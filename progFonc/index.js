//////////////////////////////////////////////////////////////////////////
///   PROGRAMMATION FONCTIONNELLE   //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// Exemple non fonctionnelle car on modifie la variable d'origine)
var arr = [1,2,3];
arr.push(4)
console.log(arr);


var bdays = ['08-14', '10-04', '04-21'];

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array
var bdays2 = bdays.map(function(elem) {
  return elem.replace('-', '/');
});

console.log(bdays2); // => ['08/14', '10/04', '04/21']

var newBdays = bdays.forEach(function(bday) { //exemple Foreach
    console.log("Chaque bday .forEach() : " + bday);
})

var newBdays2 = bdays.map(function(bday, index) {
    console.log("Chaque bday .map() : " + bday);
    return (index + 1) + " - " + bday;
})
console.log("Bdays avec n° d'index + 1 : " + newBdays2)

//////////////////////////////////////////////////////////////////////////
///   MAP   //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

var arr = [1.5, 2.56, 5.1, 12.33];

// round each number up in an array
var rounded = arr.map(Math.ceil); // Référence d efonction qui est pas appelée par arr.map

console.log(rounded); // => [2, 3, 6, 13]

//////////////////////////////////////////////////////////////////////////
///   FILTER   ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

var nums = [-4, 3, 2, -21, 1];

var pos = nums.filter(function(el) {
  return el > 0;
});

console.log(pos); // => [3, 2, 1]

var data = [
    {name: 'daniel', age: 44},
    {name: 'john', age: 34},
    {name: 'robert', age: null},
    {name: 'jenny', age: undefined},
    {name: null, age: undefined},
    {name: 'didier', age: 45}
];
  
  // dataMod will now contain only the first two objects in the data array
  var dataMod = data.filter(function(el) {
    //console.log("dataMod : " + dataMod);
    if (el.name != undefined && el.age != undefined) {  
        
        return true;
    }
    else {

        return false;
    }
});

console.log(dataMod);

//////////////////////////////////////////////////////////////////////////
///   REDUCE   ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

var nums = [1, 2, 3, 4];

var sum = nums.reduce(function(prevVal, curVal, curIndex, origArr) {
  return prevVal + curVal;
});

console.log(sum); // => 10
