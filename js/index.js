document.addEventListener("DOMContentLoaded", function (event) {

	function animate() {
		var wintop = window.pageYOffset;

		var jsAnimate = document.querySelectorAll(".js-animate");

		[].forEach.call(jsAnimate, function (elem, i) {
			if (wintop > wintop + elem.getBoundingClientRect().top - (window.innerHeight / 1.15)) {
				elem.classList.add("animated");
			}
		})
	}

	window.onscroll = function () {
		animate();
		var header = document.getElementById("header");
		if (window.scrollY > 0) {
			header.classList.add("scroll");
		} else {
			header.classList.remove("scroll");
		}
	};

	animate();

}, false);