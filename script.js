const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

/* Remove standalone Why Us from top navigation; keep it inside About dropdown */
const topLevelWhyUs = nav ? [...nav.children].find((item) =>
  item.tagName === "A" && item.textContent.trim() === "Why Us"
) : null;
topLevelWhyUs?.remove();

function buildNavDropdown(sourceLink, label, items) {
  if (!sourceLink) return null;

  const dropdown = document.createElement("div");
  dropdown.className = "nav-dropdown";
  dropdown.innerHTML = `
    <button class="nav-dropdown-toggle" type="button" aria-expanded="false">
      <span>${label}</span>
    </button>
    <div class="nav-dropdown-menu">
      ${items.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
    </div>
  `;

  sourceLink.replaceWith(dropdown);

  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  toggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    document.querySelectorAll(".nav-dropdown.open").forEach((openDropdown) => {
      if (openDropdown !== dropdown) openDropdown.classList.remove("open");
    });
    const open = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  dropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  return dropdown;
}

/* BUSINESS TRAVEL DROPDOWN */
const businessLink = nav ? [...nav.children].find((item) =>
  item.tagName === "A" && item.textContent.trim() === "Business Travel"
) : null;

buildNavDropdown(businessLink, "Business Travel", [
  { label: "Corporate & Executive Travel", href: "corporate-executive-travel.html" },
  { label: "Ground Transportation", href: "ground-transportation.html" },
  { label: "Hotels & Resorts", href: "hotels-resorts.html" },
  { label: "Private Aviation & Yachts", href: "private-aviation-yachts.html" }
]);

/* GOLF TRAVEL DROPDOWN */
const golfLink = nav ? [...nav.children].find((item) =>
  item.tagName === "A" && item.textContent.trim() === "Golf Travel"
) : null;

buildNavDropdown(golfLink, "Golf Travel", [
  { label: "Golf Holidays & Journeys", href: "golf-holidays-journeys.html" },
  { label: "Corporate & Client Golf", href: "corporate-client-golf.html" },
  { label: "Golf Groups & Tournaments", href: "golf-groups-tournaments.html" },
  { label: "Golf Resorts & Tee Times", href: "golf-resorts-tee-times.html" }
]);

/* MICE & EVENTS DROPDOWN */
const miceLink = nav ? [...nav.children].find((item) =>
  item.tagName === "A" && item.textContent.trim() === "MICE & Events"
) : null;

buildNavDropdown(miceLink, "MICE & Events", [
  { label: "Meetings & Conferences", href: "meetings-conferences.html" },
  { label: "Incentives & Corporate Events", href: "incentives-corporate-events.html" },
  { label: "Executive & Leadership Retreats", href: "executive-leadership-retreats.html" },
  { label: "Wellness & Team Retreats", href: "wellness-team-retreats.html" }
]);

/* ABOUT DROPDOWN */
const aboutLink = nav ? [...nav.children].find((item) =>
  item.tagName === "A" && ["About Us", "About"].includes(item.textContent.trim())
) : null;

buildNavDropdown(aboutLink, "About", [
  { label: "Who We Are", href: "who-we-are.html" },
  { label: "Our Philosophy", href: "our-philosophy.html" },
  { label: "Why Us", href: "why-us.html" },
  { label: "Our Team", href: "team.html" },
  { label: "Sustainability", href: "sustainability.html" },
  { label: "Local Expertise", href: "local-expertise.html" }
]);

document.addEventListener("click", (event) => {
  document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      dropdown.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
    }
  });
});

/* SITE-WIDE CONTACT ROUTING */
const contactPage = "contact.html";
document.querySelectorAll("a").forEach((link) => {
  const text = link.textContent.trim().toLowerCase();
  const href = link.getAttribute("href") || "";

  if (text === "about us") link.textContent = "About";

  const shouldRouteToContact =
    text === "talk to us" ||
    text === "talk to an expert →" ||
    text === "talk to an expert" ||
    text === "request a proposal →" ||
    text === "request a proposal" ||
    text === "contact us" ||
    text === "traveller support" ||
    text === "24/7 assistance" ||
    href === "mailto:info@pacificworldtravel.com" ||
    href.startsWith("mailto:info@pacificworldtravel.com?");

  if (shouldRouteToContact) link.setAttribute("href", contactPage);
});

/* SOCIAL LINKS */
const socialLinks = {
  in: {
    href: "https://www.linkedin.com/company/pacific-world-travel/about/?viewAsMember=true",
    label: "Pacific World Travel on LinkedIn"
  },
  f: {
    href: "https://www.facebook.com/profile.php?id=61593539661203",
    label: "Pacific World Travel on Facebook"
  }
};

