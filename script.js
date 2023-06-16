$(function(){

    // 메뉴 1. 가로a, 메뉴 4. 세로 , 메뉴 5. 세로 
    $(".nav > ul > li").mouseover(() => {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(() => {
        $(this).find(".submenu").stop().slideUp();
    });
    // 메뉴 2. 가로b
    $(".nav > ul > li").mouseover(() => {
        $(".nav > ul > li > ul").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(() => {
        $(".nav > ul > li > ul").stop().slideUp(200);
    });
    // 메뉴 3. 가로c
    $(".nav > ul > li").mouseover(() => {
        $(".nav > ul > li > ul").stop().slideDown(900);
        $("#header").addClass("on");
    });
    $(".nav > ul > li").mouseout(() => {
        $(".nav > ul > li > ul").stop().slideUp(900);
        $("#header").removeClass("on");
    });
    // 메뉴 6. 세로 
    $(".nav > ul > li").mouseover(() => {
        $(".nav > ul > li > ul").stop().fadeIn();
        $("#main").addClass("on");
    });
    $(".nav > ul > li").mouseout(() => {
        $(".nav > ul > li > ul").stop().fadeOut();
        $("#main").removeClass("on");
    });

    // 슬라이더 1. fadein slider
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);

    // 슬라이더 2. 좌우 슬라이더
    let currentIndex2 = 0;
    $(".slidewrap").append($(".slider").first().clonr(true));

    setInterval(function(){
        currentIndex2++;
        $(".sliderwrap").animate({marginLeft: -currentIndex2 * 100 + "%"}, 600);
        // $(".sliderwrap").animate({marginLeft: -100 * currentIndex2 + "%"}, 600); // 반응형

        if(currentIndex2 = 3){
            setTimeout(function(){
                $(".sliderwrap").animate({marginLeft: 0}, 0);
                currentIndex2 = 0;
            });
        }
    }, 700);

    // 슬라이더 3. 위아래 슬라이더
    let currentIndex3 = 0;
    $(".sliderwrap").append($(".slider").first().clone(true));

    setInterval(() => {
        currentIndex3++;
        $(".sliderwrap").animate({marginTop: -currentIndex3 * 300 + "px"}, 600);
        // $(".sliderwrap").animate({marginTop: -100 * currentIndex3 + "vh"}, 600); // 반응형

        if(currentIndex3 == 3){
            setTimeout(() => {
                $(".slidewrap").animate({marginTop: 0}, 0);
                currentIndex3 = 0;
            }, 700)
        }
    }, 3000);

    // Tab menu
    let tabBtn = $(".tab-btn > ul > li");
    let tabCont = $(".tab-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function(){
        const index = $(this).index(); //클릭한 번호 저장

        $(this).addClass("active").siblings().removeClass("active"); //클릭한 버튼에 클래스 추가하고 나머지 버튼은 삭제
        tabCont.eq(index).show().siblings().hide(); //클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
    });

    //pop-up layer
    $(".popup-btn").click(() => {
        $(".popup-view").show();
    });
    $(".popup-close").click(() => {
        $(".popup-view").hide();
    });
});