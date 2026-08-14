document.addEventListener("DOMContentLoaded", () => {
  /* Keep legacy team links pointed to the active team page */
  document.querySelectorAll('a[href="our-team.html"]').forEach((link) => {
    link.setAttribute("href", "team.html");
  });

  /* Homepage: the moving trust bar already communicates these proof points. */
  document.querySelector(".why.why-compact")?.remove();

  /* Team page: go straight to the team rather than repeating two large intro statements. */
  if (document.body.classList.contains("team-page")) {
    document.querySelector(".team-hero")?.remove();
    document.querySelector(".people-heading")?.remove();
    const peopleSection = document.querySelector(".people-section");
    if (peopleSection) peopleSection.style.paddingTop = "72px";
  }

  /* Destination cards: destination name only */
  document.querySelectorAll(".destination span").forEach((subtitle) => subtitle.remove());
  document.querySelectorAll(".desktop-nav a, footer a").forEach((link) => {
    if (link.textContent.trim() === "Destinations") link.setAttribute("href", "destinations.html");
  });
  const viewAllDestinations = [...document.querySelectorAll("a")].find((link) =>
    link.textContent.trim().toLowerCase().startsWith("view all destinations")
  );
  if (viewAllDestinations) viewAllDestinations.setAttribute("href", "destinations.html");

  /* Homepage Hanoi card */
  const homepageHanoi = document.querySelector(".destination.d1");
  if (homepageHanoi && !homepageHanoi.dataset.detailLinked) {
    homepageHanoi.dataset.detailLinked = "true";
    homepageHanoi.setAttribute("role", "link");
    homepageHanoi.setAttribute("tabindex", "0");
    homepageHanoi.setAttribute("aria-label", "Explore Hanoi");
    homepageHanoi.style.cursor = "pointer";
    homepageHanoi.addEventListener("click", () => { window.location.href = "hanoi.html"; });
    homepageHanoi.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = "hanoi.html";
      }
    });
  }

  /* MOVING TRUST BAR BELOW HERO */
  const benefitBar = document.querySelector(".hero-benefits");
  if (benefitBar && !benefitBar.classList.contains("trust-marquee")) {
    const benefits = [
      { icon: "♙", label: "Dedicated Specialist" },
      { icon: "◷", label: "24/7 Support" },
      { icon: "⌖", label: "Local Expertise" },
      { icon: "◇", label: "Business + Golf" },
      { icon: "◎", label: "Trusted Partners" },
      { icon: "✦", label: "Tailored Journeys" }
    ];

    const group = benefits.map((item) => `
      <div class="trust-item">
        <span class="trust-icon">${item.icon}</span>
        <span class="trust-label">${item.label}</span>
      </div>
    `).join("");

    benefitBar.classList.add("trust-marquee");
    benefitBar.innerHTML = `
      <div class="trust-track">
        <div class="trust-group">${group}</div>
        <div class="trust-group" aria-hidden="true">${group}</div>
      </div>
    `;

    const trustStyle = document.createElement("style");
    trustStyle.id = "trust-marquee-style";
    trustStyle.textContent = `
      .hero { padding-bottom: 78px; }
      .hero-inner { padding-bottom: 54px !important; }
      .hero-benefits.trust-marquee {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 4;
        display: block;
        min-height: 78px;
        height: 78px;
        overflow: hidden;
        background: #F7F4ED !important;
        border-top: 1px solid rgba(38,60,50,.12);
        color: #263C32;
      }
      .trust-track {
        display: flex;
        width: max-content;
        height: 100%;
        animation: pacificTrustScroll 28s linear infinite;
        will-change: transform;
      }
      .trust-marquee:hover .trust-track { animation-play-state: paused; }
      .trust-group {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        height: 100%;
      }
      .trust-item {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 250px;
        padding: 0 34px;
        border-right: 1px solid rgba(38,60,50,.10);
        white-space: nowrap;
      }
      .trust-icon {
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        flex: 0 0 auto;
        color: #7EA24F;
        font-size: 23px;
        line-height: 1;
      }
      .trust-label {
        color: #263C32;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: .005em;
      }
      @keyframes pacificTrustScroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @media (prefers-reduced-motion: reduce) {
        .trust-track { animation: none; }
      }
      @media (max-width: 720px) {
        .hero { padding-bottom: 68px; }
        .hero-benefits.trust-marquee { height: 68px; min-height: 68px; }
        .trust-track { animation-duration: 34s; }
        .trust-item { min-width: 205px; padding: 0 24px; gap: 10px; }
        .trust-icon { width: 26px; height: 26px; font-size: 20px; }
        .trust-label { font-size: 11px; }
      }
    `;
    document.head.appendChild(trustStyle);
  }

  /* Real Hanoi hotel photos — keep hotel clicks inside Pacific World */
  if (!document.getElementById("real-hotel-photo-style")) {
    const hotelPhotoStyle = document.createElement("style");
    hotelPhotoStyle.id = "real-hotel-photo-style";
    hotelPhotoStyle.textContent = `
      .stay-grid.real-hotels .hotel-property {
        overflow: hidden !important;
        padding: 0 24px 26px !important;
      }
      .stay-grid.real-hotels .hotel-property::before {
        content: "";
        display: block;
        height: 210px;
        margin: 0 -24px 22px;
        background-size: cover;
        background-position: center;
        transition: transform .3s ease;
      }
      .stay-grid.real-hotels .hotel-property:nth-child(1)::before {
        background-image: url("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1340020.jpg");
        background-position: center 52%;
      }
      .stay-grid.real-hotels .hotel-property:nth-child(2)::before {
        background-image: url("https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/680045164-14c37d50ef085549e23d6c45501bc4f1.png?_src=imagekit&tr=dpr-3");
        background-position: center 54%;
      }
      .stay-grid.real-hotels .hotel-property:nth-child(3)::before {
        background-image: url("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1496122.jpg");
        background-position: center 50%;
      }
      .stay-grid.real-hotels .hotel-property:hover::before { transform: scale(1.025); }

      .hotel-collection .hotel-card {
        overflow: hidden !important;
        padding: 0 28px 28px !important;
      }
      .hotel-collection .hotel-card::before {
        content: "";
        display: block;
        height: 220px;
        margin: 0 -28px 22px;
        background-size: cover;
        background-position: center;
      }
      .hotel-collection .hotel-card:nth-child(1)::before {
        background-image: url("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1340020.jpg");
        background-position: center 52%;
      }
      .hotel-collection .hotel-card:nth-child(2)::before {
        background-image: url("https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/680045164-14c37d50ef085549e23d6c45501bc4f1.png?_src=imagekit&tr=dpr-3");
        background-position: center 54%;
      }
      .hotel-collection .hotel-card:nth-child(3)::before {
        background-image: url("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1496122.jpg");
        background-position: center 50%;
      }
      @media (max-width: 760px) {
        .stay-grid.real-hotels .hotel-property::before { height: 190px; }
        .hotel-collection .hotel-card::before { height: 205px; }
      }
    `;
    document.head.appendChild(hotelPhotoStyle);
  }

  /* Client Experience review cards */
  const whySection = document.querySelector(".why");
  if (whySection && !document.querySelector(".client-experience")) {
    document.querySelector(".client-stories-shell")?.remove();
    const clientSection = document.createElement("section");
    clientSection.className = "client-experience";
    clientSection.innerHTML = `
      <div class="client-experience-head">
        <p class="eyebrow">CLIENT EXPERIENCE</p>
        <h2>The kind of travel experience we aim to deliver.</h2>
      </div>
      <div class="client-review-grid">
        <article class="client-review-card"><div class="review-top"><h3>Everything feels taken care of</h3><div class="review-stars">★★★★★</div></div><p class="review-copy">Clear communication, thoughtful coordination and support at the right moments make even complex business travel feel simple and well managed.</p><div class="review-footer"><span class="review-avatar">B</span><span class="review-persona">Business Traveller</span><span class="review-tag">Corporate Travel</span></div></article>
        <article class="client-review-card"><div class="review-top"><h3>Smooth from tee time to transfer</h3><div class="review-stars">★★★★★</div></div><p class="review-copy">Course bookings, hotels and transport are planned as one connected journey, leaving more time to enjoy the golf and the destination.</p><div class="review-footer"><span class="review-avatar">G</span><span class="review-persona">Golf Traveller</span><span class="review-tag">Golf Journey</span></div></article>
        <article class="client-review-card"><div class="review-top"><h3>A retreat that feels effortless</h3><div class="review-stars">★★★★★</div></div><p class="review-copy">A well-paced programme can balance productive time with local experiences, restorative moments and space for teams to reconnect.</p><div class="review-footer"><span class="review-avatar">R</span><span class="review-persona">Corporate Group</span><span class="review-tag">Retreat</span></div></article>
      </div>
    `;
    whySection.parentNode.insertBefore(clientSection, whySection);

    const clientStyle = document.createElement("style");
    clientStyle.textContent = `
      .client-experience{padding:78px 6.4vw 84px;background:#F2EEE5;color:#263C32}
      .client-experience-head{max-width:740px;margin:0 auto 36px;text-align:center}
      .client-experience-head h2{margin:0;font-family:"Playfair Display",Georgia,serif;font-size:clamp(38px,4.3vw,60px);line-height:1;font-weight:500;letter-spacing:-.035em}
      .client-review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1450px;margin:0 auto}
      .client-review-card{min-height:255px;padding:26px;display:flex;flex-direction:column;background:#FCFBF7;border:1px solid rgba(38,60,50,.13);border-radius:8px;box-shadow:0 10px 28px rgba(38,60,50,.045)}
      .review-top{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding-bottom:16px;border-bottom:1px solid rgba(38,60,50,.11)}
      .review-top h3{margin:0;font-family:"Playfair Display",Georgia,serif;font-size:22px;line-height:1.12;font-weight:500}
      .review-stars{flex:0 0 auto;color:#84A957;font-size:14px;letter-spacing:2px}
      .review-copy{margin:18px 0 22px;font-size:13px;line-height:1.65;color:#5E695E}
      .review-footer{margin-top:auto;display:grid;grid-template-columns:34px 1fr auto;align-items:center;gap:10px}
      .review-avatar{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:#263C32;color:#F7F4ED;font-family:"Playfair Display",Georgia,serif}
      .review-persona{font-size:11px;color:#566255}.review-tag{padding:6px 9px;border-radius:5px;background:#EDF3E4;color:#688445;font-size:9px;font-weight:600;white-space:nowrap}
      @media(max-width:980px){.client-review-grid{grid-template-columns:1fr}.client-review-card{min-height:220px}}
    `;
    document.head.appendChild(clientStyle);
  }

  /* Real names + Google review profiles for the rotating homepage client card */
  const realClientProfiles = {
    "Business Traveller": {
      name: "Irene Juarez O'Connell",
      initial: "I",
      url: "https://www.google.com/maps/contrib/102385862973990856404/reviews?hl=en-GB"
    },
    "Golf Traveller": {
      name: "Alyssa Jones",
      initial: "A",
      url: "https://www.google.com/maps/contrib/109798992282280910379/reviews?hl=en-GB"
    },
    "Corporate Group": {
      name: "Anina Monteforte",
      initial: "A",
      url: "https://www.google.com/maps/contrib/103283086171953943390/reviews?hl=en-GB"
    }
  };

  const rotatingClientName = document.getElementById("client-persona");
  const rotatingClientIcon = document.getElementById("client-icon");

  function replaceClientPersonaWithRealName() {
    if (!rotatingClientName) return;
    const current = rotatingClientName.textContent.trim();
    const profile = realClientProfiles[current];
    if (!profile) return;
    rotatingClientName.innerHTML = `<a href="${profile.url}" target="_blank" rel="noopener noreferrer">${profile.name}</a>`;
    if (rotatingClientIcon) rotatingClientIcon.textContent = profile.initial;
  }

  replaceClientPersonaWithRealName();

  if (rotatingClientName) {
    const observer = new MutationObserver(() => replaceClientPersonaWithRealName());
    observer.observe(rotatingClientName, { childList: true, subtree: true, characterData: true });
  }

  if (!document.getElementById("real-client-name-style")) {
    const clientNameStyle = document.createElement("style");
    clientNameStyle.id = "real-client-name-style";
    clientNameStyle.textContent = `
      #client-persona a { color: #566255; text-decoration: none; }
      #client-persona a:hover { color: #263C32; text-decoration: underline; text-underline-offset: 3px; }
    `;
    document.head.appendChild(clientNameStyle);
  }

  /* Footer contact details */
  document.querySelectorAll("footer").forEach((footer) => {
    const companyColumn = [...footer.querySelectorAll(".footer-column")].find((column) =>
      column.querySelector("strong")?.textContent.trim() === "COMPANY"
    );
    if (!companyColumn) return;

    const contactLink = [...companyColumn.querySelectorAll("a")].find((link) => link.textContent.trim() === "Contact Us");
    if (contactLink) contactLink.href = "contact.html";

    if (!companyColumn.querySelector(".footer-contact-details")) {
      const details = document.createElement("div");
      details.className = "footer-contact-details";
      details.innerHTML = `<a href="tel:+84388855913" title="Zalo +84388855913">+84 388 855 913</a><a href="mailto:rosie.pacificworld@gmail.com">rosie.pacificworld@gmail.com</a>`;
      companyColumn.appendChild(details);
    }
  });

  if (!document.getElementById("footer-contact-style")) {
    const style = document.createElement("style");
    style.id = "footer-contact-style";
    style.textContent = `.footer-contact-details{display:flex;flex-direction:column;gap:6px;margin-top:8px}.footer-contact-details a{font-size:12px;line-height:1.4;opacity:.9;overflow-wrap:anywhere}.footer-contact-details a:hover{color:#D4C5AD;opacity:1}`;
    document.head.appendChild(style);
  }
});