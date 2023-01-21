var svg = document.getElementById("svg");
var rect = document.getElementById("rect");
var circle = document.getElementById("circle");
var line = document.getElementById("line");
var clear = document.getElementById("clear");

rect.addEventListener("click", () => {
   svg.innerHTML+='<rect width="100" height="50" x="20" y="20"style="fill:black;stroke-width:10;" /> '
})
circle.addEventListener("click", () => {
 
   svg.innerHTML+=' <circle cx="200" cy="200" r="50"  fill="black" />'
})
line.addEventListener("click", () => {
 
   svg.innerHTML+='<path stroke-width="2" d="M390 390 L320 320" stroke="black"/> '
})
clear.addEventListener("click", () => {
 
    svg.innerHTML = "";
})

