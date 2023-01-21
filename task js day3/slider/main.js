imgSrcs = ["imgs/download (1).jfif", "imgs/download (2).jfif", "imgs/download.jfif"]
var index = 0;
var imgSlider = document.getElementById("img-slider");
imgSlider.src = imgSrcs[index];
function nextPhoto() {
    
    if (index < imgSrcs.length - 1) {
        index++;
    }
    else {
        index = 0;
    }
    imgSlider.src = imgSrcs[index];

}
function privousPhoto() {
      if (index >0) {
        index--;
    }
    else {
        index = imgSrcs.length-1;
    }
       
    imgSlider.src = imgSrcs[index];
}