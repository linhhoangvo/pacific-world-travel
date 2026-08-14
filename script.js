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

/* Pacific World brand palette */
const paletteStyle = document.createElement("style");
paletteStyle.textContent = `
:root {
  --forest: #263C32;
  --olive: #68735A;
  --beige: #E8DFD0;
  --sand: #D4C5AD;
  --ivory: #F7F4ED;
  --navy: #263C32;
  --navy-dark: #263C32;
  --lime: #68735A;
  --cream: #E8DFD0;
  --paper: #F7F4ED;
  --gold: #D4C5AD;
  --text: #263C32;
  --muted: #68735A;
  --line: rgba(38, 60, 50, .16);
}

body { background: #F7F4ED; color: #263C32; }
.site-header { background: rgba(38, 60, 50, .96); }
.desktop-nav a:hover { color: #D4C5AD; }

.hero-overlay {
  background:
    linear-gradient(180deg, rgba(38,60,50,.70) 0%, rgba(38,60,50,.27) 46%, rgba(38,60,50,.52) 100%),
    linear-gradient(90deg, rgba(38,60,50,.18), rgba(38,60,50,.05));
}
.hero h1 em { color: #E8DFD0; }
.hero-btn.dark { background: #263C32; }
.hero-btn.lime { background: #68735A; color: #F7F4ED; }
.hero-benefits { background: rgba(38,60,50,.93); }

.promise, .specialties { background: #F7F4ED; }
.eyebrow { color: #68735A; }
.eyebrow.light { color: #D4C5AD; }
.promise h2, .center-heading h2, .management-grid h3,
.specialty-grid h3, .why-grid h3, .view-link { color: #263C32; }
.promise-copy p, .management-grid p, .specialty-grid p, .why-grid p { color: #68735A; }

.feature-shade {
  background: linear-gradient(180deg, rgba(38,60,50,.03) 30%, rgba(38,60,50,.96) 100%);
}
.square-icon { background: #263C32; }
.square-icon.green { background: #68735A; }

.management, .why { background: #F7F4ED; }
.management-grid article > span,
.specialty-grid article > span,
.why-grid article > span { color: #68735A; }

.cg-shade {
  background: linear-gradient(90deg, rgba(38,60,50,.98) 0%, rgba(38,60,50,.90) 37%, rgba(38,60,50,.25) 68%);
}
.cg-copy li::before { color: #D4C5AD; }
.lime-button { background: #68735A; color: #F7F4ED; }

.destinations { background: #F7F4ED; }
.destination::after {
  background: linear-gradient(180deg, rgba(38,60,50,.03), rgba(38,60,50,.78));
}

.final-cta { background: #263C32; }
footer { background: #263C32; }
.footer-column > strong { color: #D4C5AD; }

@media (max-width: 1080px) {
  .desktop-nav.open { background: #263C32; }
}
`;
document.head.appendChild(paletteStyle);

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

const finalCtaPhoto = document.querySelector(".final-photo");
if (finalCtaPhoto) {
  finalCtaPhoto.style.backgroundImage = 'url("final-cta-lounge.jpg")';
  finalCtaPhoto.style.backgroundPosition = "center 50%";
  finalCtaPhoto.style.backgroundSize = "cover";
  finalCtaPhoto.style.backgroundRepeat = "no-repeat";
}