document.querySelectorAll("footer .socials").forEach((socials) => {
  [...socials.children].forEach((item) => {
    const key = item.textContent.trim();
    const config = socialLinks[key];
    if (config && item.tagName !== "A") {
      const link = document.createElement("a");
      link.href = config.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", config.label);
      link.textContent = key;
      item.replaceWith(link);
    }
  });
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
.desktop-nav { align-items:center; flex-wrap:nowrap; min-width:0; }
.desktop-nav > a { display:inline-flex; align-items:center; height:72px; white-space:nowrap; flex:0 0 auto; }
.desktop-nav > a:hover { color:#D4C5AD; }
.nav-dropdown { position:relative; display:flex; align-items:center; height:72px; flex:0 0 auto; }
.nav-dropdown-toggle { display:inline-flex; align-items:center; padding:0; border:0; background:transparent; color:#fff; font:inherit; font-weight:500; white-space:nowrap; cursor:pointer; }
.nav-dropdown-menu { position:absolute; z-index:80; top:72px; left:50%; width:270px; padding:18px 0 22px; background:#F7F4ED; color:#263C32; border-radius:0 0 22px 22px; box-shadow:0 18px 40px rgba(38,60,50,.18); opacity:0; visibility:hidden; pointer-events:none; transform:translate(-50%,-8px); transition:opacity .2s ease,transform .2s ease,visibility .2s ease; }
.nav-dropdown-menu a { display:block; padding:10px 28px; color:#263C32; font-size:13px; line-height:1.25; white-space:nowrap; }
.nav-dropdown-menu a:hover { background:#E8DFD0; color:#263C32; }
.nav-dropdown:hover .nav-dropdown-menu,.nav-dropdown:focus-within .nav-dropdown-menu,.nav-dropdown.open .nav-dropdown-menu { opacity:1; visibility:visible; pointer-events:auto; transform:translate(-50%,0); }
.hero-overlay { background:linear-gradient(180deg,rgba(38,60,50,.70) 0%,rgba(38,60,50,.27) 46%,rgba(38,60,50,.52) 100%),linear-gradient(90deg,rgba(38,60,50,.18),rgba(38,60,50,.05)); }
.hero h1 em { color:#E8DFD0; }
.hero-btn.dark { background:#263C32; }
.hero-btn.lime { background:#68735A; color:#F7F4ED; }
.hero-benefits { background:rgba(38,60,50,.93); }
.promise,.specialties { background:#F7F4ED; }
.eyebrow { color:#68735A; }
.eyebrow.light { color:#D4C5AD; }
.promise h2,.center-heading h2,.management-grid h3,.specialty-grid h3,.why-grid h3,.view-link { color:#263C32; }
.promise-copy p,.management-grid p,.specialty-grid p,.why-grid p { color:#68735A; }
.feature-shade { background:linear-gradient(180deg,rgba(38,60,50,.03) 30%,rgba(38,60,50,.96) 100%); }
.square-icon { background:#263C32; }
.square-icon.green { background:#68735A; }
.management,.why { background:#F7F4ED; }
.management-grid article > span,.specialty-grid article > span,.why-grid article > span { color:#68735A; }
.cg-shade { background:linear-gradient(90deg,rgba(38,60,50,.98) 0%,rgba(38,60,50,.90) 37%,rgba(38,60,50,.25) 68%); }
.cg-copy li::before { color:#D4C5AD; }
.lime-button { background:#68735A; color:#F7F4ED; }
.destinations { background:#F7F4ED; }
.destination::after { background:linear-gradient(180deg,rgba(38,60,50,.03),rgba(38,60,50,.78)); }
.about-section { display:none !important; }
.final-cta { background:#263C32; }
footer { background:#263C32; }
.footer-column > strong { color:#D4C5AD; }
.socials a { display:inline-flex; align-items:center; justify-content:center; color:inherit; text-decoration:none; }
.socials a:hover { color:#D4C5AD; }

/* Signature Journey metadata */
.journey-meta { display:flex; flex-wrap:wrap; gap:7px 14px; margin:0 0 14px; font-size:9px; font-weight:600; letter-spacing:.04em; color:rgba(255,255,255,.78); }
.journey-meta span { display:inline-flex; align-items:center; gap:5px; }

/* How We Work */
.how-we-work { padding:88px 6.4vw 94px; background:#E8DFD0; }
.how-we-work-head { max-width:760px; margin:0 auto 46px; text-align:center; }
.how-we-work-head h2 { margin:0; font-family:"Playfair Display",Georgia,serif; font-size:clamp(40px,4.6vw,64px); line-height:1; font-weight:500; letter-spacing:-.035em; color:#263C32; }
.how-we-work-head p:last-child { max-width:600px; margin:18px auto 0; font-size:14px; line-height:1.65; color:#68735A; }
.how-we-work-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; max-width:1450px; margin:0 auto; }
.how-step { min-height:260px; padding:30px; border:1px solid rgba(38,60,50,.12); border-radius:16px; background:#F7F4ED; }
.how-step-number { display:flex; align-items:center; justify-content:center; width:42px; height:42px; margin-bottom:58px; border-radius:50%; background:#263C32; color:#F7F4ED; font-size:10px; font-weight:700; letter-spacing:.08em; }
.how-step h3 { margin:0 0 11px; font-family:"Playfair Display",Georgia,serif; font-size:27px; font-weight:500; color:#263C32; }
.how-step p { margin:0; max-width:340px; font-size:13px; line-height:1.65; color:#68735A; }

/* Verified-testimonial shell: intentionally hidden until real reviews are supplied */
.client-stories-shell { display:none; }

@media (max-width:1080px) {
  .desktop-nav.open { background:#263C32; }
  .nav-dropdown { display:block; width:100%; height:auto; }
  .nav-dropdown-toggle { width:100%; justify-content:flex-start; padding:8px 0; text-align:left; }
  .nav-dropdown-menu { position:static; width:100%; margin:6px 0 2px; padding:8px 0; border-radius:12px; box-shadow:none; opacity:1; visibility:visible; pointer-events:auto; transform:none; display:none; }
  .nav-dropdown.open .nav-dropdown-menu { display:block; }
  .nav-dropdown:hover .nav-dropdown-menu:not(:focus-within) { transform:none; }
  .nav-dropdown-menu a { padding:10px 16px; }
}
@media (max-width:760px) {
  .how-we-work { padding:70px 20px 76px; }
  .how-we-work-grid { grid-template-columns:1fr; }
  .how-step { min-height:220px; }
  .how-step-number { margin-bottom:36px; }
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

/* Enrich homepage Signature Journeys with practical itinerary metadata */
const journeyMeta = [
  { duration:"10 DAYS", route:"Hanoi · Ha Long · Hoi An · Ho Chi Minh City" },
  { duration:"8 DAYS", route:"Da Nang · Hoi An · Cam Ranh" },
  { duration:"5 DAYS", route:"Da Nang · Hoi An" }
];

document.querySelectorAll(".journey-teaser").forEach((card, index) => {
  const content = card.querySelector(".journey-teaser-content");
  const title = content?.querySelector("h3");
  if (!content || !title || !journeyMeta[index] || content.querySelector(".journey-meta")) return;
  const meta = document.createElement("div");
  meta.className = "journey-meta";
  meta.innerHTML = `<span>${journeyMeta[index].duration}</span><span>${journeyMeta[index].route}</span>`;
  title.insertAdjacentElement("afterend", meta);
});

/* Add a simple, premium 3-step planning flow before Why Pacific World */
const whySection = document.querySelector(".why");
if (whySection && !document.querySelector(".how-we-work")) {
  const howSection = document.createElement("section");
  howSection.className = "how-we-work";
  howSection.innerHTML = `
    <div class="how-we-work-head">
      <p class="eyebrow">HOW WE WORK</p>
      <h2>From brief to journey, simply.</h2>
      <p>One local team keeps the process clear from the first conversation to the final detail on the ground.</p>
    </div>
    <div class="how-we-work-grid">
      <article class="how-step"><span class="how-step-number">01</span><h3>Tell us what you need</h3><p>Share your dates, travellers, priorities and the outcome you want from the journey.</p></article>
      <article class="how-step"><span class="how-step-number">02</span><h3>We design the plan</h3><p>We shape the itinerary, stays, transport, golf, meetings and experiences around your brief.</p></article>
      <article class="how-step"><span class="how-step-number">03</span><h3>We manage every detail</h3><p>Your dedicated team coordinates the journey and stays available for support throughout.</p></article>
    </div>
  `;
  whySection.parentNode.insertBefore(howSection, whySection);
}

/* Prepare a verified client-story section without publishing invented testimonials */
if (whySection && !document.querySelector(".client-stories-shell")) {
  const stories = document.createElement("section");
  stories.className = "client-stories-shell";
  stories.setAttribute("aria-hidden", "true");
  stories.innerHTML = `<p class="eyebrow">CLIENT STORIES</p><h2>What our clients say.</h2>`;
  whySection.parentNode.insertBefore(stories, whySection);
}
