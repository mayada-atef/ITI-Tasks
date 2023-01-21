var inputs = document.querySelectorAll(".input-form input ,.div-form select")
var radio = document.getElementsByName("gender");
var sports = document.getElementsByName("sports");


function validateName(value) {
    var nameError= document.getElementById("nameError");
    if ( value == "") {  
         nameError.classList.remove("diplay-none")
    }
    else {
         nameError.classList.add("diplay-none") 
         
    }
}
function validateEmail(value) {
    var emailError = document.getElementById("emailError");
    if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value))) {
      
        emailError.classList.remove("diplay-none")
    }
     else {
         emailError.classList.add("diplay-none") 
    }
}
function validatePassword(value) {
     var passwordError = document.getElementById("passwordError");
     if ( value.length!=8) {
        passwordError.classList.remove("diplay-none")
    }
     else {
         passwordError.classList.add("diplay-none") 
    }
}
function validateSports(sports) {
    var sportsError = document.getElementById("sportsError");
    var checked=0
    for (var i = 0; i < sports.length; i++){
        if (sports[i].checked) {
            checked++;
        }
    }

    if (checked<2) {
       sportsError.classList.remove("diplay-none")
    }
     else {
         sportsError.classList.add("diplay-none") 
    }
}
function validateGender(gender) {
     var genderError = document.getElementById("genderError");
     if (gender[0].checked==false && gender[1].checked==false ) {
       genderError.classList.remove("diplay-none")
    }
     else {
         genderError.classList.add("diplay-none") 
    }
}
function validateCountry(value) {
    var countryError= document.getElementById("countryError");
    if ( value == "") {  
         countryError.classList.remove("diplay-none")
    }
    else {
         countryError.classList.add("diplay-none") 
         
    }
}

function validation() { 
  
    for (let i = 0; i < inputs.length; i++) {
        //   console.log(inputs[i].name + inputs[i].value);
        if (inputs[i].name == "name") {
           validateName(inputs[i].value);  
        }
        if (inputs[i].name == "email") {
           validateEmail(inputs[i].value);  
        }
          if (inputs[i].name == "password") {
           validatePassword(inputs[i].value);  
        }
         if (inputs[i].name == "country") {
           validateCountry(inputs[i].value); 
            
        }
    }
    validateGender(radio); 
    validateSports(sports);  
}

function resetErrorMessages() {
    
    var errorDivs =document.querySelectorAll("#countryError,#genderError,#sportsError, #nameError, #emailError, #passwordError")
    for (var i = 0; i < errorDivs.length; i++){
        errorDivs[i].classList.add("diplay-none")
    }
}