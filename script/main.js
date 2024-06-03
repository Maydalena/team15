const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Toggle navigation menu
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Close navigation menu when clicking outside of it
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

window.onclick = (e) => {
if (e.target === itemDetailModal) {
  itemDetailModal.style.display = "none";
}
};