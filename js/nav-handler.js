const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navbar .items");

hamburger.addEventListener("click", () => {
    navItems.classList.toggle("active");
});