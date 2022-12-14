// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let content = document.getElementById("contact-page");
let subButton = document.getElementById("submit-button");

subButton.addEventListener("click", () => content.innerHTML = "<h2>Thank you for your message!</h2>");

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

