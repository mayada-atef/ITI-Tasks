var nameInput = document.querySelector(".register-input #name")
var color = document.querySelector(".register-input select")
var gender = document.getElementsByName("gender");
var sumbitButton = document.getElementById("submit")
function getGender() {
    for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
       return gender[i].value;
       
    }
     }
}
function setCookie(key, value,exdays) {
    const date = new Date(); 
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000)); 
    var expireDate = "expires="+ date.toUTCString();
    document.cookie = key + "=" + value + ";" + expireDate + ";path=/";
}

// sumbition event 
sumbitButton.addEventListener("click", submitProfileData);
function submitProfileData() {
    var genderValue = getGender();
    var visits=0
    setCookie("name", nameInput.value, 7);
    setCookie("color", color.value, 7);
    setCookie("gender", genderValue, 7);
    setCookie("visits",visits, 7);
    location.href = "profile.html";
    
}