"use strict";

const secOne = document.querySelector(".sec__one");
const secTwo = document.querySelector(".sec__two");
const secThree = document.querySelector(".sec__three");
const secFour = document.querySelector(".sec__four");
const secFive = document.querySelector(".sec__five");

const home = document.querySelector(".HomeBtn");
const team= document.querySelector(".TeamBtn");
const menu= document.querySelector(".MenuBtn");
const contact= document.querySelector(".ContactBtn");
const user = document.querySelector(".UserBtn");

home.addEventListener('click', () => {
  secOne.scrollIntoView({behavior:"smooth", block:"center"});
})
team.addEventListener('click', () => {
  secTwo.scrollIntoView({behavior:"smooth", block:"center"});
})
menu.addEventListener('click', () => {
  secThree.scrollIntoView({behavior:"smooth", block:"center"});
})
contact.addEventListener('click', () => {
  secFour.scrollIntoView({behavior:"smooth", block:"center"});
})
user.addEventListener('click', () => {
  secFive.scrollIntoView({behavior:"smooth", block:"center"});
})

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
})