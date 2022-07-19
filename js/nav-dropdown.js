const dropdownOpen = document.querySelector(".nav-home__dropdown");
const dropdownLinks = document.querySelector(".nav-home__dropdown-links");
const dropdownClose = document.querySelector(".nav-home__open-dropdown");

dropdownOpen.addEventListener("click", (evento) => {
  dropdownLinks.style.display = "flex";
  dropdownOpen.style.display = "none";
  dropdownClose.style.display = "inline";
});

dropdownClose.addEventListener("click", (evento) => {
  dropdownLinks.style.display = "none";
  dropdownOpen.style.display = "inline";
  dropdownClose.style.display = "none";
});
