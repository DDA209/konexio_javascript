function simple (n) {
    var arr = [];
    while(n>0){
    arr.unshift(n%10);
    n=n/10|0;
    }
        return arr
    }
    
console.log(simple(14541))