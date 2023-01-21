// ********************************
// ****************  task 1 *******************
 // ********************************
// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
    var addInstance = function () {
        Rectangle.prototype.count=Rectangle.prototype.count+1
    }
    addInstance();  
// }

Rectangle.prototype.count=0
Rectangle.prototype.displayCountOfInstance = function () {
    return this.count
}
// Rectangle.prototype.area = function () {
//     return this.width * this.height;
// }
// Rectangle.prototype.perimeter = function () {
//     return (this.width + this.height) * 2;
// }
// Rectangle.prototype.toString = function () { 
//     return ("width : " + this.width + " height: " + this.height +
//     " area: " +this.area()+" perimeter: "+this.perimeter());
// }
// var rect1 = new Rectangle(20, 30);
// var rect2 = new Rectangle(90, 80);
// var rect3 = new Rectangle(100, 50);
// console.log(rect1.toString());
// console.log(rect1.displayCountOfInstance());


// task 2
function Shape() {
    throw "can't make of shape an instance"
}
Shape.prototype.area = function () {}
Shape.prototype.perimeter = function () { }

function Rectangle(width,height) {
    this.width = width;
    this.height = height;
}
// Rectangle.prototype = Shape.prototype;
Object.setPrototypeOf(Rectangle.prototype,Shape.prototype)
Rectangle.prototype.area = function () {
    return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
    return (this.width + this.height) * 2;
}
Rectangle.prototype.toString = function () { 
    return ("width : " + this.width + " height: " + this.height +
    " area: " +this.area()+" perimeter: "+this.perimeter());
}
// var shape = new Shape(); throw error
var newRect = new Rectangle(12, 10);
console.log(newRect.toString());

// function circle(raduis) {
//     this.raduis=raduis
// }
// circle.prototype = Shape.prototype;
// var circle1 = new circle(5);
//  console.log(circle1.area());










