"use strict";

const likes = document.querySelector(".likesBtn p");
const playingsongBtn = document.querySelector(".likesBtn");
let i = 0;

playingsongBtn.addEventListener("click", () => {
  i += 1;
  likes.innerHTML = `${i}`;
});
