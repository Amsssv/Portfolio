
// grab the source
const source = document.querySelector("#city-template").innerHTML;

// compile it using Handlebars
const template = Handlebars.compile(source);

const context = {
    cities: [
        {
            name: "New York City",
            population: 8623000
        },
        {
            name: "Los Angeles",
            population: 3971000
        },
        {
            name: "Chicago",
            population: 2716000
        },
        {
            name: "Houston",
            population: 2313000
        },
        {
            name: "Philadelphia",
            population: 1567000
        }
    ]
};
// get the HTML after passing the template the context
const html = template(context);

// get the element to set the new HTML into
const destination = document.querySelector(".introduction");

// set the new HTML
destination.innerHTML = html;

