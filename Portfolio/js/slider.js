(function () {
	const Button = document.querySelector('.carousel-control-next');
	const caruselItem = document.querySelectorAll('.carousel-item');
	let i = 0
	Button.addEventListener('click', function () {
		if (caruselItem[i].classList.contains('active')) {
			caruselItem[i].classList.remove('active');
		} 
		caruselItem[i+1].classList.add('active');
		i++;
		if (i >= caruselItem.length) {
			 i = 0;
		}
	});
})()




