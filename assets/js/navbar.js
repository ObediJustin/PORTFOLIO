// Variable pour vérifier si la navbar est déjà initialisée
let navbarInitialized = false;

// Fonction d'initialisation principale
function initNavbar() {
    if (navbarInitialized) return;
    
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");
    const overlay = document.getElementById("overlay");
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Vérifier que tous les éléments nécessaires existent
    if (!burger || !navLinks || !overlay) {
        console.log("Navbar elements not ready yet");
        return false;
    }

    console.log("Initializing navbar...");

    /* BURGER MENU */
    burger.addEventListener("click", function(e) {
        e.stopPropagation();
        console.log("Burger clicked"); // Pour debug
        burger.classList.toggle("active");
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    /* OVERLAY */
    overlay.addEventListener("click", function() {
        burger.classList.remove("active");
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        
        // Fermer aussi le dropdown si ouvert
        if (dropdownContent) {
            dropdownContent.classList.remove("show");
        }
    });

    /* LIENS */
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function() {
            burger.classList.remove("active");
            navLinks.classList.remove("active");
            overlay.classList.remove("active");
        });
    });

    /* DROPDOWN */
    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdownContent.classList.toggle("show");
        });
    }

    /* RESIZE */
    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            burger.classList.remove("active");
            navLinks.classList.remove("active");
            overlay.classList.remove("active");
            if (dropdownContent) {
                dropdownContent.classList.remove("show");
            }
        }
    });

    /* ACTIVE LINK */
    setActiveLink();

    navbarInitialized = true;
    return true;
}

// Fonction pour le lien actif
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "home.html";
    const links = document.querySelectorAll(".nav-links a");
    
    links.forEach(link => {
        link.classList.remove("active");
        const linkHref = link.getAttribute("href");
        const linkPage = linkHref.split("/").pop();
        
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

// Attendre que le DOM soit prêt et que la navbar soit chargée
document.addEventListener("DOMContentLoaded", function() {
    // Essayer immédiatement
    if (!initNavbar()) {
        // Si pas encore prêt, vérifier toutes les 100ms
        const checkInterval = setInterval(function() {
            if (initNavbar()) {
                clearInterval(checkInterval);
            }
        }, 100);
        
        // Arrêter après 5 secondes pour éviter une boucle infinie
        setTimeout(function() {
            clearInterval(checkInterval);
        }, 5000);
    }
});