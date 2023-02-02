const lightIcon = document.querySelector("#light-icon");
const darkIcon = document.querySelector("#dark-icon");
const switchButton = document.querySelector("#switch-theme");

document.addEventListener("DOMContentLoaded", function () {
  const currentTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(currentTheme);
  const theme = localStorage.getItem("theme"); // Проверить, есть ли тема в localStorage
  console.log("Current theme:", theme);
  if (theme === "dark-theme") {
    document.body.classList.add("dark-theme");
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline-block";
  } else {
    document.body.classList.add("light-theme");
    lightIcon.style.display = "inline-block";
    darkIcon.style.display = "none";
  }
});

switchButton.addEventListener("click", function () {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.replace("light-theme", "dark-theme");
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline-block";
    localStorage.setItem("theme", "dark-theme");
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
    lightIcon.style.display = "inline-block";
    darkIcon.style.display = "none";
    localStorage.setItem("theme", "light-theme");
  }
});
