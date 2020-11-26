$(document).ready(function () {
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,
	})

	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'positionFromTop': 300
	})

	$(".dropdown-toggle").click(function (event) {
		event.preventDefault();
		$(".dropdown-list").toggle();

	});

	$(".toTop").click(function (event) {
		event.preventDefault();
		$("html, body").animate({
				scrollTop: 0
			},
			300);
	});
});
