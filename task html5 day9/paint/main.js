var PaintCanvs = document.getElementById("PaintCanvs");
let ctx = PaintCanvs.getContext("2d");

var rect = document.getElementById("rect");
var circle = document.getElementById("circle");
var line = document.getElementById("line");
var clear = document.getElementById("eraser");
var randomLine = document.getElementById("random");
var stroke = document.getElementById("stroke");
var fill = document.getElementById("fill");

var mode;
let startX=0;
let startY = 0;
let endY = 0;
let endX = 0;
let isDown = false;
var snapShot;
let fillIsChanged = false;

stroke.addEventListener("change", () => {
     ctx.strokeStyle= stroke.value;
})
fill.addEventListener("change", () => {
    fillIsChanged = true;
    ctx.fillStyle = fill.value;
})
rect.addEventListener("click", () => { mode = "rect" })
circle.addEventListener("click", () => {mode="circle"})
line.addEventListener("click", () => {mode="line"})
clear.addEventListener("click", () => { mode = "clear" })
randomLine.addEventListener("click", () => { mode = "randomLine" })

PaintCanvs.onmousedown = (e) => {handleMouseDown(e)}
PaintCanvs.onmouseup=(e)=>{handleMouseUP(e)}
PaintCanvs.onmouseout=(e)=>{handleMouseOut(e)}
PaintCanvs.onmousemove=(e)=>{handleMouseMove(e)}

function drawLine(startX,startY, endX, endY) {
    ctx.beginPath()
     ctx.moveTo(startX,startY)
    ctx.lineTo(endX,endY)
    ctx.closePath()  
    ctx.stroke()
} 
function drawCircle(startX,startY,raduis) {
    ctx.beginPath()   
    ctx.arc(startX, startY, raduis, 0, 2 * Math.PI);
    if (fillIsChanged) {
        ctx.fill();
    }
    else {
        ctx.stroke()

    }
} 
function drawRect(startX,startY,width,height) {
    ctx.beginPath();
     ctx.rect(startX,startY,width,height);
    if (fillIsChanged) {
        ctx.fill();
    }
    else {
        ctx.stroke()
    }
    
  
}
function takeSnapShot() {
    snapShot = ctx.getImageData(0, 0, PaintCanvs.width, PaintCanvs.height);
}
function restoreSnapShot() {
    ctx.putImageData(snapShot,0,0);
}
function handleMouseDown(e) {
    isDown = true;
    startX = e.offsetX;
    startY = e.offsetY; 
    takeSnapShot();
}
function handleMouseOut(e) {
    isDown = false;
}
function handleMouseMove(e) {
    if (!isDown) {
        return
    }
    endX = e.offsetX;
    endY = e.offsetY;
    if (mode == "rect") {
        restoreSnapShot();
        drawRect(startX, startY, endX - startX, endY - startY);   
    }
    if (mode == "line") {
         restoreSnapShot();
        drawLine(startX, startY, endX, endY);  
    }
    if (mode == "circle") { 
        restoreSnapShot();
        var raduis = Math.sqrt(((endX - startX) ** 2) + ((endY - startY) ** 2));
        drawCircle(startX, startY,raduis);
    }
    if (mode == "clear") {
         ctx.clearRect(e.offsetX-10,e.offsetY-10,20,20);
     }
    if (mode == "randomLine") {
        ctx.beginPath();
        drawLine(startX, startY, endX, endY);
        startX = endX;
        startY = endY;
        ctx.stroke();
    }
}    
function handleMouseUP(e) {
    isDown = false;  
    if (mode == "rect") {
        restoreSnapShot();
        drawRect(startX, startY, endX - startX, endY - startY);
    }
    if (mode == "line") {
        restoreSnapShot();
        drawLine(startX, startY, endX, endY);
    }
    if (mode == "circle") { 
        restoreSnapShot();
        var raduis = Math.sqrt(((endX - startX) ** 2) + ((endY - startY) ** 2));
        drawCircle(startX, startY,raduis);
    }    
}






/************************************* */
/************************************ */
// PaintCanvs.onclick = (e) => {
//     var canvsClicked = false;

//     if (mode == "line") {
//         PaintCanvs.onmousedown = (e) => {
//             console.log("mouse down");
//             canvsClicked = true;
//             console.log("1",e.offsetX, e.offsetY);
//             startX = e.offsetX;
//             startY = e.offsetY;   
//         }
//         // PaintCanvs.onmousemove = (e) => {
//         // if (canvsClicked) {
//         //     endX = e.offsetX;
//         //     endY = e.offsetY;
//         //     console.log("mouse move");
//         //     console.log("2", endX, endY);
//         //     drawLine(startX, startY, endX, endY);
        
//         //     }
//         // }
//         PaintCanvs.onmouseup = (e) => {
//             if (canvsClicked) {
//                 canvsClicked = false
//                 endX = e.offsetX;
//                 endY = e.offsetY;
//                 console.log("mouse down");
//                 drawLine(startX, startY, endX, endY);
//             }
//         }
     
//     }
//     if (mode == "rect") {
//         console.log("rect MODE");
//         PaintCanvs.onmousedown = (e) => {
//             canvsClicked = true;
//             startX = e.offsetX;
//             startY = e.offsetY;  
//             console.log(startX,startY);
//         }
//         PaintCanvs.onmouseup = (e) => {
//             if (canvsClicked) {
//                 canvsClicked = false
//                 endX = e.offsetX;
//                 endY = e.offsetY;
//                 drawLine(startX, startY, endX-startX, endY-startY);
//                 endX = 0; endY = 0;
//                 startX = 0; startY = 0;
//             }
//         }
     
// }
// }


