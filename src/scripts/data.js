// we are mimicking database
const movies = [
  {
    id: 1,
    title: "The Good Will Hunting",
    synopsis:
      "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguire, who helps him recover.",
    image: "./src/img/Good_Will_Hunting.png",
  },
  {
    id: 2,
    title: "Dead Poets Society",
    synopsis:
      "John Keating, a progressive English teacher, tries to encourage his students to break free from the norm, go against the status quo and live life unapologetically.",
    image: "./src/img/dead-poets-society.jpg",
  },
  {
    id: 3,
    title: "Fight Club",
    synopsis:
      "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
    image: "./src/img/fight-club.jpeg",
  },
  {
    id: 4,
    title: "Amélie",
    synopsis:
      "Despite being caught in her imaginative world, Amélie, a young waitress, decides to help people find happiness. Her quest to spread joy leads her on a journey where she finds true love.",
    image: "./src/img/Amelie_poster.jpg",
  },
];

let data = JSON.stringify(movies);
export { data };
