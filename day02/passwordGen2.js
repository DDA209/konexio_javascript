var charStart = "A";
var charEnd = "Z";
var charStartAscii = charStart.charCodeAt(0);
var charEndAscii = charEnd.charCodeAt(0);

var min = 6;
var max = 15;

function passwordGen2(num) {
 
    if (num >= min && num <= max){
        var arrPassword = [];

        for ( i = 0; i < num; i++ ){
            arrPassword[i] = String.fromCharCode(Math.floor((Math.random() * ( charEndAscii - charStartAscii ) ) +charStartAscii+1));
        };

        var password = arrPassword.join("");
        return password;
        
    }else{
        return "Error";
    }
}

console.log(passwordGen2(5));  // Trop petit
console.log(passwordGen2(8)); //    OK 
console.log(passwordGen2(18)); // Trop grand