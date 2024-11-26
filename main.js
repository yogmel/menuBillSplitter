const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let lastScollY = 0;

const navBar = document.querySelector(".navBar");
const scrollThreshold = 7;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (window.scrollY === 0) {
    navBar.classList.remove("hidden");
  } else if (currentScrollY > lastScollY + scrollThreshold) {
    console.log("scroll down");
    navBar.classList.add("hidden");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  } else if (currentScrollY < lastScollY - scrollThreshold) {
    console.log("scroll up");
    navBar.classList.remove("hidden");
  }
  lastScollY = currentScrollY;
});
