(function () {
	const Button = document.querySelector('.carousel-control-next');
	const caruselItem = document.querySelectorAll('.carousel-item');
	var i = 0
	Button.addEventListener('click', function () {
		i++;
		caruselItem[i].classList.add('active');
	});
})()




