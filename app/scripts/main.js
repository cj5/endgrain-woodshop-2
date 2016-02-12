
// $(document).ready(function () {
//     var theHeight = $(window).height() - 156;

//     function theHeightResize() {
//         var theHeight = $(window).height() - 156;
//         $('.logo-wrapper').css('height', theHeight);
//         $(".logo-wrapper").css("height", theHeight);  
//         console.log(theHeight);
//     } 
//     theHeightResize();
//     $(window).resize(theHeightResize);   

//     function stickyNav() { 
//         $(".logo-wrapper").css('height', theHeight);
//         if ($(window).scrollTop() > theHeight) {
//             $('.nav').addClass('nav-fixed');
//             $('.title').addClass('title-fixed');
//             $('.title').stop().animate({height: "60px"},50);
//         }
//         if ($(window).scrollTop() < theHeight - 1) {
//             $('.nav').removeClass('nav-fixed');
//             $('.title').removeClass('title-fixed');
//             $('.title').stop().animate({height: "110px"},50);
//         } 
//     }
//     stickyNav();
//     $(window).resize(stickyNav);
//     $(window).scroll(stickyNav);

//     function resizeNav() {
//         $('a').click(function(){
//             $('html, body').animate({
//                 scrollTop: $( $.attr(this, 'href') ).offset().top
//             }, 500);
//             return false;
//         });    
//     }
//     resizeNav();

// });    

$(document).ready(function () {
    updateContainer();
    
    $(window).resize(function() {
        updateContainer();
    });
    

    function updateContainer() {
        var theHeight = $(window).height() - 156;
        $('.logo-wrapper').css('height', theHeight);
    }

    $(window).scroll(function () {
        var theHeight = $(window).height() - 156;

    if ($(window).scrollTop() > theHeight) {
        $('.nav').addClass('nav-fixed');
        $('.title').addClass('title-fixed');
        $('.title').stop().animate({height: "60px"}, 100);
    }
    if ($(window).scrollTop() < theHeight - 1) {
        $('.nav').removeClass('nav-fixed');
        $('.title').removeClass('title-fixed');
        $('.title').stop().animate({height: "110px"}, 100);
    }
  });
});

    // function stickyNav() {
    //     var theHeight = $(window).height() - 156;
        
    //     if ($(window).scrollTop() > theHeight) {
    //       $('.nav').addClass('nav-fixed');
    //       $('.nav').addClass('title-fixed');
    //       $('.title').stop().animate({height: "60px"},50);
    //     }
    //     if ($(window).scrollTop() < theHeight - 1) {
    //       $('.nav').removeClass('nav-fixed');
    //       $('.nav').removeClass('title-fixed');
    //       $('.title').stop().animate({height: "110px"},50);
    //     }
    // }    


    // function resizeNav() {
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
        });    
    // }




       





