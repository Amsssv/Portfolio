(function () {
	const ButtonNext = document.querySelector('.carousel-control-next');
	const caruselItem = document.querySelectorAll('.carousel-item');
	const ButtonPrev = document.querySelector('.carousel-control-prev');
	let i = 0
	ButtonNext.addEventListener('click', function () {
		if (caruselItem[i].classList.contains('active')) {
			caruselItem[i].classList.remove('active');
		}
		if (i >= (caruselItem.length - 1)) {
			i = 0;
		} else {
			i++;
		}
		caruselItem[i].classList.add('active');
		console.log(i);
	});

	ButtonPrev.addEventListener('click', function () {
		if (caruselItem[i].classList.contains('active')) {
			caruselItem[i].classList.remove('active');
		}
		if (i <= 0) {
			i = (caruselItem.length - 1);
		} else {
			i--;
		}
		caruselItem[i].classList.add('active');
	});
})()

