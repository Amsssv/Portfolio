(function () {
	const buttons = Array.from(document.querySelectorAll('.pagination__list'));
	const buttonActive = 'pagination__list--active';

	const selectItem = index => {
		buttons.forEach(element => element.classList.remove(buttonActive));
		buttons[index].classList.add(buttonActive);
	}

	const paginationItemClickHandler = (event) => {
		const currentElement = event.target;

		if (currentElement.classList.contains(buttonActive)) {
			return;
		}
		const index = buttons.findIndex(element => currentElement === element);

		selectItem(index);
	}

	buttons.forEach((element) => {
		element.addEventListener("click", paginationItemClickHandler);
	})
})()
