//for createElemnt
const createElement = (tagName, className, innerHTML, father) => {
  const element = document.createElement(tagName);
  element.innerHTML = innerHTML;
  element.className = className;

  father && father.append(element);

  return element;
};
const header = document.querySelector("header");
const image = createElement("img", " m-4", "", header);
image.src = "https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg";
image.style.width = "15%";
header.style.backgroundColor = "#343535";
const section = document.querySelector("#section");
section.style.backgroundColor = "#3A3C3C";

const containerInSec = createElement("div", "container", "", section);
const rowInSec = createElement(
  "div",
  "row justify-content-center",
  "",
  containerInSec
);

const h1Insection = createElement(
  "p",
  "text-center fs-1 fw-bold text-light my-4",
  "Search",
  rowInSec
);
h1Insection.style.fontSize = "45px";
const col10Insec = createElement(
  "div",
  "col-10 d-flex me-3 justify-content-around",
  "",
  rowInSec
);
const inputInSec = createElement(
  "input",
  " rounded d-flex col-11",
  "",
  col10Insec
);
const btnSearch = createElement(
  "button",
  "btn btn-success",
  "Search",
  col10Insec
);
inputInSec.placeholder = "...";
inputInSec.style.fontSize = "28px";
const freeDivInSec = createElement(
  "div",
  "d-flex my-3 justify-content-center",
  "",
  rowInSec
);
const spanInfree = createElement(
  "span",
  "text-warning fw-normal fs-5 px-1",
  `Search`,
  freeDivInSec
);
const pInFree = createElement(
  "p",
  "fw-normal fs-5 text-center text-light",
  "from 4103 libraries found in 1ms.",
  freeDivInSec
);
