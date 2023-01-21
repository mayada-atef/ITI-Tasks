
$.fn.sliding = function (clickedImg) {
    var clickedImg = clickedImg;
    var images = $("img");
    
    var div =$("<div id='sliderDiv'> <div id='closeDiv'><button id='closeSlider'><i class='fa-solid fa-xmark'></i></button></div><div id='sliderConent'> <div><button id='previousBtn'> < </button></div> <img src='' class='imgSlider' ><div> <button id='nextBtn'> > </button></div></div></div> ")
    div.css({
        "top": "0px",
        "left": "0px"   
    })
    
    $("body").append(div)
    $(".imgSlider").attr("src", clickedImg.attr("src"));
   
       
    $("#previousBtn").on("click", function () {
        $('.imgSlider').hide();
        if ((clickedImg.prev().attr("src")) != undefined) {
            $(".imgSlider").fadeIn("3000").attr("src", clickedImg.prev().attr("src")); 
            clickedImg = clickedImg.prev();    
        }
        else {
            clickedImg = images.eq(images.length - 1);
            $(".imgSlider").fadeIn("3000").attr("src", images.eq(images.length-1).attr("src"));    
        }
        
    })
    $("#nextBtn").on("click", function () {
        $('.imgSlider').hide();
       if ((clickedImg.next().attr("src")) != undefined) {
           $(".imgSlider").fadeIn("3000").attr("src", clickedImg.next().attr("src"));
           clickedImg = clickedImg.next();
        }
       else {
           clickedImg =images.eq(0) ; 
            $(".imgSlider").fadeIn("3000").attr("src", images.eq(0).attr("src"));    
        }
    })
    $("#closeSlider").on("click", function () {
        div.remove();   
    })
}

$("img").on("click", function () {
    $("img").sliding($(this));
})


