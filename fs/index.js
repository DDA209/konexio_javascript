var fs = require('fs');

// Import module that we wrote ourselves
//var fn = require(".example1");

// Import
//var _ = require('lodash');

//_.map([], function(){return 'r'; });

//console.log(_);
console.log(fs);

//      chemin du fichier  options  callback func
fs.readFile('./input.txt', 'utf8', function(err, fileContent) {
    if (!err) {} // 1ere façon
    if (err !== null) { // 2e façon
        console.log("L'erreur est : " + err);
    } else {
        console.log(fileContent);
    }
})