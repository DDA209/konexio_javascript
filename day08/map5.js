var arr = ["pan","top","pal","tool"];
var result = arr.map(function (str) {
    console.log(str + " - Before")
    str.split("");//.reverse().join();
    console.log(str + " - After")
})

console.log(result);
