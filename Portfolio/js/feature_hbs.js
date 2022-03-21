
// grab the source
const source = document.querySelector("#features").innerHTML;
const pagination = document.querySelector("#paginations").innerHTML;
// compile it using Handlebars
const template = Handlebars.compile(source);
const paginationCompile = Handlebars.compile(pagination);

const article = {
    items: [
        {
            photo: "./img/Feature/Rectangle 30.png",
            name: "Designing Dashboards",
            year: "2020",
            theme: "Dashboard",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
        },
        {
            photo: "./img/Feature/Rectangle 32.png",
            name: "Vibrant Portraits of 2020",
            year: "2018",
            theme: "Illustration",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
        },
        {
            photo: "./img/Feature/Rectangle 34.png",
            name: "Illustration",
            year: "2020",
            theme: "Typography",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
        },
        {
            photo: "./img/Feature/Rectangle 34.png",
            name: "Illustration",
            year: "2020",
            theme: "Typography",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
        },
        {
            photo: "./img/Feature/Rectangle 34.png",
            name: "Illustration",
            year: "2020",
            theme: "Typography",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
        },
        {
            photo: "./img/Feature/Rectangle 34.png",
            name: "Illustration",
            year: "2020",
            theme: "Typography",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet."
        },
    ]
};


const number = {
    pages: [
 
    ]
};

const totalPages = article['items'].length;
 for (let page = 1; page <= totalPages; page++){
     number['pages'].push(`{page: ${page}},`);
 }


console.log(number);
// get the HTML after passing the template the context
const html = template(article);
const num = paginationCompile(number);

// get the element to set the new HTML into
const destination = document.querySelector(".feature__body");
const navigation = document.querySelector(".pagination");

// set the new HTML
destination.innerHTML = html;
navigation.innerHTML = num;

