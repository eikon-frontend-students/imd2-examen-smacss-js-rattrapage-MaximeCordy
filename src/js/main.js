var title = document.querySelector(".h2C");
var color = document.querySelector(".change-color");

function ColorToWhite() {
  title.classList.toggle("is-active");
}

title.addEventListener("click", ColorToWhite);

var classic = document.querySelector(".l-green-classic img");
var classicback = document.querySelector(".l-green-classic");

function rotate1() {
  classic.classList.toggle("is-active");
}
classic.addEventListener("click", rotate1);

function backcolor1() {
  classicback.classList.toggle("is-active");
}
classicback.addEventListener("click", backcolor1);

var onions = document.querySelector(".l-green-onions img");
var onionsback = document.querySelector(".l-green-onions");

function rotate2() {
  onions.classList.toggle("is-active");
}
onions.addEventListener("click", rotate2);

function backcolor2() {
  onionsback.classList.toggle("is-active");
}
onionsback.addEventListener("click", backcolor2);

var jalapeno = document.querySelector(".l-green-jalapeno img");

function rotate3() {
  jalapeno.classList.toggle("is-active");
}
jalapeno.addEventListener("click", rotate3);

var title = document.querySelector(".h2C h2");

function color() {
  title.classList.toggle("is-active");
}
title.addEventListener("click", color);
