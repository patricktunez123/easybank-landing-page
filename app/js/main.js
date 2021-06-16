const humbugerbtn = document.querySelector("#humbugerbtn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

humbugerbtn.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
  } else {
    header.classList.add("open");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  }
});
