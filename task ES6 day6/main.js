var x = 1;
var y = 2;
console.log( "befor : x "+ x +" y "+y);
[x, y] = [y, x];
console.log("after : x " + x + " y " + y);

fruits = ["apple", "strawberry", "banana", "orange", "mango"]

var everyISString = fruits.every(element => typeof (element) == "string");
console.log(everyISString);

var someStartWithA = fruits.some(element => element.startsWith('a'));
console.log(someStartWithA);

var filteredArray = fruits.filter(element => (element.startsWith('b') || element.startsWith('s')));
console.log(filteredArray);

var newMapingArray = fruits.map(element => ` i love ${element}`);
console.log(newMapingArray);

fruits.forEach(element => {
    console.log(element)
});
var newMapingLength = fruits.map(element => `${element.length}`);
console.log(newMapingLength);

function test(arr) {
    Math.max(...arr)
}
console.log("max : " + Math.max(...newMapingLength));
console.log("min : "+ Math.min(...newMapingLength));


