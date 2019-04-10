console.log ("hello main.js");

const sectionEl = document.querySelector(".article__section");

console.log("sectionEl", sectionEl);

const footerEL = document.querySelector(".article__section");

console.log("footerEL", footerEL);

const smallTextEl = document.querySelector(".smallText");
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText")


const sectionAll = document.querySelectorAll(".article__section")

console.log("sectionAll", sectionAll);
console.log("first element", sectionAll[0])

