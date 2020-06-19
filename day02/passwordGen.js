function passwordGen(num) {

    var min = 6;
    var max = 64;
    var arrAlphabet = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];

    if (num >= min && num <= max){
        var arrPassword = [];

        for (let i = 0; i < num; i++){
            arrPassword[i] = arrAlphabet[Math.floor( (26 * Math.random()))];
        }

        var password = arrPassword.join("");
        return password;
        
    } else if (num < 6 || num  > 64){
        return "Error: number out of range";
    }
    return "Error: number needed.";

}

var input = process.argv[2]
console.log(passwordGen(input));