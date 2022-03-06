
const burger = document.querySelector('.header__burger');
if (burger) {
	const headerMenu = document.querySelector('.header__menu');
	burger.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		burger.classList.toggle('active');
		headerMenu.classList.toggle('active');
	});
}

