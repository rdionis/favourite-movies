// Dynamic Pills
// Description:
// There should be visual feedback while hovering over the list items. Example, the list item’s background color should change to blue on hover.
// On click, the title, image and move description should update on the left side of the list items.
// On click, the list item should also be displayed with a different background color, e.g. red.
// Instructions:
// Upload your favorite movie images and create your own design, write a function that adds and handles the dynamic pill behaviour.
// Deploy this page on  Github pages
// Hint: Refer to the representation below, for an idea of what your result should look like.

//WHAT I WANT TO IMPORT AND FROM WHERE
import { data } from "./data.js";

// I AM CONVERTING JSON INTO AN OBJECT THAT JS WILL UNDERSTAND
let parsedData = JSON.parse(data);
const section = document.querySelector("#movies");
// console.log(parsedData);

//use the find method to pass a movie

let list = document.querySelectorAll("li");

list.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    let movie = parsedData.find((movie) => movie.id == e.target.id);
    console.log(movie);
    //   console.log(obj);
    let { id, title, synopsis, image } = movie;
    //EXTRACTING KEYS FROM THE OBJECT
    let card = `<div id=${id}>
          <h2> ${title}</h2>
          <img src=${image} alt=${title}>
          <figcaption>${synopsis}</figcaption>
          </div>`;
    section.innerHTML = card;
    item.classList.remove("one");
    let movieOne = document.getElementById(e.target.id);
    movieOne.className = "one";
    //STILL DOESN'T WORK
  });
});
