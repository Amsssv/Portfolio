
// grab the source
const source = document.querySelector("#city-template").innerHTML;

// compile it using Handlebars
const template = Handlebars.compile(source);

// async function loadJson() {
//     const { default: jsonConfig2 } = await import('./test.json', {
//         assert: {
//             type: "json"
//         }
//     });
//     console.log(jsonConfig2);
// }

const article = {
    name: "Coding",
    year: "2016",
    theme: "json",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequuntur inventore quibusdam accusantium perspiciatis quisquam asperiores harum culpa voluptas nostrum iste sequi autem itaque consequatur non dolores est tempore cum.",
}




// get the HTML after passing the template the context
const html = template(article);

// get the element to set the new HTML into
const destination = document.querySelector(".introduction");

// set the new HTML
destination.innerHTML = html;

