const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

/* ABOUT DROPDOWN */
const aboutLink = nav ? [...nav.children].find((item) =>
  item.tagName === "A" && ["About Us", "About"].includes(item.textContent.trim())
) : null;

if (aboutLink) {
  const dropdown = document.createElement("div");
  dropdown.className = "nav-dropdown";
  dropdown.innerHTML = `
    <button class="nav-dropdown-toggle" type="button" aria-expanded="false">
      <span>About</span><span class="dropdown-chevron">⌄</span>
    </button>
    <div class="nav-dropdown-menu">
      <a href="#who-we-are">Who We Are</a>
      <a href="#our-philosophy">Our Philosophy</a>
      <a href="#why">Why Us</a>
      <a href="#our-team">Our Team</a>
      <a href="#sustainability">Sustainability</a>
      <a href="#local-expertise">Local Expertise</a>
    </div>
  `;
  aboutLink.replaceWith(dropdown);

  const aboutIds = [
    "who-we-are",
    "our-philosophy",
    "why-us-about",
    "our-team",
    "sustainability",
    "local-expertise"
  ];
  document.querySelectorAll(".about-grid article").forEach((article, index) => {
    if (aboutIds[index]) {
      article.id = aboutIds[index];
      article.style.scrollMarginTop = "110px";
    }
  });

  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  toggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  dropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });
}

/* Footer wording */
document.querySelectorAll("footer a").forEach((link) => {
  if (link.textContent.trim() === "About Us") link.textContent = "About";
});

/* MOBILE MAIN MENU */
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

/* Pacific World brand palette + page refinements */
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
.desktop-nav {
  align-items: center;
  flex-wrap: nowrap;
  min-width: 0;
}
.desktop-nav > a {
  display: inline-flex;
  align-items: center;
  height: 72px;
  white-space: nowrap;
  flex: 0 0 auto;
}
.desktop-nav > a:hover { color: #D4C5AD; }

/* Header About dropdown */
.nav-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  height: 72px;
  flex: 0 0 auto;
}
.nav-dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
}
.dropdown-chevron {
  font-size: 13px;
  line-height: 1;
  transition: transform .2s ease;
}
.nav-dropdown-menu {
  position: absolute;
  z-index: 80;
  top: 72px;
  left: 50%;
  width: 220px;
  padding: 18px 0 22px;
  background: #F7F4ED;
  color: #263C32;
  border-radius: 0 0 22px 22px;
  box-shadow: 0 18px 40px rgba(38,60,50,.18);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, -8px);
  transition: opacity .2s ease, transform .2s ease, visibility .2s ease;
}
.nav-dropdown-menu a {
  display: block;
  padding: 10px 28px;
  color: #263C32;
  font-size: 13px;
  line-height: 1.25;
  white-space: nowrap;
}
.nav-dropdown-menu a:hover {
  background: #E8DFD0;
  color: #263C32;
}
.nav-dropdown:hover .nav-dropdown-menu,
.nav-dropdown:focus-within .nav-dropdown-menu,
.nav-dropdown.open .nav-dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translate(-50%, 0);
}
.nav-dropdown:hover .dropdown-chevron,
.nav-dropdown.open .dropdown-chevron {
  transform: rotate(180deg);
}

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

/* ABOUT CONTENT */
.about-section {
  background: #E8DFD0;
  color: #263C32;
  scroll-margin-top: 72px;
}
.about-intro {
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: clamp(40px, 7vw, 120px);
  align-items: end;
  padding-bottom: 52px;
  border-bottom: 1px solid rgba(38,60,50,.18);
}
.about-intro h2 {
  margin: 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(42px, 5vw, 70px);
  line-height: .98;
  font-weight: 500;
  letter-spacing: -.035em;
  color: #263C32;
}
.about-intro > p {
  margin: 0;
  max-width: 590px;
  font-size: 15px;
  line-height: 1.7;
  color: #566255;
}
.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0;
  border-left: 1px solid rgba(38,60,50,.18);
}
.about-grid article {
  min-height: 265px;
  padding: 34px 30px 38px;
  border-right: 1px solid rgba(38,60,50,.18);
  border-bottom: 1px solid rgba(38,60,50,.18);
  transition: background .25s ease;
}
.about-grid article:nth-child(-n+3) { border-top: 1px solid rgba(38,60,50,.18); }
.about-grid article:hover { background: #F7F4ED; }
.about-number {
  display: inline-block;
  margin-bottom: 44px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .14em;
  color: #68735A;
}
.about-grid h3 {
  margin: 0 0 12px;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 27px;
  line-height: 1.08;
  font-weight: 500;
  color: #263C32;
}
.about-grid p {
  margin: 0;
  max-width: 330px;
  font-size: 12px;
  line-height: 1.65;
  color: #68735A;
}

.final-cta { background: #263C32; }
footer { background: #263C32; }
.footer-column > strong { color: #D4C5AD; }

@media (max-width: 1080px) {
  .desktop-nav.open { background: #263C32; }
  .nav-dropdown {
    display: block;
    width: 100%;
    height: auto;
  }
  .nav-dropdown-toggle {
    width: 100%;
    justify-content: space-between;
    padding: 8px 0;
    text-align: left;
  }
  .nav-dropdown-menu {
    position: static;
    width: 100%;
    margin: 6px 0 2px;
    padding: 8px 0;
    border-radius: 12px;
    box-shadow: none;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: none;
    display: none;
  }
  .nav-dropdown.open .nav-dropdown-menu { display: block; }
  .nav-dropdown:hover .nav-dropdown-menu:not(:focus-within) { transform: none; }
  .nav-dropdown-menu a { padding: 10px 16px; }
  .about-grid { grid-template-columns: repeat(2, 1fr); }
  .about-grid article:nth-child(3) { border-top: 0; }
  .about-grid article:nth-child(-n+2) { border-top: 1px solid rgba(38,60,50,.18); }
}

@media (max-width: 720px) {
  .about-intro { grid-template-columns: 1fr; gap: 24px; }
  .about-grid { grid-template-columns: 1fr; }
  .about-grid article { min-height: auto; }
  .about-grid article:nth-child(n) { border-top: 0; }
  .about-grid article:first-child { border-top: 1px solid rgba(38,60,50,.18); }
  .about-number { margin-bottom: 26px; }
}
`;
document.head.appendChild(paletteStyle);

/* Updated imagery */
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
