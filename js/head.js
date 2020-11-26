$(document).ready(function () {
	$(window).resize(function () {
		wid = $(window).width();
		if (wid <= 576) {
			$(".title h2").html("咬一口<br>就無法忘懷的漢堡");
			$(".title h2").css("lineHeight", "1.3");
		} else {
			$(".title h2").html("咬一口就無法忘懷的漢堡");
			$(".title h2").css("lineHeight", "1");
		}
	});
	
	$(".nav-toggle").click(function() {
		$(".container").toggleClass("open");
	});
});
