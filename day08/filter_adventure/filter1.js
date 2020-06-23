var arr = ["a","b","a","c","a","d"];

arr2 = arr.filter(function (letter) {
    return letter === "a";
})

console.log(arr2);