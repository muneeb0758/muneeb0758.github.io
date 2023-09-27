// Get the button and text elements
const btn = document.querySelector(".abt");
const text = document.querySelector(".abt-text");

// Add the "show-text" class to the text element
text.classList.add("show-text");

// Add a click event listener to the button
btn.addEventListener("click", () => {
  // Check if the other two buttons have the `show-text` class
  if (text2.classList.contains("show-text")) {
    text2.classList.remove("show-text");
  }
  if (text3.classList.contains("show-text")) {
    text3.classList.remove("show-text");
  }

  // Remove the "show-text" class from all text elements
  document.querySelectorAll(".text-element").forEach((element) => {
    element.classList.remove("show-text");
  });

  // Add the "show-text" class to the clicked text element
  text.classList.toggle("show-text");
});

// Hide all sections except for the services section
document.querySelectorAll("section:not(.services)").forEach((section) => {
  section.style.opacity = 0;
  section.style.transition = "opacity 0.5s";
});

// Add click event listeners to the other two buttons
const btn2 = document.querySelector(".skl");
const text2 = document.querySelector(".skl-text");

btn2.addEventListener("click", () => {
  // Remove the "show-text" class from all text elements
  document.querySelectorAll(".text-element").forEach((element) => {
    element.classList.remove("show-text");
  });

  // Add the "show-text" class to the clicked text element
  text2.classList.toggle("show-text");

  // Remove the "show-text" class from the other two text elements
  if (text.classList.contains("show-text")) {
    text.classList.remove("show-text");
  }
  if (text3.classList.contains("show-text")) {
    text3.classList.remove("show-text");
  }
});

const btn3 = document.querySelector(".exp");
const text3 = document.querySelector(".exp-text");

btn3.addEventListener("click", () => {
  // Remove the "show-text" class from all text elements
  document.querySelectorAll(".text-element").forEach((element) => {
    element.classList.remove("show-text");
  });

  // Add the "show-text" class to the clicked text element
  text3.classList.toggle("show-text");

  // Remove the "show-text" class from the other two text elements
  if (text.classList.contains("show-text")) {
    text.classList.remove("show-text");
  }
  if (text2.classList.contains("show-text")) {
    text2.classList.remove("show-text");
  }
});

document.querySelectorAll("section:not(.services)").forEach((section) => {
  section.style.opacity = 0;
  section.style.transition = "opacity 0.5s";
});
