/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  let excusa = document.getElementById("excuse");
  excusa.innerHTML =
    who[randomNumber(who)] +
    " " +
    what[randomNumber(what)] +
    " " +
    when[randomNumber(when)];
};
