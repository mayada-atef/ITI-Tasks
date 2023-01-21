
// console.log($("img"));

var newImg;
$("img").hover(function() {
    // console.log("in")
    newImg = $('<img src="" alt="" class="image" >');
    $(this).mousemove(function(e) {
    // console.log(e.pageX);
    // console.log(e.pageY);
  
          newImg.css({
        "top":e.pageY+5,
        "left": e.pageX+5
          }) 
        if (newImg.width() + 5 + e.pageX > screen.width) {
            console.log(screen.width+5+e.pageX);
            // console.log("done");
        newImg.css({
        "top":e.pageY+5,
        "left": e.pageX+5-newImg.width()
          }) 
        }
        
    
})
 

 
    newImg.attr({
        src: $(this).attr("src")
    })
    $("body").append(newImg);
},
    function () {
        // console.log("out");
    newImg.remove();
    });




console.log(screen.width);

// console.log(screen.height);