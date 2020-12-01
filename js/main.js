$(document).ready(function () {
    //讓標題的換行正常顯示
    $(window).resize(function () {
        wid = $(window).width();
        if (wid <= 576) {
            $(".header .title h2").html("咬一口<br>就無法忘懷的漢堡");
            $(".header .title h2").css("lineHeight", "1.3");
        } else {
            $(".header .title h2").html("咬一口就無法忘懷的漢堡");
            $(".header .title h2").css("lineHeight", "1");
        }
    });
    //選單切換
    $(".nav-toggle").click(function () {
        $(".header").toggleClass("open");
    });
    //加到最愛的狀態
    $(".heart").click(function () {
        $(this).find(".fas").toggleClass("liked");
    });
    //加到購物車
    let addCount = 0;
    $(".add-cart").click(function (event) {
        event.preventDefault();
        if ($(this).hasClass("added")) {
            $(this).html(`<a href="#"><i class="fas fa-shopping-cart"></i>加入購物車</a>`);
            addCount -= 1;
        } else {
            $(this).html(`<a href="#"><i class="fas fa-shopping-cart"></i>已加入購物車</a>`);
            addCount += 1;
        }
        $(this).toggleClass("added");
        $(".cart-count").html(addCount);
    });
    //回到頂端
    $(".to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    //lightbox
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true
    })
});
