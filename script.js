const toggleThemeButton = document.getElementById("toggle-theme-button");
toggleThemeButton.onclick = function () {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
};

const themeIcon = document.querySelector("#theme-icon");
const themeSection = document.querySelector("#theme-section");

toggleThemeButton.addEventListener("click", () => {
  if (themeSection.classList.contains("dark-theme")) {
    themeSection.classList.remove("dark-theme");
    themeSection.classList.add("light-theme");
    themeIcon.src = "sun.png";
  } else {
    themeSection.classList.remove("light-theme");
    themeSection.classList.add("dark-theme");
    themeIcon.src = "moon.png";
  }
});
