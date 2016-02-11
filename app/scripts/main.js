
$(document).ready(function () {
    var theHeight = $(window).height() - 156;

    function theHeightResize() {
        var theHeight = $(window).height() - 156;
        $('.logo-wrapper').css('height', window.theHeight);  
        console.log(theHeight);
    } 
    theHeightResize();
    $(window).resize(theHeightResize);   

    // $(window).resize(function() {
    // $('.logo-wrapper').css(‘height’, window.innerHeight+’px’);
    // });

    function stickyNav() { 
        $(".logo-wrapper").css('height', theHeight);
        if ($(window).scrollTop() > theHeight) {
            $('.nav').addClass('nav-fixed');
            $('.title').addClass('title-fixed');
            $('.title').stop().animate({height: "60px"},50);
        }
        if ($(window).scrollTop() < theHeight - 1) {
            $('.nav').removeClass('nav-fixed');
            $('.title').removeClass('title-fixed');
            $('.title').stop().animate({height: "110px"},50);
        } 
    }
    stickyNav();
    $(window).resize(stickyNav);
    $(window).scroll(stickyNav);

    function resizeNav() {
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
        });    
    }
    resizeNav();

});    






