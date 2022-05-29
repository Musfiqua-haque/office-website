const reviews = [
  {
    id: 1,
    img: "../images/instructor-1.jpg",
    author: "Md. Shajibur Rahman",
    job: "jr.Software Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum asperiores perferendieligendi blanditiis hic reiciendis aliquam? Aspernatur, voluptatum tenetur?",
  },
  {
    id: 2,
    img: "../images/instructor-2.jpg",
    author: "Musfiqa Hoque Joya",
    job: "jr.Software Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum asperiores perferendieligendi blanditiis hic reiciendis aliquam? Aspernatur, voluptatum tenetur?",
  },
  {
    id: 3,
    img: "../images/instructor-3.jpg",
    author: "Md. Sadikur Rahman",
    job: "jr.Software Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum asperiores perferendieligendi blanditiis hic reiciendis aliquam? Aspernatur, voluptatum tenetur?",
  },
  {
    id: 4,
    img: "../images/instructor-4.jpg",
    author: "Musfiqa Hoque Joya",
    job: "jr.Software Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum asperiores perferendieligendi blanditiis hic reiciendis aliquam? Aspernatur, voluptatum tenetur?",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Set Starting Item

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

const showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
