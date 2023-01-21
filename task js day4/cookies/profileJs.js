console.log("hi from profile js");

var visits = getCookie("visits");
var coloredSpan = document.getElementsByClassName("Fav-color");
var image = document.getElementById("profile-img")
console.log(image);
var nameSpan = document.getElementById("name");
var visitsSpan = document.getElementById("visits");
var logOutButton = document.getElementById("logOut");

// gender image
if (getCookie("gender") == "male") {
    image.src = "images/1.jpg"
}
else if (getCookie("gender") == "female") {
    image.src = "images/2.jpg"
}
// name
nameSpan.innerText = getCookie("name");

// increase visits in cookie visit

setCookie("visits", (Number(visits)+1), 7);
visitsSpan.innerText = getCookie("visits");
// color 
var color = getCookie("color");
for (var i = 0; i < coloredSpan.length; i++){
    coloredSpan[i].style.color = color;
}




 

function getCookie(key) {
    var cookies = document.cookie;
    var cookieStrings = cookies.split("; ");
    for (var i = 0; i < cookieStrings.length; i++){
        if (cookieStrings[i].startsWith(key)) {
            cookieValue = cookieStrings[i].split("=")[1]
            return cookieValue;
        }
    }

}
function setCookie(key, value,exdays) {
    const date = new Date(); 
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000)); 
    var expireDate = "expires="+ date.toUTCString();
    document.cookie = key + "=" + value + ";" + expireDate + ";path=/";
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = cookie.substr(0, eqPos) ;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function checkCookie(key) {
    var cookieValue = getCookie(key);
    if (cookieValue) {
        return true
    }
    else {
        return false
    }
}

logOutButton.addEventListener("click", function () {
    deleteAllCookies();
    location.href="index.html"
})




 
