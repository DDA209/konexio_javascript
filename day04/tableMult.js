var tableMult = function (num) {
    var result = "";

    if (!num) {
        return "error";
    }
    
    for (i = 1; i <= 10; i++) {

        // console.log("i=" + i + " et num=" + num);
        result = result + (i < 10 ? " " : "") + i + " * " + num + " = " + ((num * i) < 10 ? " " : "" ) + (num * i) + (i < 10 ? "\n" : "");
        
    }
    return result;

}; // point virgule seulement parceque je suis dans une ligne de code var

var input = process.argv[2];

console.log(tableMult(input));