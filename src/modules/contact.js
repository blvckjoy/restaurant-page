function loadContactContent() {
   const container = document.querySelector("#content");

   const contactSection = document.createElement("div");
   contactSection.classList.add("contact-section");

   const contactFormDiv = document.createElement("div");
   contactFormDiv.classList.add("contact-form");
   contactSection.appendChild(contactFormDiv);

   const contactHeading = document.createElement("h2");
   contactHeading.classList.add("contact-heading");
   contactFormDiv.appendChild(contactHeading);

   const contactForm = document.createElement("form");
   contactForm.setAttribute("action", "#");
   contactForm.setAttribute("method", "#");
   contactFormDiv.appendChild(contactForm);

   // name input
   const nameInput = document.createElement("input");
   nameInput.setAttribute("type", "text");
   nameInput.setAttribute("name", "name");
   nameInput.setAttribute("placeholder", "Your Name");
   contactForm.appendChild(nameInput);

   // email input
   const emailInput = document.createElement("input");
   emailInput.setAttribute("type", "email");
   emailInput.setAttribute("name", "email");
   emailInput.setAttribute("placeholder", "Your Email");
   contactForm.appendChild(emailInput);

   // telephone input
   const telephoneInput = document.createElement("input");
   telephoneInput.setAttribute("type", "tel");
   telephoneInput.setAttribute("name", "phone");
   telephoneInput.setAttribute("placeholder", "Your Phone Number");
   contactForm.appendChild(telephoneInput);

   // text area
   const textArea = document.createElement("textarea");
   textArea.setAttribute("name", "message");
   textArea.setAttribute("rows", "6");
   textArea.setAttribute("placeholder", "Your Message");
   contactForm.appendChild(textArea);

   const submitBtn = document.createElement("button");
   submitBtn.innerHTML = "Send Message";
   submitBtn.classList.add("send-msg-btn");
   contactForm.appendChild(submitBtn);

   const mapContainer = document.createElement("div");
   mapContainer.classList.add("map-container");
   contactSection.appendChild(mapContainer);

   const iFrame = document.createElement("iframe");
   iFrame.setAttribute(
      "src",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2088265166213!2d144.96305851531642!3d-37.81624897975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1634260849314!5m2!1sen!2sin"
   );
   iFrame.setAttribute("allowfullscreen", "");
   iFrame.setAttribute("loading", "eager");
   mapContainer.appendChild(iFrame);

   container.innerHTML = "";

   container.appendChild(contactSection);
}

export { loadContactContent };
