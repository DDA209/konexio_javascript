

var min = 6;
var max = 15;
var arrAlphabet = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];

function passwordGen(num) {
 
    if (num >= min && num <= max){
        var arrPassword = [];

        for (let i = 0; i < num; i++){
            arrPassword[i] = arrAlphabet[Math.floor( (26 * Math.random()) + 1 )];
        }

        var password = arrPassword.join("");
        return password;
        
    }else{
        return "Error";
    }
}

var input = 11;

console.log(passwordGen(input));