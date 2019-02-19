$(document).ready(function () {
    console.log("ready!");

    $(".subnavbar li a").click(function() {
        $(this).parent().addClass('selected').siblings().removeClass('selected');
        console.log("salam");
    });

    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
     });

});