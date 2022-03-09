(function () {
	const Button = document.querySelector('.carousel-control-next');
	const caruselItem = document.querySelectorAll('.carousel-item');
	Button.addEventListener('click', function () {
		for (var i = 0; i < caruselItem.length; i++) {
			caruselItem[i].classList.toggle('active');
		};
	});
})()