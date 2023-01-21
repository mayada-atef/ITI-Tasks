var body = document.getElementsByTagName("body")[0]
var input = document.getElementsByTagName("input")[0]
var submitButton=document.getElementById("submitButton")
// const timeOut =
//  setTimeout(function () { alert("you must sumbit form in 30 second") },2000);

body.addEventListener("contextmenu", rightClick)
 function rightClick(event) {
    event.preventDefault()
}

input.addEventListener("keydown", function (event) {
    alert ("you pressed '"+ event.key +"' key with ascii code '" +event.key.charCodeAt() +"'" )
})




submitButton.addEventListener("click", function () {
    
    alert("success submit")
    clearTimeout(timeOut);
})