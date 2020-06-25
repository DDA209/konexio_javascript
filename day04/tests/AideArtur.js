function swap(first, second){
    first = [second][second = first, 0];
    return [first,second];        
}
var first,second;

first=25;second=30;
console.log( 
    swap(first, second) 
);