jQuery(function ($) {

    'use strict';  
               
    // -------------------------------------------------------------
    //  Backstretch slide for main body
    // -------------------------------------------------------------

    (function () {
    
        $(".bg-slider").backstretch([ "images/slider/2.jpg","images/slider/1.jpg","images/slider/3.jpg"], {fade: 750,duration: 3000});

        $(".bg-slider.box-layout").backstretch([ "images/slider/2.jpg","images/slider/3.jpg"], {fade: 750,duration: 3000});
        
        $(".bg-slider.full-width").backstretch([ "images/slider/1.jpg","images/slider/3.jpg", "images/slider/2.jpg"], {fade: 750,duration: 3000});

    }());
               
    // -------------------------------------------------------------
    //  YTPlayer Video Body Background
    // -------------------------------------------------------------

    $(function(){

      jQuery("#bg-video").YTPlayer({
        containment:'body',
        autoPlay:true, 
      });

    });


    // -------------------------------------------------------------
    //  Sticky Nav
    // -------------------------------------------------------------

    
    (function () {

        $(window).scroll(function() {
            var nav = $('.home-banner .navbar');
            var $this = $(this);

            if($this.scrollTop() > 735) {
                nav.addClass('sticky-nav animated fadeInDown');
            }
            else {
                nav.removeClass('sticky-nav animated fadeInDown');
            }
        });

    }()); 

               
    // -------------------------------------------------------------
    //  Countdown
    // -------------------------------------------------------------

    (function () {

        $("#countdown").countdown({
            date: "29 august 2017 12:00:00",
            format: "on"
        });
    
    }());

    // -------------------------------------------------------------
    //  Owl Carousel
    // -------------------------------------------------------------

    (function() {

        $(".clients-slider").owlCarousel({
            items:4,
            nav:true,
            autoplay:true,
            dots:false,
            navText: false,
            responsive: {
                0: {
                    items: 1,
                    slideBy:1
                },
                480: {
                    items: 2,
                    slideBy:1
                },
                768: {
                    items: 3,
                    slideBy:1
                },
                991: {
                    items: 4,
                    slideBy:1
                },
            }                                  
        });              

    }());

    // -------------------------------------------------------------
    //  Cubeportfolio
    // -------------------------------------------------------------

    
    (function () {
        
        $('#portfolio-item').cubeportfolio({
            filters: '#portfolio-menu',
	        loadMore: '#portfolio-menu',
            animationType: 'sequentially',
            gapVertical: 30,
            gapHorizontal: 0,           

	        });

    }()); 

}); // Main js end

