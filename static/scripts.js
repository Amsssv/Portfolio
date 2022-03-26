const buttons = document.querySelectorAll('.pagination__button');

const renderItem = item => new DOMParser().parseFromString(`
    <div class="feature__article article">
        <article class="article__item">
            <div class="article__column-photo">
                <a href="#" class="article__image ibg">
                    <img src="${item.photo}" alt="article image" srcSet="" class="image">
                </a>
            </div>
            <div class="article__column-text">
                <div class="article__name">
                    <a href="#" class="article__title">${item.name}</a>
                </div>
                <div class="article__info">
                    <div class="article_date date">
                        <p class="date__post">${item.year}</p>
                    </div>
                    <div class="article__theme theme">
                        <p class="theme-name">${item.theme}</p>
                    </div>
                </div>
                <div class="article__description">
                    <p class="article__text">${item.description}</p>
                </div>
            </div>
        </article>
    </div>`, 'text/html').body.firstChild;

const fetchItems = (pageNumber) => new Promise((resolve, reject) => {
    const url = new URL("http://localhost:3000/list");
    url.searchParams.append('page', pageNumber);
    fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

const render = (data) => {
    const list = document.querySelector(".feature__body");
    list.innerHTML = '';
    data.items.forEach(item => list.append(renderItem(item)));
}

const updatePagination = (pageNumber) =>
    buttons.forEach(element => element.classList.toggle('pagination__button--active', element.id === pageNumber));

const buttonClickHandler = (event) => {
    const pageNumber = event.target.id
    fetchItems(pageNumber)
        .then(data => render(data))
        .catch(error => console.log(error));
    updatePagination(pageNumber);
};

buttons.forEach(element => element.addEventListener('click', buttonClickHandler))
