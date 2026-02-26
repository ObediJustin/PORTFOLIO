const words = ["Web developper ", "Brand Strategist ", "Web developper ", "Digital artist ", "UI/UX Designer "];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  let display = document.getElementById("typing");

  if (isDeleting) {
    display.textContent = currentWord.substring(0, j--);
  } else {
    display.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 2000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

const links = document.querySelectorAll("nav a[data-section]");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = this.dataset.section;

    // retirer active des liens
    links.forEach(link => link.classList.remove("active"));
    this.classList.add("active");

    // cacher toutes les sections
    sections.forEach(section => {
      section.classList.remove("active-section");
    });

    // afficher la section ciblée
    document.getElementById(target).classList.add("active-section");
  });
});