let audioSrcs = [ "tiktoak.wav","rain.wav" ,"grass.wav"];
let audio = document.getElementById("audio");
var play = document.getElementById("play");
var repeat = document.getElementById("repeat");
var shuffle=document.getElementById("shuffle");
var played = document.getElementById("played");
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var table = document.getElementsByTagName("table")[0];
var mode;
audio.src="audio/"+audioSrcs[0];
audioSrcs.forEach(element => {
    createHtmlElment(table, "tr", "",element);
});
        
repeat.addEventListener("click", () => {
    mode = "repeat";
    doBasedONMode();   
    repeat.classList.add("clicked");
    play.classList.remove("clicked");
    shuffle.classList.remove("clicked");

})
play.addEventListener("click", () => {
    mode = "play"
    doBasedONMode();
    play.classList.add("clicked");
  
    repeat.classList.remove("clicked");
    shuffle.classList.remove("clicked");
})
shuffle.addEventListener("click", () => {
    mode = "shuffle"
    shuffle.classList.add("clicked"); 
     
    play.classList.remove("clicked");
    repeat.classList.remove("clicked");
    doBasedONMode();
})
function doBasedONMode() {
    var i = 0;
    if (mode == "play") {
        audio.play();
        //   createHtmlElment(table, "tr", "", audioSrcs[0]);
        var songs = document.getElementsByTagName("tr");
        songs[0].style.backgroundColor ="green";
        audio.addEventListener("ended", function (e) {
            if (i < audioSrcs.length - 1) {
            i++;
            audio.src="audio/"+audioSrcs[i];
                e.target.play(); 
                for (let index = 0; index <songs.length; index++){
                    if (i == index) {
                        songs[index].style.backgroundColor = "green"; 
                        continue;
                    }
                    songs[index].style.backgroundColor ="transparent";
                           
                }
            // createHtmlElment(table, "tr", "", audioSrcs[i]);
            }
            else {
                i = 0;
            }
           
    })
    }
    if (mode == "repeat") {
        audio.play();
        var songs = document.getElementsByTagName("tr");
        songs[0].style.backgroundColor ="green";
        audio.addEventListener("ended", function (e) {
            if (i>=0 && i < audioSrcs.length-1) {
                i++;
            audio.src="audio/"+audioSrcs[i];
                e.target.play();
            }
            else {
                i = 0;  
                audio.src="audio/"+audioSrcs[i];
                e.target.play();
            }
            for (let index = 0; index <songs.length; index++){
                    if (i == index) {
                        songs[index].style.backgroundColor = "green"; 
                        continue;
                    }
                    songs[index].style.backgroundColor ="transparent";
                           
                }
        
           
    })
    }
    if (mode == "shuffle") {
       
        var shuffleArray = audioSrcs.sort(() => Math.random() - 0.5);
           table.innerHTML = "";
            shuffleArray.forEach(element => {
             createHtmlElment(table, "tr", "",element);
            });
        audio.src ="audio/"+shuffleArray[0];
        audio.play();
        var songs = document.getElementsByTagName("tr");
        songs[0].style.backgroundColor ="green";
        audio.addEventListener("ended", function (e) {
            if (i>=0 && i < shuffleArray.length-1) {
                i++;
                e.target.src ="audio/"+shuffleArray[i];
                e.target.play();

            }
            else {
                shuffleArray.sort(() => Math.random() - 0.5);
                i = 0;  
                 e.target.src ="audio/"+shuffleArray[i];
                e.target.play();
            }
          
               for (let index = 0; index <songs.length; index++){
                    if (i == index) {
                        songs[index].style.backgroundColor = "green"; 
                        continue;
                    }
                    songs[index].style.backgroundColor ="transparent";
                           
                }
           
    })
    }
}

function createHtmlElment(parent, child, classes, text) {
    var element = document.createElement(child);
    parent.append(element);
    if (classes) element.className=classes;
    if (text) element.innerText = text;
    return element;
}

