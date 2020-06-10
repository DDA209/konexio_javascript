function timeConvert(num) {
    var minutes = Math.ceil(num/60);
    var secondes = num/60 - minutes;
    var heures = Math.ceil(minutes/60);
    var minutes = heures/60 - heures;

    result=(heures + " : " + minutes + " . " + secondes);

    return result;
}

var input=14021975;

console.log(timeConvert(input));