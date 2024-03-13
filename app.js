//showing nav bar
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle('is-active');
    mobileLink.classList.toggle('active');
})

//close menu on click
mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <=768 && menuBars){
        mobile.classList.toggle('is-active');
        mobileLink.classList.toggle('active');
    }
})

//move the menu to left aand right
var step=100;
var stepFilter=60;
var scrolling=true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $('.highlight-wrapper').animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $('.highlight-wrapper').animate({
        scrollLeft: "+=" + step + "px"
    });
});

//for menu keys

$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
}); 