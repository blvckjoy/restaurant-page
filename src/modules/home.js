import { loadMenuContent } from "./menu.js";
import { loadContactContent } from "./contact.js";

function loadHomeContent() {
   const container = document.querySelector("#content");

   const homeSection = document.createElement("div");
   homeSection.classList.add("hero-section");

   const heroImageDiv = document.createElement("div");
   heroImageDiv.classList.add("hero-image-box");

   const heroTextDiv = document.createElement("div");
   heroTextDiv.classList.add("hero-text-box");

   const heroText = document.createElement("p");
   heroText.innerHTML = "TEQUILA & BAR";
   heroText.classList.add("hero-text");

   const heroButtonsDiv = document.createElement("div");
   heroButtonsDiv.classList.add("hero-btns");

   const heroButtonMenu = document.createElement("button");
   heroButtonMenu.innerHTML = "Menu";
   heroButtonMenu.classList.add("hero-btn");

   const heroButtonContact = document.createElement("button");
   heroButtonContact.innerHTML = "Contact";
   heroButtonContact.classList.add("hero-btn");

   heroTextDiv.appendChild(heroText);
   heroButtonsDiv.appendChild(heroButtonMenu);
   heroButtonsDiv.appendChild(heroButtonContact);
   homeSection.appendChild(heroImageDiv);
   homeSection.appendChild(heroTextDiv);
   homeSection.appendChild(heroButtonsDiv);

   container.appendChild(homeSection);

   // Add event listeners after the buttons are added to the DOM
   heroButtonMenu.addEventListener("click", loadMenuContent);
   heroButtonContact.addEventListener("click", loadContactContent);

   return container.innerHTML;
}

export { loadHomeContent };
