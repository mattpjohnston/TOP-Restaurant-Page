import "./normalise.css";
import "./styles.css";

import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";

const content = document.getElementById("content");

function loadPage(renderFn) {
  content.innerHTML = "";
  content.appendChild(renderFn());
}

document
  .getElementById("homeButton")
  .addEventListener("click", (e) => loadPage(renderHome));

document
  .getElementById("menuButton")
  .addEventListener("click", (e) => loadPage(renderMenu));

document
  .getElementById("aboutButton")
  .addEventListener("click", (e) => loadPage(renderAbout));

loadPage(renderHome);
