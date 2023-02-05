"use: strict";
const nav = document.querySelector(".main-nav");
const nav_btn = document.querySelector(".mobile-nav-btn");
const clickable = document.querySelectorAll("#clickables");
console.log(clickable);
nav_btn.addEventListener("click", () => {
  const visible = nav.getAttribute("data-visible");
  if (visible === "false") {
    nav.setAttribute("data-visible", true);
    nav_btn.setAttribute("aria-expanded", true);
    // nav.style.transform = "translateX(100%)";
    // nav.style.transition = "transform 200ms linear";
  } else {
    nav.setAttribute("data-visible", false);
    nav_btn.setAttribute("aria-expanded", false);
    // nav.style.transform = "translateX(0)";
    // nav.style.transition = "transform 200ms linear";
  }
});
console.log(nav_btn);
