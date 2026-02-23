/* const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
}); */

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");
const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");


/* OUVERTURE / FERMETURE */
burger.addEventListener("click", () => {
    burger.classList.toggle("active"); // 👈 important
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
});
dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

/* CLIC OVERLAY */
overlay.addEventListener("click", closeMenu);

/* CLIC SUR UN LIEN */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

/* RESIZE ÉCRAN */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

function closeMenu() {
    burger.classList.remove("active"); // 👈 important
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
}
