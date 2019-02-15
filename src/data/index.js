let characters = [{
    name: "Arya Stark",
    image: "./img/arya.jpg"
  },
  {
    name: "Cersei Lannister",
    image: "./img/cersei.jpg"
  },
  {
    name: "Daenerys Targaryen",
    image: "./img/daenerys.jpeg"
  },
  {
    name: "Sandor Clegane",
    image: "./img/dog.jpeg"
  },
  {
    name: "Khal Drogo",
    image: "./img/drogo.jpg"
  },
  {
    name: "Joffrey Baratheon",
    image: "./img/joffrey.jpg"
  },
  {
    name: "Jon Snow",
    image: "./img/jon.jpg"
  },
  {
    name: "Margery Tyrell",
    image: "./img/margery.jpeg"
  },
  {
    name: "Ned Stark",
    image: "./img/ned.jpg"
  },
  {
    name: "Peter Baelish",
    image: "./img/peter.jpg"
  },
  {
    name: "Sansa Stark",
    image: "./img/sansa.jpg"
  },
  {
    name: "Tyrion Lannister",
    image: "./img/tyrion.jpg"
  }
]


// Add Array Index as id Property to each element.
characters = characters.map((ch, idx) => {
  ch["id"] = idx;
  return ch;
});

const navMessages = [{
    id: 0,
    msg: "Click an image to begin!"
  },
  {
    id: 1,
    msg: "Geeze!!! Try Again!!"
  },
  {
    id: 2,
    msg: "Excellent!! Hit the Next One!!!"
  },
  {
    id: 3,
    msg: "You Win!!  Click an image to restart!"
  },
]

module.exports = {
  characters,
  navMessages
}