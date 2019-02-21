$(document).ready(function () {
    console.log("ready!");

    $(".subnavbar li a").click(function() {
        $(this).parent().addClass('selected').siblings().removeClass('selected');
        console.log("salam");
    });

    var num = 50;

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.menu-home').addClass('fixed');
        } else {
            $('.menu-home').removeClass('fixed');
        }
    });

});