// responsive menu open function
$("#ham-button-open").click(function(){
    $('#nav-menu').slideDown("slow");
    $('#nav-menu').addClass("menu-items position-absolute");
    $("#menu-icon").animate({right: '0px'});
});
// responsive menu close function
$("#ham-button-close").click(function(){
    $('#nav-menu').slideUp("slow", () => {
        $('#nav-menu').removeClass("menu-items position-absolute");
    });
    $("#menu-icon").animate({right: '-30px'});
});
// Nav bar after scroll change function
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 60 ){
            $('#my-navbar').removeClass('position-absolute m-3');
            $('#my-navbar').addClass('navbar-scroll');
        }
        else{
            $('#my-navbar').removeClass('navbar-scroll');
            $('#my-navbar').addClass('position-absolute m-3');
        }
    });
});
// excercise card items animation
$(function () {
    $('#card').waypoint(function (direction) {
        $('#card').css({"top": "-80px", "transition": "1s", 'opacity': 1});
    },{
        offset: '100%'
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 40 ){
            $('#card').css({"top": "-80px", "transition": "1s", 'opacity': 1});
        }
        else{
            $('#card').css({"top": "200px", "transition": "1s", 'opacity': 0});
        }
    });
});

// about animation on screnview

$(function () {
    $('#about').waypoint(function (direction) {
        $('#about-heading').addClass('animate__animated animate__flip opacity-100');
        $('#about-right').addClass('animate__animated animate__backInRight opacity-100');
        $('#about-left').addClass('animate__animated animate__backInLeft opacity-100');
    }, {
        offset: '75%'
    })
})
$(function () {
    $('#about').waypoint(function (direction) {
        $('#about-heading').addClass('animate__animated animate__flip opacity-100');
        $('#about-right').addClass('animate__animated animate__backInRight opacity-100');
        $('#about-left').addClass('animate__animated animate__backInLeft opacity-100');
    }, {
        offset: '10%'
    });
})

// about animation off screnview

$(function () {
    $('#about').waypoint(function (direction, something) {
        $('#about-heading').removeClass('animate__animated animate__flip opacity-100');
        $('#about-right').removeClass('animate__animated animate__backInRight opacity-100');
        $('#about-left').removeClass('animate__animated animate__backInLeft opacity-100');
    }, {
        offset: '85%'
    })
})
$(function () {
    $('#about').waypoint(function (direction, something) {
        $('#about-heading').removeClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '5%'
    })
})

// form heading animation

$(function () {
    $('#add-service').waypoint(function (direction) {
        $('#form-heading').addClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '75%'
    })
})

$(function () {
    $('#add-service').waypoint(function (direction) {
        $('#form-heading').addClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '10%'
    });
})
$(function () {
    $('#add-service').waypoint(function (direction, something) {
        $('#form-heading').removeClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '85%'
    })
})

$(function () {
    $('#add-service').waypoint(function (direction, something) {
        $('#form-heading').removeClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '5%'
    })
})

$(function () {
    $('#add-service').waypoint(function (direction) {
        $('#form-heading').addClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '75%'
    })
})

//quote heading animation

$(function () {
    $('#quote').waypoint(function (direction) {
        $('#quote-heading').addClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '75%'
    })
})

$(function () {
    $('#quote').waypoint(function (direction) {
        $('#quote-heading').addClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '10%'
    });
})
$(function () {
    $('#quote').waypoint(function (direction, something) {
        $('#quote-heading').removeClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '85%'
    })
})

$(function () {
    $('#quote').waypoint(function (direction, something) {
        $('#quote-heading').removeClass('animate__animated animate__flip opacity-100');
    }, {
        offset: '5%'
    })
})