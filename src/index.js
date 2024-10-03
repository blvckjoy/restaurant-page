import "./styles.css";
import "./styles.css";
import { loadHomeContent } from "./modules/home.js";
import { loadMenuContent } from "./modules/menu.js";
import { loadContactContent } from "./modules/contact.js";

document.addEventListener("DOMContentLoaded", () => {
   let container = document.querySelector("#content");

   const homeBtn = document.querySelector("#home-btn");
   const menuBtn = document.querySelector("#menu-btn");
   const contactBtn = document.querySelector("#contact-btn");

   homeBtn.addEventListener("click", () => {
      container.innerHTML = "";
      loadHomeContent();
   });

   menuBtn.addEventListener("click", () => {
      container.innerHTML = "";
      loadMenuContent();
   });

   contactBtn.addEventListener("click", () => {
      container.innerHTML = "";
      loadContactContent();
   });

   loadHomeContent();
});
