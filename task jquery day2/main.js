$("#menu").hover(function () {
    $("#menu").animate({
        "top": "0px",
        "left":"0px"
    })
},
    function () {
    $("#menu").animate({
        "top": "0px",
        "left":"-50px"
    }) })

$(".parentLi").on("click", function () {
    ($(".parentLi").children("div")).not($(this).children("div")).slideUp(2000);
    $(this).children("div").slideToggle(2000); 
})
























// $("h3").on("click", function () {
//     $(".hiddenList").not($(this).next()).slideUp(2000);
//     $(this).next().slideToggle(2000);
// })