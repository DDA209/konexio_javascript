var arr = ["pan","top","pal","tool"];
var result = arr.map(function (str) {
    var arrElem = str.split("");
    arrElem = arrElem.reverse();
    return arrElem.join("");
    //console.log(str);
});

console.log(result);