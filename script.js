const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    if (menuButton) {
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});

const businessTravelPhoto = document.querySelector(".business-feature .feature-photo");
if (businessTravelPhoto) {
  businessTravelPhoto.style.backgroundImage = 'url("business-travel.jpg")';
  businessTravelPhoto.style.backgroundPosition = "center 35%";
  businessTravelPhoto.style.backgroundSize = "cover";
  businessTravelPhoto.style.backgroundRepeat = "no-repeat";
}

const golfTravelPhoto = document.querySelector(".golf-feature .feature-photo");
if (golfTravelPhoto) {
  golfTravelPhoto.style.backgroundImage = 'url("golf-travel.jpg")';
  golfTravelPhoto.style.backgroundPosition = "center 55%";
  golfTravelPhoto.style.backgroundSize = "cover";
  golfTravelPhoto.style.backgroundRepeat = "no-repeat";
}
