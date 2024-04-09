const lightSwitch = document.querySelector(".light__switch");
const darkSwitch = document.querySelector(".dark__switch");
const mobileLightSwitch = document.querySelector(".mobile__light__switch");
const mobileDarkSwitch = document.querySelector(".mobile__dark__switch");
const closeMobileNavIcon = document.querySelector(".close__mobile__nav");
const openMobileNavIcon = document.querySelector(".open__mobile__nav");
const mobileMenu = document.querySelector(".mobile__menu");
const header = document.querySelector(".header");

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

// mobile toggle switching
const mobileSwitchToggle = () => {
  mobileLightSwitch.classList.toggle("hide");
  mobileDarkSwitch.classList.toggle("hide");
};

const mobileSwitchTheme = () => {
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
  mobileSwitchToggle();
};

mobileLightSwitch.addEventListener("click", () => mobileSwitchTheme());
mobileDarkSwitch.addEventListener("click", () => mobileSwitchTheme());

// add boxshawdow on scroll
window.addEventListener("scroll", () => {
  let currentPos = window.pageYOffset;
  if (currentPos >= "200") {
    header.classList.add("box-shadow");
    console.log("add");
  } else {
    header.classList.remove("box-shadow");
    console.log("remove");
  }
});

// close/open mobile nav
closeMobileNavIcon.addEventListener("click", () => closeMobileNav());

openMobileNavIcon.addEventListener("click", () => openMobileNav());

const openMobileNav = () => {
  mobileMenu.classList.add("show__mobile__menu");
  console.log("clicked");
};
const closeMobileNav = () => {
  mobileMenu.classList.remove("show__mobile__menu");
};
