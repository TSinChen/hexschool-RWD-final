$(document).ready(function () {
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

	$(".nav-toggle").click(function () {
		$(".header").toggleClass("open");
	});

	$(".heart").click(function () {
		$(this).find(".fas").toggleClass("liked");
	});

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

	$(".to-top").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 500);
	});
});
