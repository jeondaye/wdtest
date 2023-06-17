$(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(400);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    let currentIndex = 0;
    $(".sliderwrap").append($(".slider").first().clone(true));
    setInterval(function(){
        currentIndex++;
        $(".sliderwrap").animate({marginLeft: -100 * currentIndex + "%"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderwrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 600);
        }
    }, 3000);
});