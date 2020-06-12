var obj = {
    'name': 'daniel',
    'action': 'coding',
    'age': 30
  };
  console.log(obj);

var vehicule = {
    'type': 'voiture',
    'nbRoues' : 5,
    'nbPassagerMax': 4,
    'vitesseMax': 130,
    'colorie' : "blanc"
  };



console.log(vehicule.colorie);              // output       "blanc"
console.log(vehicule['type','nbRoues']);    // output       5
console.log(vehicule['type']);              // output       "voiture"
console.log(vehicule['ptac']);              // output undefined
                                                                        console.log('\n');
var limitVitesse='vitesseMax';

console.log(vehicule.limitVitesse);         // output undefined
console.log(vehicule[limitVitesse]);        // output       130

// -------------------- Fusion avec assign --------------------------//

var hey = {a : 1, b: 2}; // b ne sera pas pris écrasé par oh['b']
var oh = {b: 3, c: 4};   // b sera prioritaire sur hey['b']
var yeah = Object.assign(hey, oh);

console.log(yeah); // {a: 1, b: 3, c: 4} -- Priorité à droite 

