(function () {
	const ButtonNext = document.querySelector('.carousel-control-next');
	const caruselItem = document.querySelectorAll('.carousel-item');
	const ButtonPrev = document.querySelector('.carousel-control-prev');
	let i = 0
	ButtonNext.addEventListener('click', function () {
		if (caruselItem[i].classList.contains('active')) {
			caruselItem[i].classList.remove('active');
		} 
		caruselItem[i+1].classList.add('active');
		i++;
		});
		ButtonPrev.addEventListener('click', function () {

		if (caruselItem[i].classList.contains('active')) {
			caruselItem[i].classList.remove('active');
		} 
		caruselItem[i-1].classList.add('active');
		i--;
		if (i > 2) {
			i = 0;
		}
	});
})()

// if (caruselItem[i].classList.contains('active')) {
// 	caruselItem[i].classList.remove('active');
// } 
// caruselItem[i+1].classList.add('active');
// i++;
// });
// ButtonPrev.addEventListener('click', function () {

// if (caruselItem[i].classList.contains('active')) {
// 	caruselItem[i].classList.remove('active');
// } 
// caruselItem[i-1].classList.add('active');
// i--;
// });


// i++;
// console.log(i);
// if (i < caruselItem.length) {
	
// } else {
// 	i = 0;
// }