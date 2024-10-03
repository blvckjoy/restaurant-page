function loadMenuContent() {
   const container = document.querySelector("#content");

   const menuSection = document.createElement("div");
   menuSection.classList.add("menu-section");

   const menu = document.createElement("div");
   menu.classList.add("menu");
   menuSection.appendChild(menu);

   const headingSecondary = document.createElement("h2");
   headingSecondary.innerHTML = "DINNER MENU";
   headingSecondary.classList.add("heading-secondary");
   menu.appendChild(headingSecondary);

   const headingText = document.createElement("p");
   headingText.innerHTML =
      "Get people excited about your menu and your food. Give your menu a brief description";
   headingText.classList.add("heading-text");
   menu.appendChild(headingText);

   const menuHeading = document.createElement("div");
   menuHeading.classList.add("menu-heading");

   const menuHeadingText = document.createElement("h3");
   menuHeadingText.innerHTML = "Cocktails";
   menuHeadingText.classList.add("menu-heading-text");
   menuHeading.appendChild(menuHeadingText);

   const menuHeadingDescription = document.createElement("p");
   menuHeadingDescription.innerHTML =
      "This is a section of your menu. Give your section a brief description";
   menuHeadingDescription.classList.add("menu-heading-description");
   menuHeading.appendChild(menuHeadingDescription);

   // Append menuHeading to menu
   menu.appendChild(menuHeading);

   const menuItems = document.createElement("div");
   menuItems.classList.add("menu-items");

   for (let i = 0; i < 3; i++) {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      // Create a container for the left side content
      const leftContent = document.createElement("div");
      leftContent.classList.add("menu-item-left");

      const menuSubheading = document.createElement("p");
      if (i === 0) {
         menuSubheading.innerHTML = "ROSEMARY MARGARITA";
      } else if (i === 1) {
         menuSubheading.innerHTML = "WATERMELON MARGARITA";
      } else if (i === 2) {
         menuSubheading.innerHTML = "TEQUILA SUNRISE";
      }
      menuSubheading.classList.add("menu-subheading");
      leftContent.appendChild(menuSubheading);

      const menuText = document.createElement("p");
      if (i === 0) {
         menuText.innerHTML =
            "This is an item on your menu. Give your item a brief description";
      } else if (i === 1) {
         menuText.innerHTML =
            "This is an item on your menu. Give your item a brief description";
      } else if (i === 2) {
         menuText.innerHTML =
            "This is an item on your menu. Give your item a brief description";
      }
      menuText.classList.add("menu-text");
      leftContent.appendChild(menuText);

      // Add the left content to the menu item
      menuItem.appendChild(leftContent);

      const menuPrice = document.createElement("p");
      if (i === 0) {
         menuPrice.innerHTML = "$9.99";
      } else if (i === 1) {
         menuPrice.innerHTML = "$9.99";
      } else if (i === 2) {
         menuPrice.innerHTML = "$9.99";
      }
      menuPrice.classList.add("menu-price");
      menuItem.appendChild(menuPrice);

      menuItems.appendChild(menuItem);
   }

   // Append menuItems to menu
   menu.appendChild(menuItems);

   container.innerHTML = "";

   container.appendChild(menuSection);
}

export { loadMenuContent };
