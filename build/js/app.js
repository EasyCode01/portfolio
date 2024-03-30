const lightSwitch = document.querySelector(".light__switch");
const darkSwitch = document.querySelector(".dark__switch");

const switchToggle = () => {
  lightSwitch.classList.toggle("hide");
  darkSwitch.classList.toggle("hide");
};

let themeMode = localStorage.getItem("theme");
const themeCheck = () => {
  if (themeMode == null) return;
  else if (themeMode == "light") {
    document.documentElement.classList.remove("dark");
    themeMode = "light";
    localStorage.setItem("theme", themeMode);
  } else {
    document.documentElement.classList.add("dark");
    themeMode = "dark";
    localStorage.setItem("theme", themeMode);
  }
};

themeCheck();

const switchTheme = () => {
  themeMode = localStorage.getItem("theme");
  if (themeMode == "dark") {
    document.documentElement.classList.remove("dark");
    themeMode = "light";
    localStorage.setItem("theme", themeMode);
  } else {
    document.documentElement.classList.add("dark");
    themeMode = "dark";
    localStorage.setItem("theme", themeMode);
  }
  switchToggle();
};

lightSwitch.addEventListener("click", () => switchTheme());
darkSwitch.addEventListener("click", () => switchTheme());
