// console.log('hello');

//console.log(process.argv);  // Affiche L'emplacement de node.exe sur le HDD
//                            // Acciche le chemin du fichier
//                            // process.argv n'envoie que des STRINGS
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();


function sayHello(name, day){

    console.log('Hello ' + name + ". The better day is " + day);
    
}

sayHello("to my little friend", "tomorrow");

console.log("Arguments utilisés : process.argv[2], process.argv[3]");


// 
// Commande dans terminal : node index tony

/*
console.log(Object.keys(process)); // 
console.log(typeof process.argv); // Affiche objet mais est un array...
console.log(Array.isArray(process.argv)); // ... La preuve
console.log(Array.isArray(process)); // Est un objet
*/
var argv = process.argv.slice(2);
//console.log("argv",argv);
sayHello(argv[0], argv[1]);
sayHello(process.argv[2], process.argv[3]);
// -----> Exécuter node sayHello tony today


//// Aïe ça marche pas, heu ... ça fait pas ce que je veux. Faut que je débug