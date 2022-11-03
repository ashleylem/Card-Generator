/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let suite = ["♥", "♠", "♣", "♦"];
let cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let cardIndex = [Math.floor(Math.random() * cards.length)];
let suiteIndex = [Math.floor(Math.random() * suite.length)];

let element = document.querySelector(".card");

document.querySelector(".content").innerHTML = cards[cardIndex];
document.querySelector(".header").innerHTML = suite[suiteIndex];
document.querySelector(".footer").innerHTML = suite[suiteIndex];

if (suite[suiteIndex] === "♥" || suite[suiteIndex] === "♦") {
  element.style.color = "red";
}
