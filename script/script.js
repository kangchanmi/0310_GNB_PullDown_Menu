$(function () {             /* "메인메뉴" */
    $("#gnb>ul#mainMenu>li").mouseover(function () {
        /*반복 X*/                                /* 1000 = 1초 */
        $(this).children("ul").stop().fadeIn(1000);
//        $(this).children("ul").stop().slideDown(800);
        /*개별 서브메뉴 슬라이드*/

        /*전체 서브메뉴 슬라이드*/
//                $(".subMenu").stop().slideDown(800);
    });

    $("#gnb>ul#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(1000);
//        $(this).children("ul").stop().slideUp(800);

    });

});
