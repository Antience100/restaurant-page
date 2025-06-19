import "./styles.css";
import { createHomepage } from "./modules/homepage.js";
import { createMenuPage } from "./modules/menu.js";
import { createAboutPage } from "./modules/about.js";

const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.id === "homeBtn") {
      createHomepage();
    } else if (btn.id === "menuBtn") {
      createMenuPage();
    } else if (btn.id === "aboutBtn") {
      createAboutPage();
    }
  });
});

createHomepage();