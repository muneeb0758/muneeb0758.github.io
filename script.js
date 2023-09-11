

const btn = document.querySelector(".abt");
const text = document.querySelector(".abt-text");

btn.addEventListener("click", () => {
  // Remove 'show-text' class from all text elements
  document.querySelectorAll(".text-element").forEach((element) => {
    element.classList.remove("show-text");
  });

  // Add 'show-text' class to the clicked text element
  text.classList.toggle("show-text");
});

const btn2 = document.querySelector(".skl");
const text2 = document.querySelector(".skl-text");

btn2.addEventListener("click", () => {
  // Remove 'show-text' class from all text elements
  document.querySelectorAll(".text-element").forEach((element) => {
    element.classList.remove("show-text");
  });

  // Add 'show-text' class to the clicked text element
  text2.classList.toggle("show-text");
});

const btn3 = document.querySelector(".exp");
const text3 = document.querySelector(".exp-text");

btn3.addEventListener("click", () => {
  // Remove 'show-text' class from all text elements
  document.querySelectorAll(".text-element").forEach((element) => {
    element.classList.remove("show-text");
  });

  // Add 'show-text' class to the clicked text element
  text3.classList.toggle("show-text");
});

document.querySelectorAll("section:not(.services)").forEach((section) => {
  section.style.opacity = 0;
  section.style.transition = "opacity 0.5s";
});

{
const topButton = document.getElementById("back-to-top");

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
}


