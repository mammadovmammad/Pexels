    $(document).ready(function(){
        $(window).on("scroll",function(){
          var wn = $(window).scrollTop();
        if(wn > 120){
            $(".home").css("background","#232a34");
        }
        else{
            $(".home").css("background","transparent");
        }
      });
    });