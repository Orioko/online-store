$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        margin:80,
        nav:false,
        dots:true,
        items: 3,
        smartSpeed: 250,
        touchDrag: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

$(document).ready(function(){
    const slider = $("#slider-brand").owlCarousel({
        loop:true,
        margin:240,
        nav:false,
        dots:true,
        items: 3,
        smartSpeed: 250,
        touchDrag: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});