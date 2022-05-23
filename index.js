"use-strict";

let darkModeEnabled = localStorage.getItem("darkModeEnabled");
const $html = document.querySelector("html");
const $darkModeButton = document.querySelector('[data-button="dark-mode"]');

const enableDarkMode = () => {
  $html.classList.add("dark-mode");
  localStorage.setItem("darkModeEnabled", "enabled");
};

const disableDarkMode = () => {
  $html.classList.remove("dark-mode");
  localStorage.removeItem("darkModeEnabled");
};

if (darkModeEnabled) {
  enableDarkMode();
  $darkModeButton.checked = !$darkModeButton.checked;
}

$darkModeButton.addEventListener("change", () => {
  darkModeEnabled = localStorage.getItem("darkModeEnabled");
  if (darkModeEnabled) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
